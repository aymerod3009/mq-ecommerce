import React from 'react'
import styled from 'styled-components'
import BgImg from '../assets/X-ADV750-1900x700-01.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md';

const Section = styled.section`
    background: url(${BgImg});
    height: 1000px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;
const Content = styled.div`
    width: 100%;
    height: 100px;
`;
const Left = styled.div`
    padding-left: 220px;
    padding-top: 143px;
`;
const Title = styled.p`
    font-size: 55px;
    color:  #04050a;
    font-weight: 400;
`;
const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea0ac;
    line-height: 30px;
    margin-top: 58px;
`;
const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 58px;
    width: 371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg,#0546d6,#3f89fc);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177/12%)

`;


const Header = () => {
    return (
        <div>
                <Section>
                    <Content>
                        <Left>
                            <Title>
                                Consulta Por tu Honda <br/> Obten un Pack Honda!
                                </Title>
                                <Desc>
                                 Ingresa Aqui y Obten un Descuento de $200 dolares
                                 en la Moticicleta Honda Navi<span>
                                 Aprovecha Hoy</span>{' '}
                                </Desc>
                                <Button href="https://wa.me/c/51999404431">
                                <span>Reclama Tu Bono Ahora</span>
                                <MdKeyboardArrowRight />
                                </Button>
                        </Left>
                    </Content>    
                </Section>   
        </div>
    )
}

export default Header
           