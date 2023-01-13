import React from 'react'
import { men_shirts } from '../data'
import MenShirtsItem from './MenShirtsItem'
import styled from 'styled-components';
import Cart from './Cart';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const MenShirts = ({
  cartArr,
  setCartArr,
  testing
}) => {
  return (
    <Container>
      {men_shirts.map((item) => (
        <MenShirtsItem key = {item.id} item = {item} cartArr={cartArr} setCartArr={setCartArr} testing = {testing}/>
        
      ))}
      {console.log(men_shirts)}

     
    </Container>
  )
}

export default MenShirts
