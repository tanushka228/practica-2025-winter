import { useState } from "react";
import HeaderComponent from "./assets/component/header";
import SignUpModal from "./assets/component/modals/SignUpModal";
import Block1 from "./assets/component/main/block1";
import Block2 from "./assets/component/main/block2";
import Block3 from "./assets/component/main/block3";
import Block4 from "./assets/component/main/block4";
import Block5 from "./assets/component/main/block5";
import FooterComponent from "./assets/component/footer";

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <HeaderComponent isAuth={isAuth} onSignUpClick={() => setIsSignUpOpen(true)} />

      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <FooterComponent />

      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} onSuccess={() => {
          setIsAuth(true);          
          setIsSignUpOpen(false);   
        }} />
    </div>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom"
// import { useState } from "react"

// import HeaderComponent from "./assets/component/header"
// import FooterComponent from "./assets/component/footer"
// import SignUpModal from "./assets/component/modals/SignUpModal"

// // страницы
// import Main from "./assets/component/main"
// import AboutUs from "./assets/component/aboutUs"
// import Catalog from "./assets/component/catalog"

// function App() {
//   const [isSignUpOpen, setIsSignUpOpen] = useState(false)
//   const [isAuth, setIsAuth] = useState(false)

//   return (
//     <>
//       <HeaderComponent
//         isAuth={isAuth}
//         onSignUpClick={() => setIsSignUpOpen(true)}
//       />

//       <Routes>
//         <Route path="/" element={<Main />} />
//         {/* <Route path="/about" element={<AboutUs />} />
//         <Route path="/catalog" element={<Catalog />} /> */}
//       </Routes>

//       <FooterComponent />

//       <SignUpModal
//         isOpen={isSignUpOpen}
//         onClose={() => setIsSignUpOpen(false)}
//         onSuccess={() => {
//           setIsAuth(true)
//           setIsSignUpOpen(false)
//         }}
//       />
//     </>
//   )
// }

// export default App;