import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, totalPrice }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map( cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
		}

		<div className='total'>
			<span>TOTAL: ${totalPrice}</span>
		</div>
		<div className='test-warning'>
			*Please use the following test visa card for payment*
			<br/>
			4242 4242 4242 4242; exp: any future date; CVV: any 3 digit no.
		</div>
		<StripeCheckoutButton price={totalPrice} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);