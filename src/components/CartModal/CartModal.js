import React from 'react'
import { shopping_cart } from '../../utils/images'
import { formatPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import "./CartModal.scss"
function CartModal({ carts }) {
    return (
        <div className='cart-modal'>
            <h5 className='cart-modal-title fw-5 fs-15 font-manrope text-center'>
                Recently Added Products
            </h5>
            {
                (carts?.length > 0) ? (<div>
                    <div className='cart-modal-list grid'>
                        {
                            carts.map(cart => (

                                <div className='cart-modal-item grid align-center font-manrope py-2' key={cart.id}>
                                    <div className='cart-modal-item-img'>
                                        <img src={cart?.thumbnail} alt="" className='img-cover' />
                                    </div>
                                    <div className='cart-modal-item-title fs-13 font-manrope text-capitalize'>{cart?.title}</div>
                                    <div className='cart-modal-item-price text-purple fs-14 fw-6'>
                                        {formatPrice(cart?.discountedPrice)}
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <Link to='/cart' className='text-capitalize view-cart-btn bg-purple fs-15 font-manrope text-center'>
                        view my shopping cart
                    </Link>
                </div>) : (
                    <div className='flex flex-column align-center justify-center cart-modal-empty'>
                        <img src={shopping_cart} alt="" />
                        <h6 className='text-dark fw-4'>No products yet</h6>
                    </div>
                )
            }
        </div>
    )
}

export default CartModal