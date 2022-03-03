import React from 'react';
import styled from 'styled-components';
import myFoto from '../Imgs/Foto1.svg';
import mySmile from '../Imgs/Smile.svg';
import myStar from '../Imgs/Star1.svg';
import myStar2 from '../Imgs/Star2.svg';

const HomeContanier = styled.div`
  z-index: 100;
  background-color: #111;
  color: #fff;
  font-weight: bold;
  height: 100%;
  width: 100%;
  padding: 100px 0px;
  padding-top: 0px;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const Text = styled.h2`
  text-transform: uppercase;
  margin: 42px 30px 0 240px;
  font-size: 62.75px;
  line-height: 75px;
  color: #ffffff;
  position: relative;
  p {
    text-transform: none;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    margin: 85px 12px 75px 0;
  }
`;

const Smile = styled.p`
  background-image: url(${mySmile});
  position: absolute;
  display: block;
  width: 71px;
  height: 71px;
  left: 240px;
  top: 66px;
`;

const Explore = styled.a`
  font-size: 19.4328px;
  line-height: 25px;
  text-transform: none;
  color: #111;
  padding: 10px 50px;
  background: linear-gradient(
    91.95deg,
    rgba(177, 210, 111, 0.8) 1.14%,
    #60e7ce 100%
  );
  position: relative;
  &::before {
    content: '';
    background: #111;
    opacity: 1;
    width: 105.68px;
    height: 28px;
    right: 153px;
    top: 0px;
    position: absolute;
    transform: rotate(55deg);
  }
  &::after {
    content: '';
    background: #111;
    opacity: 1;
    width: 105.68px;
    height: 28px;
    left: 142px;
    top: 0px;
    position: absolute;
    transform: rotate(55deg);
  }
`;

const Learn = styled.a`
  font-size: 19.4328px;
  line-height: 25px;
  color: #ffffff;
  padding: 10px 30px;
  margin-left: 10px;
`;

const ContanierFoto = styled.div`
  max-width: 525px;
  max-height: 645px;

  position: relative;
  &::before {
    content: '';
    background: #fff;
    opacity: 0.5;
    padding: 3px;
    position: absolute;
    width: 43.87px;
    height: 93px;
    top: 615px;
    left: -15px;
    transform: rotate(-50deg);
  }
  ::after {
    content: '';
    background: #fff;
    opacity: 0.5;
    padding: 3px;
    position: absolute;
    width: 43.87px;
    height: 93px;
    right: -15px;
    top: 615px;
    transform: rotate(50deg);
  }
`;

const Star = styled.p`
  background-image: url(${myStar});
  max-width: 100%;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 25px;
  left: -72px;
`;

const Star2 = styled.p`
  background-image: url(${myStar2});
  max-width: 100%;
  width: 34px;
  height: 33px;
  position: absolute;
  top: 65px;
  left: -31px;
`;

const Foto = styled.p`
  background-image: url(${myFoto});
  display: block;
  max-width: 100%;
  width: 525px;
  height: 645px;
  border-radius: 30px 30px 0px 0px;
  margin-top: 30px;
`;

const SubCaixa = styled.div`
  position: absolute;
  width: 385px;
  height: 12px;
  right: 30px;
  top: 540px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    91.95deg,
    rgba(0, 0, 0, 0.8) 1.14%,
    rgba(0, 0, 0, 0.4) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 42px;
  border-radius: 5px;
`;

const Lista = styled.ul`
  color: #ffffff;
  padding: 10px;
  margin-top: 35px;

  span {
    font-size: 15px;
    line-height: 18px;
    margin-left: 3px;
    margin-right: 5px;
  }

  p {
    font-size: 15px;
    line-height: 19px;
    margin-left: 12px;
    margin-left: 8px;
    font-size: normal;
  }
`;

const Start = styled.a`
  font-size: 14.2133px;
  line-height: 18px;
  color: #111;
  background: linear-gradient(
    91.95deg,
    rgba(177, 210, 111, 0.8) 1.14%,
    #60e7ce 100%
  );
  align-self: center;
  padding: 10px 40px;
  margin-right: -25px;
  margin-top: 8px;
  border-radius: 5px;
  font-size: 15px;
  line-height: 18px;
  font-weight: bold;
`;

export default function Home() {
  return (
    <HomeContanier>
      <Nav>
        <Text>
          Nft’s that are outta this world
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem
            iam fit etiam in Academia. Sed ad rem redeamus; Age sane, inquam.
            Tecum optime, deinde etiam cum mediocri amico. Minime vero, inquit
            ille, consentit.
          </p>
          <Smile />
          <Explore> → Explore </Explore>
          <Learn>Learn More</Learn>
        </Text>
        <ContanierFoto>
          <Foto />
          <Star />
          <Star2 />
          <SubCaixa>
            <Lista>
              <span>Current bid</span>
              <p>0.99 ETH</p>
            </Lista>
            <Lista>
              <span>Ends in</span>
              <p>25 HRS</p>
            </Lista>
            <Start>Start Bid</Start>
          </SubCaixa>
        </ContanierFoto>
      </Nav>
    </HomeContanier>
  );
}
