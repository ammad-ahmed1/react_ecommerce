import React from 'react'
import cartArr from '../App'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styling/ShowCart.css'
import { DialogContent } from '@mui/material'
const ShowCart = ({ cartArr }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0)
    //const [total, setTotal] = useState(null)
    var total = 0;
    const handleAdd = (e) => {
        setQuantity(quantity + 1);
    }
    const handleCheckout = (bill) => {
        navigate("/register");
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product img</th>
                        <th scope="col">Product title</th>
                        <th scope="col">Product price</th>
                        {/* <th scope="col">Quantity</th>
                        <th scope="col">Sub total</th> */}
                    </tr>
                </thead>
                <tbody>
                    {cartArr.map((item, index) =>
                        <tr>
                            <td><b>{index + 1}</b></td>
                            <td><img src={item.img} className='cart-img' /></td>
                            <td><h6>{item.title}</h6></td>
                            <td><h6>{item.price}</h6></td>
                            {/* <td>
                                <button className='btn btn-primary' onClick={(e)=>handleAdd(e)} >+</button>
                                <h6>{1}</h6>
                                <button className='btn btn-secondary'>-</button>
                            </td>
                            <td><b>{subTotal * quantity}</b></td> */}

                        </tr>
                    )
                    }
                </tbody>
            </table>
            <p className='d-print-none text-white'>{cartArr.map((item) => total += item.price)}</p>

            <div className='bill row'>
                <div className='col p-5'>
                    <h1>Total: {total}</h1>
                </div>
                <div className='col   d-flex justify-content-end p-5'>
                    <button className='btn btn-dark ' onClick={handleCheckout}>Checkout</button>
                </div>
            </div>



        </div>
    )
}

export default ShowCart