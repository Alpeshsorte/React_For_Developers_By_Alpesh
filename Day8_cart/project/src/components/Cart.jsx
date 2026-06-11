import React from 'react'
import Item from './Item'
export default function Cart() {
    let colth=[
        {
            name:"sheakers",
            price:3000,
            image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/SNEAKERS-_6tz22iD.jpg?w=376&dpr=2 ",
        },
          {
            name:"T-shirt",
            price:500,
            image:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1780987559_5547885.jpg?w=480&dpr=2",
        },
          {
            name:"Pants",
            price:900,
            image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/pants_YLgeyeP.jpg?w=376&dpr=2 ",
        },
          {
            name:"Cap",
            price:300,
            image:"https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/accessories1.jpg?w=376&dpr=2 ",
        }
    ]

 return (
    <div>
        
        {
          colth.map(function(el,i,arr){
                 return <Item data={el} index={i} />
          })
        }
         
    </div>
  )
}

