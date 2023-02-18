import React from 'react'
import './list.scss'
import Card from '../Card/Card'

const List = () => {
    const data=[
        {
          id:1,
          img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cb9177c-52f7-476f-9185-653c4c2f1aa4/dri-fit-element-mens-running-crew-VZNnHP.png",
          img2:"https://pyxis.nymag.com/v1/imgs/776/15f/ee487a0b1882c0f53dbe6bb37f7db03484-vinceessential.rdeep-vertical.w245.jpg",
          title:"Long Sleeve Graphic T-shirt",
          isNew:true,
          oldPrice:19,
          price:12,
        },
        {
          id:2,
          img:"https://rukminim1.flixcart.com/image/612/612/xif0q/coat/w/l/z/5xl-luremcoat19119navy-lure-urban-original-imagkfbytevcwcgm.jpeg?q=70",
          img2:"https://rukminim1.flixcart.com/image/612/612/xif0q/coat/s/f/p/xxl-wfcb002-roarers-original-imagg6j5dkyegu7p.jpeg?q=70",
          title:"Coat for girl",
          isNew:true,
          oldPrice:19,
          price:12,
        },
        {
          id:3,
          img:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18825980/2022/6/22/ca2f4bec-66eb-4b7e-9258-14d6823a716f1655896929553ChemistryWomenBlueSolidDenimFlaredMidiSkirts1.jpg",
          img2:"https://img3.junaroad.com/uiproducts/18469269/pri_175_p-1660659432.jpg",
          title:"Skirt for Girl",
          oldPrice:19,
          price:12,
        },
        {
          id:4,
          img:"https://images.unsplash.com/photo-1616871154417-71fed7335b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHdpdGglMjBoYXR8ZW58MHx8MHx8&w=1000&q=80",
          img2:"https://static-01.daraz.com.bd/p/e4c688dba1df2abe8a0158390c2df294.jpg",
          title:"Hat",
          oldPrice:19,
          price:12,
        },
        {
            id:5,
            img2:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cb9177c-52f7-476f-9185-653c4c2f1aa4/dri-fit-element-mens-running-crew-VZNnHP.png",
            img:"https://pyxis.nymag.com/v1/imgs/776/15f/ee487a0b1882c0f53dbe6bb37f7db03484-vinceessential.rdeep-vertical.w245.jpg",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
          },
          {
            id:6,
            img2:"https://rukminim1.flixcart.com/image/612/612/xif0q/coat/w/l/z/5xl-luremcoat19119navy-lure-urban-original-imagkfbytevcwcgm.jpeg?q=70",
            img:"https://rukminim1.flixcart.com/image/612/612/xif0q/coat/s/f/p/xxl-wfcb002-roarers-original-imagg6j5dkyegu7p.jpeg?q=70",
            title:"Coat for girl",
            isNew:true,
            oldPrice:19,
            price:12,
          },
          {
            id:7,
            img2:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18825980/2022/6/22/ca2f4bec-66eb-4b7e-9258-14d6823a716f1655896929553ChemistryWomenBlueSolidDenimFlaredMidiSkirts1.jpg",
            img:"https://img3.junaroad.com/uiproducts/18469269/pri_175_p-1660659432.jpg",
            title:"Skirt for Girl",
            oldPrice:19,
            price:12,
          },
          {
            id:8,
            img2:"https://images.unsplash.com/photo-1616871154417-71fed7335b32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHdpdGglMjBoYXR8ZW58MHx8MHx8&w=1000&q=80",
            img:"https://static-01.daraz.com.bd/p/e4c688dba1df2abe8a0158390c2df294.jpg",
            title:"Hat",
            oldPrice:19,
            price:12,
          },
      ]
    
  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List