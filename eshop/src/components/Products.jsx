import React from 'react'
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
  return (
    <Container>
        {mainProducts.map(item=>(
            <Product item={item} key={item.id} producto={item}/>
        ))}
    </Container>
  )
}

export default Products
