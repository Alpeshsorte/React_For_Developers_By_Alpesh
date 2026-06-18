import React, { useState } from 'react'
import Cart from './Cart'
import Button from './Button'
export default function Data() {
    let [data, setdata]=useState([
        {
            'name':'Rahul Sharma',
            'marks':68,
            'grade':'C'
        },
         {
            'name':'Sanket Sorte',
            'marks':83,
            'grade':'B'
        },
         {
            'name':'jeet shukla',
            'marks':56,
            'grade':'D'
        },
         {
            'name':'vedant kumar',
            'marks':95,
            'grade':'A'
        },
    ])
  return (
        <div>
        {
            data.map(function(el, i, arr) {
            return (
                <>
                <Cart name={el.name} marks={el.marks} grade={el.grade} />
                <Button name={el.name} marks={el.marks} grade={el.grade} />
                {/* <Button marks={el.marks} grade={el.grade} /> */}
                </>
            );
            })
        }
        </div>
  )
}
