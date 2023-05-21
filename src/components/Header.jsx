// // const HeaderEach=styled.div`
// // width: 500px;
// // height: 100px;
// // margin: 50px;
// // background-color: ${(props) => props.headerColor? props.headerColor:"green"};
// // display:flex;

// // `
// // const HeaderText=styled.p`
// //     font-size: 30px;
// // `
// // const Header=(props)=>{
// //     return(<>
// //         <HeaderEach headerColor = {props.headerColor}>
// //         <HeaderText>{props.text}</HeaderText>
// //         </HeaderEach>
        
// //         </>)
// // }

// // export default Header;

// // const Header = () => {
// //     return (
// //         <header>
// //             <a href="" ><strong class="nav-logo">Album</strong></a>
// //             <h2>This is Header</h2>
// //         </header>
// //     )
// // }

// // export default Header

// 여기부터입니다
import React from "react";
import styled from "styled-components"
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderContainer = styled.div `
  background-color: #363a3f;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */
`

const Title = styled.h1`
  color:white;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left :200px;

`

const Txt = styled.h1`
    font-size: 20px;
    margin-left: 5px;
`
const Button = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #494E53;
    border-radius: 5px;

    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 220px;
    padding:5px;
    padding-left: 12px;
    padding-right: 12px;
    
    cursor: pointer;
`
const Header = () => {
    return (
        <HeaderContainer>
            <Title> 
                <AiOutlineCamera color="white" size="24px"/>
                <Txt>Album</Txt>
            </Title>
            <Button>
                <AiOutlineMenu color="#9A9DA0" size="28px"/>
            </Button>
        </HeaderContainer>
    );
};


export default Header;