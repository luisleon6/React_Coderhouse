import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50% ;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LuCa</Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="25D366">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Sitios Recomendados</Title>
            <List>
                <ListItem>Inicio</ListItem>
                <ListItem>Mi cuenta</ListItem>
                <ListItem>Cortes Premium</ListItem>
                <ListItem>Carrito</ListItem>
                <ListItem>Res </ListItem>
                <ListItem>Revisar Pedido</ListItem>
                <ListItem>Aves</ListItem>
                <ListItem>Lista de Deseos</ListItem>
                <ListItem>Cerdo</ListItem>
                <ListItem>Terminos y Condiciones</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Mision San Martin 5B, Monterrey, Nuevo Leon CP: 98069.</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +52 3312909197</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/> servicios@luca.com</ContactItem>
            <Payment src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwildpremiumsalmon.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fhttp___pluspng.com_img-png_payment-method-png-payment-options-1003.png&f=1&nofb=1'/>

        </Right>
    </Container>
  )
}

export default Footer
