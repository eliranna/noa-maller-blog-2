import styled from 'styled-components';

export const colorBlack = 'rgb(29, 33, 41, 0.95)';
export const colorGreyDark = 'rgb(109, 110, 112)';
export const colorGrey = 'rgb(109, 110, 112)';
export const colorShadeGrey = 'rgb(29, 33, 41, 0.03)';
export const colorfadeGrey = 'rgb(29, 33, 41, 0.25)';
export const colorfadeGrey2 = 'rgb(29, 33, 41, 0.1)';
export const colorFadeBlack = 'rgb(29, 33, 41, 0.5)';

export const textLargeSize = '18px';
export const textMedSize = '16px';
export const textSmallSize = '12px';
export const textExtraSmallSize = '12px';

export const margins = '14vw';
export const barspace = '18.6vw';

export const fontFamily = "'Inria Serif', serif";

export const NavigationMenuLink = styled.a`
    color: ${colorfadeGrey} !important;
    
    &:hover {
       color: #111;
    }    
    font-size: 24.4px !important;
`

export const NavigationMenuLinkMobileSmall = styled.a`
    color: ${colorfadeGrey} !important;
    &:hover {
       color: #111;
    }    
    font-size: 18px !important;
`


export const MobileMenuButton = styled.button`
    display: inline-block;
    border: none;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    background: none;
    color: ${colorGrey};
`

export const ProjectThumbnailProjectName = styled.div`
    color: ${colorGrey};
    font-size: ${textExtraSmallSize} !important;
    font-style: italic;
`

export const ProjectThumbnailServiceName = styled.div`
    color: ${colorGrey};
    font-size: ${textExtraSmallSize} !important;
`

export const ProjectDetailsEntry = styled.div`
    color: ${colorGrey};
    font-size: ${textExtraSmallSize} !important;
    width: 100%;
`

export const ProjectDetailsDescriptionText = styled.div`
    color: ${colorGrey};
    font-size: ${textMedSize} !important;
    width: 100%;
    line-height: 1.6em;
`

export const LogoText = styled.div`
    width: 50px;
    text-align: center;
`

export const AboutText = styled.div`
    color: ${colorGrey};
    line-height: 26px;
    font-size: ${textMedSize} !important;
`

export const NormalText = styled.div`
    color: ${colorGrey};
    line-height: 1.5em;
    font-size: ${textMedSize} !important;
`

export const NormalTextTitle = styled.div`
    color: ${colorGrey};
    line-height: 1.5em;
    font-size: ${textMedSize} !important;
`
export const NormalTextSmall = styled.div`
    color: ${colorGrey};
    line-height: 26px;
    font-size: ${textSmallSize} !important;
`

export const NormalTextSmallLink = styled.div`
    color: ${colorGrey};
    line-height: 1.5em;
    font-size: ${textSmallSize} !important;
    &:hover {
        color: ${colorBlack};
    }
`

export const ServicesTitleText = styled.div`
    color: ${colorGrey};
    line-height: 1.5em;
    font-size: ${textMedSize} !important;
`

export const ServiceTitleText = styled.div`
    color: ${colorGrey};
    line-height: 1.5em;
    font-size: ${textMedSize} !important;

`
 
export const ServiceDescriptionText = styled.div`
    color: ${colorGrey};
    line-height: 1.5em;
    font-size: ${textMedSize} !important;
`

export const ImageDescriptionText = styled.div`
    color: ${colorGrey};
    line-height: 1.5em;
    font-size: ${textSmallSize} !important;
`

export const InputBox = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: ${textMedSize} !important;
  color: ${colorBlack}; 
  padding-bottom: 15px;
  font-family: ${fontFamily};
  &:focus {
    
    &::-webkit-input-placeholder {
        color: ${colorfadeGrey}; 
        transition: color 250ms ease-in-out;
    }
  }
  transition: all 500ms ease-in-out;
`

export const TextBox = styled.textarea`
  padding-bottom: 15px;
  width: 100%;
  outline: none;
  border: none;

  font-size: ${textMedSize} !important;
  color: ${colorBlack};
  
`

export const SendButton = styled.button`
  width: 150px;
  height: 50px;
  outline: none;
  border: 1px solid #949597;
  background-color: white;
  font-size: ${textMedSize} !important;
  color: ${colorGrey}; 
  cursor: pointer;
  font-family: ${fontFamily};
  &:hover {
    color: ${colorBlack};
    border: 1px solid ${colorBlack};
  }
  transition: all 250ms ease-in-out;
`

export const SendButtonWide = styled.button`
    width: 100%;
    height: 50px;
    outline: none;
    border: 1px solid ${colorFadeBlack};
    background-color: white;
    font-size: ${textMedSize} !important;
    color: ${colorBlack}; 
    cursor: pointer;
    font-family: ${fontFamily}
`

export const FooterCopyRights = styled.div`
    color: ${colorfadeGrey};
    font-size: ${textExtraSmallSize} !important;
    margin-right: 20px;
`

export const FooterEmail = styled.div`
    line-height: 12px;
`

export const FooterEmailLink = styled.a`
    color: ${colorfadeGrey};
    font-size: ${textExtraSmallSize} !important;
`

export const FooterCopyRightsMobile = styled.div`
    color: ${colorfadeGrey};
    font-size: ${textExtraSmallSize} !important;
`






















