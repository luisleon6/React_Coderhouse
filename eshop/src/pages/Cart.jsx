import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type ==="filled" && "none"};
    background-color: ${props=>props.type ==="filled" ? "black" : "transparent"};
    color: ${props=>props.type ==="filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px ;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh; 
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width:200px;
    height: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductId = styled.div``;
const ProductWeight = styled.div``;
const ProductCert = styled.div``;
const PriceDetail = styled.div`
    flex:1;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: gray;
    border: none;
    height: 1px;
`;




const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>Tu carrito</Title>
        <Top>
            <TopButton>Continuar Comprando</TopButton>
            <TopTexts>
                <TopText>Carrito de compras(2)</TopText>
                <TopText>Tu lista de deseos</TopText>
            </TopTexts>
            <TopButton type="filled">Pagar Ahora</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomalcagourmet.files.wordpress.com%2F2019%2F11%2Fwagyu.jpg%3Fw%3D480%26h%3D270&f=1&nofb=1"/>
                        <Details>
                            <ProductName><b>Product:</b> Picanha</ProductName>
                            <ProductId><b>ID:</b> 96879656</ProductId>
                            <ProductWeight><b>Peso:</b> 1.2 KG</ProductWeight>
                            <ProductCert><b>Certificacion:</b> Wagyu A5</ProductCert>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Remove/>
                            <ProductAmount>1.2</ProductAmount>
                            <Add/>
                        </ProductAmountContainer>
                        <ProductPrice>$16,899.00 MXN</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbigoven-res.cloudinary.com%2Fimage%2Fupload%2Ft_recipe-1280%2Fbeef-tenderloin-with-horseradi-18ab80.jpg&f=1&nofb=1"/>
                        <Details>
                            <ProductName><b>Product:</b> Tender Loin</ProductName>
                            <ProductId><b>ID:</b> 87449567</ProductId>
                            <ProductWeight><b>Peso:</b> 2.00 KG</ProductWeight>
                            <ProductCert><b>Certificacion:</b> Black Angus</ProductCert>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Remove/>
                            <ProductAmount>2</ProductAmount>
                            <Add/>
                        </ProductAmountContainer>
                        <ProductPrice>$300.00 MXN</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>Resumen de Compra</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Envio Estimado</SummaryItemText>
                    <SummaryItemPrice>$299</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Descuento de Envio</SummaryItemText>
                    <SummaryItemPrice>$ -299</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$17,199.00 MXN</SummaryItemPrice>
                </SummaryItem>
                <Button>Realizar pago ahora</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
