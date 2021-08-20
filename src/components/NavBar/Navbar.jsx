import React from "react";
import styled from 'styled-components/macro'
import Img from '../assets/LogoSVG.png'
import { Link } from 'react-router-dom'
import {HiShoppingCart} from 'react-icons/hi'

const NavbarContainer = styled.div`
    width: 100%;
    height:80px;
    z-index: 20;
    background: #fff;
    @media screen and (max-width:650px){
        width: 100%;
    }
`;
const NavbarWrap = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    position: relative;
    align-items: center;
    justify-content:space-between;
    @media screen and (max-width:650px){
        width: 100%;
    }
    `;


const Logo = styled.div`
    width: 120px;
    height: 40px;
    background: url(${Img}) 0 45% no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
`;
const Nav = styled.nav`
    flex: 1;
    position: relative;
    padding-left: 50px;
`;
const NavLink = styled(Link)`
    color: #000;
    padding: 0 15px;
    font-size: 16px;
    line-height:80px;
    font-weight:700;
    text-decoration: none;
`;
const Search = styled.div`
    right:235px;
    position: absolute;

`;
const SearchWrap = styled.div`
    width:220px;
    height:36px;
    position:relative;
    box-sizing: border-box;
    background: rgba(179,191,201,0.15);
    line-height: 33px;
    padding-left: 37px;
    border-radius: 19px;

`;
const Input = styled.input`
    color: #000;
    width 196px;
    border:transparent;
    font-size: 12px;
    background: transparent;
    outline: none;

`;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Button = styled.div`
    width: 110px;
    color: #fff;
    cursor: pointer;
    height: 36px;
    font-size: 16px;
    box-sizing: border-box;
    background: #007cff;
    text-align: center;
    line-height: 36px;
    border-radius: 21px;
`;


const Navbar = () => {
    
    return (
        <NavbarContainer >
            <NavbarWrap>
                <Logo/>
                    <Nav>
                       <NavLink to="/">Inicio</NavLink>
                       <NavLink to="/about">Nosotros</NavLink>
                       <NavLink to="/contact">Contacto</NavLink>
                       <NavLink to="/shop">Tienda</NavLink>
                       <NavLink to="/products">Productos</NavLink>
                       <NavLink to="/help">Ayuda</NavLink>
                    </Nav>
                    <Search>
                        <SearchWrap>
                            <Input type="text" placeholder="Symbol/Name"/>
                        </SearchWrap>
                    </Search>
                    <ButtonContainer>
                        <HiShoppingCart/>
                        <Button 
                        css={`
                        color: #037cff;
                        background:#fff;
                        `}> Registrate </Button>
                        <Button> Ingresa </Button>
                    </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar
