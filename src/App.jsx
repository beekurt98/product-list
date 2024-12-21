import { useState } from 'react'
import './App.css'
import { product } from './data.jsx'

function App() {
  
  return (
    <div className='the-main'>
      <MainCont />
      <CartCont />
    </div>
  )
}

function MainCont() {
  return (
    <div className="main-cont">
      <h1>Desserts</h1>
      <Desserts />
    </div>
  )
}

function Desserts() {
  return(
    <div className="desserts-all">
      {
        product.map((x) => (
          <div key={x.name} className='dessert-card'>
            <DessertCard name={x.name} category={x.category} price={x.price} />
          </div>
        ))
      }
    </div>
  )
}

function DessertCard({ name, category, price }) {
  console.log(`${price}`.includes("."))

  return(
    <>
      <img src={`./src/images/${name}.png`} />
      <p>{category}</p>
      <p>{name}</p>
      <p>${`${price}`.includes(".") ? `${price}0` : `${price}.00`}</p>
    </>
  )
}

function CartCont() {
  return(
    <div className="cart-cont">
      <h2>Your Cart (0)</h2>
      <img src="./src/images/cake-cart.svg" />
      <p>Your added items will appear here.</p>
    </div>
  )
}

export default App
