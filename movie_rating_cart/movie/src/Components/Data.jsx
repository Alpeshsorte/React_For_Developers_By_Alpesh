import React, { useState } from 'react'
import Cart from './Cart'
export default function Data() {
    let [movie, setmovie]=useState([
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4P0NxU7_Oyw6Y5j-Ojeq_zEhvxhqAasX4Q&s",
            name:"dhurandhar",
        },
          {
            image:"https://m.media-amazon.com/images/I/91NC2t4Hd2L._AC_UF1000,1000_QL80_.jpg",
            name:"interstellar",
        },
        
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5VF9AMGOxEECB8gOFzsYW3qIOLN5hksbcg&s",
            name:"toxic",
        },
        
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLCtNnlO1JgqYJhmW4xQfNFc-JKV_5LaC_Q&s",
            name:"avengers doomsday",
        }

    ])
  return (
    <div>
        {
            movie.map(function(el,arr,i){
                return <Cart image={el.image} name={el.name} />
            })
        }
    </div>

  )
}
