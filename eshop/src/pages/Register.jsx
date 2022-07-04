import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
                rgba(255,255,255,0.5),
                rgba(255,255,255,0.5)), 
                url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphotos.demandstudios.com%2Fgetty%2Farticle%2F99%2F30%2F153584437.jpg&f=1&nofb=1") center;
    display: flex;
    align-items: center;
    justify-content: center;    
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="User name"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    Al crear esta cuenta, accedo a que mi informacion personal sea procesado de acuerdo a la <b>POLITICA DE PRIVACIDAD</b>
                </Agreement>
                <Button>Crear</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
