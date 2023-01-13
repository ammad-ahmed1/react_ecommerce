import React from 'react'
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styling/MenShirtsItemStyle.css'
const Container = styled.div`
    margin: 25px;
    height: 100vh;
    min-width: 280px;
    display flex;
    position: relative;
    align-items: center;
    flex: 1;
`;

const Image = styled.img`
    flex: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Price = styled.p`
    padding: 10px;
    background-color: white;
    color: gray;
    font-size: 22px;
    
`;
const Button = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
`;


const MenShirtsItem = ({
    item,
    cartArr,
    setCartArr,

}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddToCart = e => {
        setCartArr([...cartArr, item])
        handleShow();

    }
    const handleGoToCart = () => {
        navigate("/Cart2")
    }
    const navigate = useNavigate();
    //console.log(cartArr,"112233");
    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <ShowCart /> */}
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleGoToCart}>
                        Go to cart
                    </Button>
                </Modal.Footer>
            </Modal>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Price className='price' onClick={(e) => handleAddToCart(e)}><h4 className='text'>{item.price}</h4><h4 className='text2'>Add to Cart</h4></Price>

            </Info>
        </Container>
    )
}


export default MenShirtsItem
