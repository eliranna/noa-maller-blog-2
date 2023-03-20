import React from 'react'
import MediaQuery from 'react-responsive';

const breakpoints = {
 desktop: '(min-width: 751px)',
 tablet: '(min-width: 768px) and (max-width: 1024px)',
 mobile: '(max-width: 750px)',
 mobileSmall: '(max-width: 600px)',
 notMobileSmall: '(min-width: 601px)',
 lessThen1200: '(max-width: 1399px)',
 moreThen1200: '(min-width: 1400px)',
 lessThen1200NotMobile: '(min-width: 750px) and (max-width: 1399px)',
 lessThen900: '(max-width: 899px)',
 moreThen900: '(min-width: 900px)',
 mobiletotablet: '(min-width: 751px) and (max-width: 899px)'
};

export default function Breakpoint(props) {
 const breakpoint = breakpoints[props.name] || breakpoints.desktop;
return (
 <MediaQuery {...props} query={breakpoint}>
    {props.children}
 </MediaQuery>
 );
}