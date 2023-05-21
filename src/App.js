// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
// import Header from ". C:\Users\82105\Desktop\clone\fe-react-clone-coding\src\components\Header.jsx"; 

// function App() {
//   return <>모두 화이팅!</>;
// }
// import Footer from "./components/Footer";
// import Header from "./components/Header";

// const App = () =>{
//   return(<>
//   {/* <Header headerColor */}
//   <div>
//     <Header />
//       <main>
        
//       </main>
//     <Footer />
//   </div>
//   </>)
// }
// export default App;

import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer'
import GlobalStyle from './components/Global';
import Theme from './components/Theme';
import Ex from './components/Ex';
import Button from './components/Button'
import { ThemeConsumer } from 'styled-components';


function App() {
  return( 
    <>
    <GlobalStyle/>
    <Header/>
    <Theme/>
    <Ex/>
    <Footer/>
    </>
  );
}

export default App;