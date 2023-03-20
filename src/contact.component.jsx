import React from 'react';
import styled from 'styled-components';
import Breakpoint from './breaktpoint';
import {InputBox, SendButton, NormalText, NormalTextTitle, NormalTextSmall, SendButtonWide, colorfadeGrey} from './styles';
import emailjs from 'emailjs-com';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {colorBlack, textMedSize, colorFadeBlack, fontFamily, colorGrey, margins, NormalTextSmallLink} from './styles';
import {getImage} from './images'
import Footer from './footer.component'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Right = styled.div`
  width: 75%;
  
`

const Left = styled.div`
  width: 25%;
  margin-right: 132px;
`

const WrapperDesktop = styled.div`
  display: flex; 
  margin: 0 65px;
  justify-content: space-between;
  margin-bottom: 85px;
`

const WrapperMobile = styled.div`
  display: flex; 
  flex-direction: column;
`

const InnerWrapperMobile = styled.div`
  padding: 0 ${margins};
  
`

const InputPanel = styled.div`
  margin-bottom: 40px;
  display: flex;
 
`

const InputPanelInput = styled.div`
  margin-bottom: 40px;
  display: flex;
  border-bottom: 1px solid #949597;
  &:hover {
    border-bottom: 1px solid ${colorBlack};
  }
  transition: all 500ms ease-in-out;
 
`

const InputPanelInputNoSpace = styled.div`
  margin-bottom: 10px;
  display: flex;
  border-bottom: 1px solid #949597;
  &:hover {
    border-bottom: 1px solid ${colorBlack};
  }
  transition: all 500ms ease-in-out;

`

const FacebookIcon = styled.img`
  width: 16px;
  margin-right: 10px;
  cursor: pointer; 
`

const InstagramIcon = styled.img`
  width: 19px;
  cursor: pointer; 
`

const EmailLink = styled.a`
  color: ${colorBlack};
`

const Error = styled.div`
  width: 100%;
  border: 1px solid ${colorGrey};
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 40px;
`

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
`

const EmailFormWrapper = styled.div`
  width: 50%;
  margin-top: 40px;
`

const EmailUsButton = styled.button`

`

const Services = styled.div`
  display: flex;
  justify-content: space-between;
`

const ServiceBox = styled.div`
  border: 1px solid #eee;
  height: 100px;
  width: 30%;
  border-radius: 4px;
`

const Spacer40 = styled.div`
  width: 40px;
  height: 40px;
`

const Spacer20 = styled.div`
  width: 20px;
  height: 24px;
`

const TitleSpace = styled.div`
  height: 10px;
`

const InvalidField = styled.div`
  font-size: 12px;
  color: #e75146;
`

export const SendButtonEmpty = styled.button`
  width: 150px;
  height: 50px;
  outline: none;
  border: none;
  background-color: white;
  font-size: ${textMedSize};
`

const TextareaAutosizeStyled = styled(TextareaAutosize)`
  padding-bottom: 15px;
  width: 100%;
  outline: none;
  border: none;

  font-size: ${textMedSize};
  color: ${colorBlack};
  line-height: 30px;
  font-family: ${fontFamily};
  resize: none;
  &:focus {
    
    &::-webkit-input-placeholder {
      color: ${colorfadeGrey};
      transition: color 250ms ease-in-out;
    }
    transition: color 250ms ease-in-out;
  }
  transition: border-bottom 500ms ease-in-out, color 250ms ease-in-out;
`;

export const SocialIconsWrap = styled.div`
  display: flex;
