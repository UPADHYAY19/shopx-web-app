import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
    const {all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cart-from-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p><Remove></Remove></p>
        </div>
        <hr />
        <div>
            <div className="cartitems-formate">
            <img src="" alt="" className="carticon-product-icon" />
            <p></p>
            <p></p>
            <button></button>
        </div>
        </div>
    </div>
  )
}

export default CartItems