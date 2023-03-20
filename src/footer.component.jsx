import React from 'react';
import styled from 'styled-components';
import Breakpoint from './breaktpoint';
import {FooterCopyRights, FooterEmail, FooterEmailLink, FooterCopyRightsMobile, colorfadeGrey, colorfadeGrey2, margins, colorShadeGrey} from './styles';


const Wrapper = styled.div`
    border-top: 1px solid ${props => props.noBorder ? 'transparent' : colorfadeGrey2};
    padding-top: 23px;
    padding-bottom: 23px;
    display: flex;
    justify-content: center;
 
    margin-right: 65px;
    margin-left: 65px;
    margin-top: ${props => props.noBorder ? `43.25px` : `0px`};

`



const WrapperSmall = styled.div`
    border-top: 1px solid ${props => props.noBorder ? 'transparent' : colorfadeGrey2};
    padding-top: 23px;
    padding-bottom: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    margin-right: ${margins}
    margin-left: ${margins}
    margin-top: ${props => props.noBorder ? `43.25px` : `0px`};
`


const WrapperSmallMobile = styled.div`
    border-top: 1px solid ${colorfadeGrey};
    padding-top: 23px;
    padding-bottom: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 110px;  
    align-items: center;
`

class Footer extends React.Component {

    constructor(props) {
        super(props)
    }

  render() {

    const contentD = (
            <>
                <FooterCopyRights >
                    © Noa Maller Studio Inc.
                </FooterCopyRights>

            </>
    )
    const contentM = (
        <>
            <FooterCopyRightsMobile >
                © Noa Maller Studio Inc.
            </FooterCopyRightsMobile>

        </>
)

    return (
        <>
            <Breakpoint name="moreThen900">
                <Wrapper noBorder={this.props.type=='headless'}>
                    {contentD}
                </Wrapper>
            </Breakpoint>

            <Breakpoint name="lessThen900">
                <WrapperSmall noBorder={this.props.type=='headless'}>
                    {contentM}
                </WrapperSmall>
            </Breakpoint>



        </> 
    )

  }
}

export default Footer;