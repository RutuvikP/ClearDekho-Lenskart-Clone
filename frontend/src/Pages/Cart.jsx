import React, { useState } from 'react';
import "./Cart.css";

const Cart = () => {
  // Product data and initial cart state
  const products = [
    { id: 1, name: 'black gold full rim hexagon john jacobs supreme steel jj e11675-c1 eyeglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e11675-c1-eyeglasses_g_1122_2.jpg', price: 1999 },
    { id: 2, name: 'black gold full rim hexagon john jacobs supreme steel jj e11675-c1 eyeglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e11675-c1-eyeglasses_g_1122_2.jpg', price: 999 }
    // Add more products as needed
  ];
  const [cart, setCart] = useState([
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 }
    // Add more items to the cart as needed
  ]);

  const [coupoun,setCoupoun]=useState("");

  // Functions for updating the cart
  const incrementQuantity = (id) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    }));
  };
  const decrementQuantity = (id) => {
    setCart(cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    }));
  };
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };


  // Calculate total price and tax
  const totalPrice = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product.price * item.quantity);
  }, 0);
  const tax = totalPrice * 0.18;
  let totalPayable = totalPrice + tax;

  const handleApplyCoupon = () => {
    if ( coupoun === 'CLEARDEKHO50') {
      totalPayable= totalPayable - 50
    }
    console.log(totalPayable)
  };

  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Cart ({cart.length} items)</h2>
        {cart.map(item => {
          const product = products.find(p => p.id === item.id);
          return (
            <div className="cart-item" key={item.id}>
              <img src={product.image} alt={product.name} />
              <div className="item-details">
                <h3>{product.name}</h3>
                <p>Final Price: ₹{product.price}</p>
                <div className="quantity">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
                <button onClick={() => setCart([...cart, { id: item.id, quantity: 1 }])}>Repeat</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
        <p>Tax (18%): ₹{tax.toFixed(2)}</p>
        <p>Total Payable: ₹{totalPayable.toFixed(2)}</p>
        <div className="coupon">
          <input type="text" placeholder="Enter coupon code" onChange={(e)=>setCoupoun(e.target.value)} />
          <button  onClick={handleApplyCoupon}>Apply</button>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
