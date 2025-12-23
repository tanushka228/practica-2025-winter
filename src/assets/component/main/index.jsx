// import React from 'react'
// import Header from './Header'
// import Block1 from './block1'
// import Block2 from './block2'
// import Block3 from './block3'
// import Block4 from './block4'
// import Block5 from './block5'
// import Footer from './Footer'

import React from 'react'

import Header from '../header'
import Block1Main from './block1'
import Block2Main from './block2'
import Block3Main from './block3'
import Block4Main from './block4'
import Block5Main from './block5'
import Footer from '../footer'

export default function Main() {
  return (
    <div>
      <Header />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Footer />
    </div>
  )
}