import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from  '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`
const Select = styled.select`
  padding: 10px;
  margin: 20px;
`
const Option = styled.option`
`

const ProductList = () => {
  return (
    <Container>
      <NavBar/>
      <Announcement/>
      <Title>Carne de Res</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select>
            <Option disabled selected>
              Evento
            </Option>
            <Option>Asado</Option>
            <Option>Reunion</Option>
            <Option>Casero</Option>
            <Option>Cortes Finos</Option>
            <Option>Taqueria</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Precio
            </Option>
            <Option>+$2000.00MXN</Option>
            <Option>$1000.00 - $2000.00 MXN</Option>
            <Option>$500.00 - $1000.00 MXN</Option>
            <Option>$300.00 - $500.00 MXN</Option>
            <Option>Menos de $300.00 MXN</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Ordenar Productos:</FilterText>
          <Select>
            <Option>Lo mas Nuevo</Option>
            <Option>Precio (asc)</Option>
            <Option>Precio (desc)</Option>
          </Select>       
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
