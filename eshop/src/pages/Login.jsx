import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
                rgba(255,255,255,0.5),
                rgba(255,255,255,0.5)), 
                url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.jimcdn.com%2Fapp%2Fcms%2Fimage%2Ftransf%2Fdimension%3D1920x10000%3Aformat%3Djpg%2Fpath%2Fs164b81e3f7344040%2Fimage%2Ficc4820c66d6e144a%2Fversion%2F1581770315%2Fimage.jpg&f=1&nofb=1") center;
    background-size: cover;
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
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>Ingresar</Title>
            <Form>
                <Input placeholder="Usuario"/>
                <Input placeholder="Contraseña"/>
                <Button>Log In</Button>
                <Link>Olvidaste tu contraseña?</Link>
                <Link>Crear cuenta nueva</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
