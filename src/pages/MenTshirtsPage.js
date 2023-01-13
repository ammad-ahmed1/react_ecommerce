import React, { useEffect } from 'react'
import MenTshirts from '../components/MenTshirts'

const MenTshirtsPage = ({
  cartArr,
  setCartArr,
  testing
}) => {
  // console.log(cartArr,'fdafdsa in page')
   
  return (
    <div>
      <MenTshirts cartArr={cartArr} setCartArr={setCartArr} testing = {testing}/>
    </div>
  )
}

export default MenTshirtsPage
