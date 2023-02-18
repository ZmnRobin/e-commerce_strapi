import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
   <div className="footerWrapper">
     <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cum vitae magnam sint mollitia unde dolorum eligendi nostrum voluptates nisi, asperiores quis distinctio excepturi sequi magni earum omnis at hic temporibus delectus natus. Ipsa cum perspiciatis ea vel facilis nulla reiciendis rerum commodi nobis obcaecati eligendi accusantium repellat numquam ?</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio, aspernatur neque doloribus praesentium dolorum vitae itaque, rerum sequi illo porro earum, dolor ea accusamus facere saepe? Optio quidem laboriosam voluptates quisquam sunt consequatur similique quis rerum expedita officiis fugiat explicabo, maxime assumenda voluptatibus quam nisi, officia doloremque.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>FLAG STORE</span>
          <span className='copyright'>
            Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Footer