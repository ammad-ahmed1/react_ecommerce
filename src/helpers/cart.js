 import useState from 'react'
 let nextd = 0;
export const AddInCart  = (
    item,
    cartArr,
  setCartArr)=>{
   console.log(item)
   console.log(cartArr,'cartArr')
   let obj = {id: nextd++, title: item.title, img: item.img, price: item.price, quantity: item.quantity}
   console.log(obj,'testing')
      
}