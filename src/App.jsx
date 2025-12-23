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