import React from 'react'
import MenShirts from '../components/MenShirts'

const MenShirtsPage = ({
  cartArr,
  setCartArr,
  testing
}) => {
  return (
    <div>
      <MenShirts cartArr={cartArr} setCartArr={setCartArr} testing = {testing}/>
    </div>
  )
}

export default MenShirtsPage
