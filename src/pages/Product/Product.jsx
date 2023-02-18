import React, { useState } from 'react'
import './product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg,setSelectedImg]=useState(0)
  const [quantity,setQuantity]=useState(1)

  const images=[
    "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
          <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam, ut molestiae fugiat facilis deserunt similique voluptatem veniam tempora reiciendis quia quam placeat quidem incidunt voluptatibus rem dolore praesentium consectetur blanditiis cum! Culpa assumenda a eligendi nostrum tempora beatae voluptate quo, repudiandae architecto qui laudantium, nam, temporibus animi facilis cumque?</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev===1 ? 1 : prev-1)}>-</button>
           {quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
         <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product