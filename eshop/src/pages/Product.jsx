import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
 const Filter = styled.div`
    display: flex;
    align-items: center;
 `
 
 const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
 `
 const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
 `
 const FilterCert = styled.select`
    margin-left: 10px;
    padding: 4px;
 `
 
 const FilterCertOpt = styled.option``

 const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
 `
 
 const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
 `
 
 const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;align-items: center;
    justify-content: center;
    margin: 0px 5px;
 `
 const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: aliceblue;
    }
 `
 


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.copymethat.com%2Fmedia%2Forig_perfect_seriously_roast_beef_tenderloin_2019122302480502919783n5m.jpg&f=1&nofb=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Tender Loin</Title>
                <Desc>Lorem Ipsum dolor Sit Amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.</Desc>
                <Price>$150.00 MXN</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Certificacion</FilterTitle>
                        <FilterCert>
                            <FilterCertOpt>Nacional</FilterCertOpt>
                            <FilterCertOpt>Angus</FilterCertOpt>
                            <FilterCertOpt>Black Angus</FilterCertOpt>
                            <FilterCertOpt>Choice</FilterCertOpt>
                            <FilterCertOpt>Prime</FilterCertOpt>
                        </FilterCert>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Agregar al Carrito</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
export default Product
