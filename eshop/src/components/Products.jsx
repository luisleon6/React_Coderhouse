import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mainProducts } from '../data'
import Product from './Product'

const Container =styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
        const[item, setItem] = useState([])
        useEffect(()=>{
            consumeDataProducto()
        },[])

        const consumeDataProducto = async() =>{
            const data = await fetch("../data.js")
            const dataJson = await data.json()
            setItem(dataJson)
        }
  return (
    <Container>
        {mainProducts.map(item=>(
            <Product item={item} key={item.id} producto={item}/>
        ))}
    </Container>
  )
}

export default Products