`

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sending: false,
      status: false,
      error: false,
      success: false
    }
  }

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({
      sending: true
    })
    emailjs.sendForm('default_service', 'template_bDWQ158O', e.target, 'user_7CKTkECQChyAk6waLpVWB');
    setTimeout(() => {
      this.setState({
        sending: false,
        success: true,
        error: false
      })
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("inq").value = "";
    }, 2000);
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  sendEmail2 = (e) => {
    e.preventDefault();

    this.setState({
      sending: true
    })

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const inq = document.getElementById("inq").value;

    if (!this.validateEmail(email)) {
      this.setState({
        emailNotValid: true,
        sending: false
      })
      return;
    }

    fetch(`https://quiet-retreat-43323.herokuapp.com/api/v1/sendEmail`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          to: 'studio@noamaller.com',
          type: 'inquiry',
          inquiry: inq,
          from: email,
          toName: name
      })
    }).then(res => {
      this.setState({
        sending: false,
        success: true,
        error: false,
        emailNotValid: false
      })
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("inq").value = "";
      fetch(`https://quiet-retreat-43323.herokuapp.com/api/v1/sendEmail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: email,
            type: 'autoReplayToInquiry',
            toName: name
        })
      }).then(response => {
        if (response.status != 200) {
          this.setState({
            sending: false,
            success: false,
            error: true
          })          
        }
      }, e => {
        this.setState({
          sending: false,
          success: false,
          error: true
        })
      })
    }, e => {
      this.setState({
        sending: false,
        success: false,
        error: true
      })
    })
  }

  render() {

    const emailForm = (

      <form className="contact-form" onSubmit={this.sendEmail2}>

          {!this.state.sending && this.state.success && (
          <Error>
            <NormalText>
              We have recived your message! We will get back to you as soon as possible.
            </NormalText>
          </Error>
          )}


          {this.state.error && (
          <Error>
            <NormalText>
              Oops, sorry, we couldnt recive your message, but that should not keep us apart. You can always send us an email to &nbsp;<EmailLink href="mailto:studio@noamaller.com">studio@noamaller.com</EmailLink> 
              &nbsp; or chat with us directly on Facebook. 
            </NormalText>
          </Error>
          )}

          {(
            <>
              <input type="hidden" name="contact_number" />
              <InputPanelInput>
                <InputBox required placeholder="Your Name" type="text" name="from_name" id="name"></InputBox>
              </InputPanelInput>
              <InputPanelInputNoSpace>
                <InputBox required placeholder="Your Email" type="text" name="reply_to" id="email" onInput={() => this.setState({emailNotValid:false})}></InputBox>
              </InputPanelInputNoSpace>
              
              {this.state.emailNotValid && (
              <InvalidField>
                Please use a valid email
              </InvalidField>)}
              <Spacer20></Spacer20>
              {false && (
                <>
              <NormalText>
                Select services
              </NormalText>
              <Spacer20></Spacer20>
              
              
                
              <Services>
                <ServiceBox>
                  <NormalText>
                    Illustration
                  </NormalText>
                </ServiceBox>
                <ServiceBox>
                  
                </ServiceBox>
                <ServiceBox>
                  
                </ServiceBox>  
              </Services>                          
              <Spacer20></Spacer20>
              <Spacer20></Spacer20>
              <Spacer20></Spacer20>
              <Spacer20></Spacer20>
              </>
              )}
              <InputPanelInput>
                <TextareaAutosizeStyled required placeholder="Drop us a line..." type="text" name="message_html" id="inq"/>
              </InputPanelInput>
            </>
          )}

          <Breakpoint name="moreThen900">
            <Spacer40></Spacer40>

          </Breakpoint> 


          {!this.state.sending && (
            <InputPanel>
            <Breakpoint name="moreThen900">
              <SendButton type="send" value="Send">
                Send
              </SendButton>
            </Breakpoint>  
            <Breakpoint name="lessThen900">
              <SendButtonWide type="send" value="Send">
                Send
              </SendButtonWide>
            </Breakpoint>  
            </InputPanel>
          )}

          {this.state.sending && (
            <InputPanel>
              <SendButtonEmpty type="send" value="Send">
                  <div class="loadingio-spinner-reload-33hxyq8tgpl"><div class="ldio-k7v02xvg1i">
                  <div><div></div><div></div><div></div></div>
                  </div></div>
              </SendButtonEmpty>
            </InputPanel>
          )}          
      
      </form>

    )

    const letstalk = (
      <>
        <NormalTextTitle>
          Lets talk!
        </NormalTextTitle>
        <TitleSpace/>

        <NormalTextSmall>
          We would love to hear from you, whether you want to know more about our services or wish to discover how our studio can suport your project.
        </NormalTextSmall>
      </>
    )

    const emailus = (
      <>
        <NormalTextTitle>
          Our Email
        </NormalTextTitle>
        <TitleSpace/>
        <EmailLink href="mailto:studio@noamaller.com">
          <NormalTextSmallLink>
            studio@noamaller.com
          </NormalTextSmallLink>  
        </EmailLink> 
      </>     
    )

    const followus = (
      <>
        <NormalTextTitle>
          Chat & Follow
        </NormalTextTitle>
        <TitleSpace/>
        <SocialIconsWrap>
          <a href="https://www.instagram.com/noamaller_studio/" target="_blank"
          onMouseOver={() => this.setState({instHovered: true})} onMouseLeave={() => this.setState({instHovered: false})}>
            <InstagramIcon src={getImage(`icons8-instagram.svg`)}/>
          </a>
          <Spacer20></Spacer20> 
          <a href="https://www.behance.net/noamaller" target="_blank"
          onMouseOver={() => this.setState({behanceHovered: true})} onMouseLeave={() => this.setState({behanceHovered: false})}>
            <InstagramIcon src={getImage(`icons8-behance.svg`)}/>
          </a>
          <Spacer20></Spacer20> 
          <a href="https://dribbble.com/noamallerstudio" target="_blank"
          onMouseOver={() => this.setState({behanceHovered: true})} onMouseLeave={() => this.setState({behanceHovered: false})}>
            <InstagramIcon style={{opacity:'0.54'}} src={getImage(`icons8-dribbble.svg`)}/>
          </a>

          
        </SocialIconsWrap>
      </>
    )
    
    const contentDesktop = (
      <>

        <Left>

        {letstalk}

        <Spacer40></Spacer40>


        {emailus}

        <Spacer40></Spacer40>


        {followus}

        </Left>

        <Right>

        {emailForm}

        </Right>

        

      </>
    )

    const contentMobile = (
      <>

        {letstalk}

        <Spacer40></Spacer40>
        
        {emailForm}

       
        {emailus}

        <Spacer40></Spacer40>

        {followus}

        <Spacer40></Spacer40>


      </>
    )

    return (
      <>

        <Breakpoint name="moreThen900">
          <WrapperDesktop>
            {contentDesktop}
          </WrapperDesktop>
        </Breakpoint>

        <Breakpoint name="lessThen900">
          <WrapperMobile>
            <InnerWrapperMobile>
              {contentMobile}
            </InnerWrapperMobile>
          </WrapperMobile>
        </Breakpoint>

    

        
        

      </>
    )
  }
}

export default Contact;