// // const Footer=() =>{
// //     return(
// //         <footer>
// //             <h2>This is Footer</h2>
// //         </footer>
// //     )
// // }

// // export default Footer


import React from 'react';
import styled from "styled-components";

const Footer1= styled.div`
width:100%;
height: 150px;
background-color: white;
`

const FootTxt=styled.p`
    margin-left: 190px;
    margin-top: 50px;
    font-weight: 100;
`

const StyledLink =styled.link`
    color: aqua;
`;
const Footer = () => {
    return (
 <Footer1><FootTxt>Album example is © Bootstrap, but please download and customize it for yourself!
 <br/>New to Bootstrap? Visit the homepage
  or read our getting started guide.
 </FootTxt>
 </Footer1>
    );
};

export default Footer;