import React from 'react'
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data=[
        {
            id:1,
            img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cb9177c-52f7-476f-9185-653c4c2f1aa4/dri-fit-element-mens-running-crew-VZNnHP.png",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero mollitia odio, officiis eveniet sed, enim quaerat ipsa, porro non quas nulla soluta vel quibusdam quia! Optio cumque ipsum at enim corporis impedit aut facilis cum accusantium perspiciatis eaque explicabo, quas fugiat porro excepturi? Eum doloremque impedit sunt enim nulla odio.",
            oldPrice:19,
            price:12,
          },
          {
            id:2,
            img:"https://rukminim1.flixcart.com/image/612/612/xif0q/coat/w/l/z/5xl-luremcoat19119navy-lure-urban-original-imagkfbytevcwcgm.jpeg?q=70",
            title:"Coat for girl",
            isNew:true,
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero mollitia odio, officiis eveniet sed, enim quaerat ipsa, porro non quas nulla soluta vel quibusdam quia! Optio cumque ipsum at enim corporis impedit aut facilis cum accusantium perspiciatis eaque explicabo, quas fugiat porro excepturi? Eum doloremque impedit sunt enim nulla odio.",
            oldPrice:19,
            price:12,
          },
    ]
  return (
    <div className="cart">
        <h1>Product in your cart</h1>
        {
            data.map((item)=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,50)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon/>
                </div>
            ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart