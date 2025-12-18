import { useState } from 'react'
import HeaderComponent from './assets/component/header/index.jsx'
import Block1 from './assets/component/block1/index.jsx'
import Block2 from './assets/component/block2/index.jsx'
import Block3 from './assets/component/block3/index.jsx'
import Block4 from './assets/component/block4/index.jsx'
import Block5 from './assets/component/block5/index.jsx'
import FooterComponent from './assets/component/footer/index.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Block1></Block1>
      <Block2></Block2>
      <Block3></Block3>
      <Block4></Block4>
      <Block5></Block5>
      <FooterComponent></FooterComponent>

    </div>
  )
}

export default App
