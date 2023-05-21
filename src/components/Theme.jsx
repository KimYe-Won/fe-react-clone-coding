// // const font={

// // }
// // const colors={
// //     black:"#000000",
// //     white:"#ffffff",
    
// // }

// // const themes={
// //     font,
// //     colors,
// // };

// // export default themes;

// import styled from "styled-components";
import styled from "styled-components";

const Theme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px 0px 100px 0px;
`

const HeaderTxt = styled.h1`
  font-size: 35px;
  font-weight: 300;
  height: 58px;
`

const InTxt = styled.p`
  word-spacing: -2px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  color: #6c6a6a;
  margin-bottom: 25px;
`

const wrap= styled.div`
 display: flex;
 justify-content: space-between;
 width: 400px;
`

const HeaderB = styled.button`
  width: 150px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  font-size:15px;
  margin-right: 5px;
  border: none;
  border-radius: 3.2px;
  cursor: pointer;
  
  &:hover {
    background-color: blue;
    transition-duration: 0.2s;
  }
`


const InB =styled.button`

  width: 150px;
  height: 40px;
  background-color:#6c757d;
  color: #fff;

  font-size: 15px;
  border: none;
  border-radius: 3.2px;
  cursor: pointer;

  &:hover {
    background-color:  #6b6969;
    transition-duration: 0.2s;
  }
`


const Main =  (props) => {
  return (
    <Theme>
      <HeaderTxt>Album example</HeaderTxt>
      <InTxt>
        Something short and leading about the collection below—its contents,
        <br />, the creator, etc. Make it short and sweet, but not too short so
        folks don’t <br /> simply skip over it entirely 
        </InTxt>
        <wrap>
        <HeaderB>Main call to action</HeaderB>
        <InB>Secondary action</InB>  
        </wrap>
    </Theme>
  );
};

export default Main;