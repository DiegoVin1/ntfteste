import React from 'react';
import styled from 'styled-components';
import myImg from '../Imgs/Login.svg';
import myStar from '../Imgs/Stars.svg';

const HeaderContanier = styled.div`
  position: relative;
  width: 100%;
  z-index: 100;
  background-color: #111;
  color: #fff;
  font-weight: bold;
`;

const Nav = styled.div`
  display: flex;
  margin: 100 auto;
  justify-content: center;
  align-items: center;
`;

const Intro = styled.h1`
  font-size: 30.9735px;
  line-height: 39px;
  font-size: 30.9735px;
  line-height: 39px;
  margin-right: 230px;
  position: relative;
  top: -5px;
`;

const Link = styled.a`
  text-align: center;
  padding-left: 33px;
  padding-right: 33px;
  font-size: 15px;
  line-height: 19px;
  line-height: 39px;
  font-weight: bold;
`;

const Detalhamento = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  position: relative;
`;

const Efeito = styled.p`
  background-image: url(${myStar});
  width: 24px;
  height: 20px;
  position: absolute;
  left: -28px;
  top: 8px;
`;

const Login = styled.p`
  background-image: url(${myImg});
  height: 36px;
  width: 36px;
  position: absolute;
  right: 90px;
  top: -27px;
`;

const Account = styled.span`
  font-style: normal;
  line-height: 19px;
  font-weight: bold;
  margin-left: 255px;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <HeaderContanier>
      <Nav>
        <Detalhamento>
          <Efeito />
          <Intro>Titanium</Intro>
        </Detalhamento>
        <Link>Comunnity</Link>
        <Link>Market</Link>
        <Link>Trending</Link>
        <Detalhamento>
          <Login />
          <Account>My Account</Account>
        </Detalhamento>
      </Nav>
    </HeaderContanier>
  );
}
