import React from 'react'
import { menTshirts } from '../data'
import MenTshirtsItem from './MenShirtsItem'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const MenTshirts = (
  {cartArr,
    setCartArr,
    testing}
) => {
  // console.log(cartArr,'fdafdsa in only shirts')
  return (
    <Container>
      {menTshirts.map(item => (
        <MenTshirtsItem  item = {item} key = {item.id} cartArr={cartArr} setCartArr={setCartArr} testing = {testing}/>
      ))}
    </Container>
  )
}

export default MenTshirts
