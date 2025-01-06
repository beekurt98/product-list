import { useState } from 'react'
import './App.css'
import { product } from './data.jsx'


function App() {
  const [cartDetails, setCardDetails] = useState({ itemName: "", itemPrice: "", itemAmount: 0, itemId: null })
  const [amount, setAmount] = useState(0)
  const [addButton, setAddButton] = useState(false)
  const [cart, setCart] = useState([])
  const [cartEmpty, setCartEmpty] = useState(true)
  const [items, setItems] = useState([])

  function addToCart(name, price, index) {
    const itemDetails = {
      itemName: name,
      itemPrice: price,
      itemId: index,
    }
    // setCart((prevCart) => [...prevCart, itemDetails])
    setItems([...items, name])
    console.log(itemDetails)
    setCartEmpty(false)

    if (amount === 0) {
      setAmount(1);
      setAddButton(true);
    }
  }

  function increment() {
    setAmount(prevAmount => prevAmount + 1)
  }

  function decrement(name) {
    if (amount === 1) {
      setAddButton(false);
      setCartEmpty(true);
      setItems(items.filter(item => item !== name))
    }
    if (amount > 0) {
      setAmount(prevAmount => prevAmount - 1);
    }
  }

  console.log(items)

  return (
    <div className='the-main'>
      <div className="left-cont">
        <h1>Desserts</h1>
        <div className="desserts-all">
          {
            product.map((x, index) => (
              <div key={index} className='dessert-card'>
                <div className='img-btn-cont'>
                  <img src={`./src/images/${x.name}.png`} />
                  {
                    addButton && items.includes(x.name) ?
                      <button className='add-btn' style={{ backgroundColor: "red" }}>
                        <span onClick={(e) => { e.stopPropagation(); decrement(x.name); console.log(index) }} >-</span>
                        {amount}
                        <span onClick={(e) => { e.stopPropagation(); increment(); }}>+</span>
                      </button> :
                      <button className='add-btn' value={x.name} onClick={() => addToCart(x.name, x.price, index)} >
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_688_197)">
                            <path d="M6.5835 18.75C7.27385 18.75 7.8335 18.1904 7.8335 17.5C7.8335 16.8096 7.27385 16.25 6.5835 16.25C5.89314 16.25 5.3335 16.8096 5.3335 17.5C5.3335 18.1904 5.89314 18.75 6.5835 18.75Z" fill="#C73B0F" />
                            <path d="M15.3335 18.75C16.0239 18.75 16.5835 18.1904 16.5835 17.5C16.5835 16.8096 16.0239 16.25 15.3335 16.25C14.6431 16.25 14.0835 16.8096 14.0835 17.5C14.0835 18.1904 14.6431 18.75 15.3335 18.75Z" fill="#C73B0F" />
                            <path d="M3.446 1.7525C3.41769 1.61087 3.3412 1.48341 3.22954 1.3918C3.11787 1.3002 2.97793 1.25009 2.8335 1.25H0.333496V2.5H2.321L4.721 14.4975C4.7493 14.6391 4.82579 14.7666 4.93746 14.8582C5.04912 14.9498 5.18906 14.9999 5.3335 15H16.5835V13.75H5.846L5.346 11.25H16.5835C16.7257 11.25 16.8636 11.2015 16.9745 11.1125C17.0854 11.0235 17.1626 10.8994 17.1935 10.7606L18.611 4.375H17.3316L16.0822 10H5.096L3.446 1.7525Z" fill="#C73B0F" />
                            <path d="M11.5835 3.75V1.25H10.3335V3.75H7.8335V5H10.3335V7.5H11.5835V5H14.0835V3.75H11.5835Z" fill="#C73B0F" />
                          </g>
                        </svg>
                        Add to Cart
                      </button>

                  }
                </div>
                <p className='dessert-cat'>{x.category}</p>
                <p className='dessert-name'>{x.name}</p>
                <p className='price'>${`${x.price}`.includes(".") ? `${x.price}0` : `${x.price}.00`}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='right-side'>
        <div className="cart-cont">
          <h2>Your Cart (0)</h2>

          {
            cartEmpty ?
              <>
                <img src="./src/images/cake-cart.svg" />
                <p>Your added items will appear here.</p>
              </> :
              <ul>
                {
                  items
                    .filter(item => item !== "")
                    .map(item => <li key={crypto.randomUUID()}>{item}</li>)
                }
              </ul>
          }

        </div>
      </div>
    </div>
  )
}

export default App
