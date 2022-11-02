import './cart-dropdown.styles.scss'
import Button from '../components/button/button.component'
import CartItem from '../components/cart-item/cart-item.component'

import { useContext } from 'react';

import { CartContext } from '../components/contexts/card-context';


const CartDropdown = () =>{

    const {cartItems} = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map((item)=>(

                <CartItem key={item.id} cartItem={item}/>
            ))}

            </div>
            <Button>Go To Checkout</Button>

        </div>
    )
}

export default CartDropdown