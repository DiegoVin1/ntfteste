import React from 'react';
import styled from 'styled-components';
import myOur from '../Imgs/Footer/Ourpartners.svg';
import myBinance from '../Imgs/Footer/binance.svg';
import myBit from '../Imgs/Footer/bitmex.svg';
import myBlock from '../Imgs/Footer/blockport.svg';
import myCoin from '../Imgs/Footer/coinbase.svg';

const FooterContanier = styled.footer`
  position: relative;
  width: 100%;
  z-index: 100;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
  height: 120px;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 100 auto;
`;

const Our = styled.div`
  background-image: url(${myOur});
  width: 321px;
  height: 23px;
`;

const EndFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const Binance = styled.div`
  background-image: url(${myBinance});
  width: 184px;
  height: 38px;
  margin: 20px 30px 0 30px;
`;

const Bit = styled.div`
  background-image: url(${myBit});
  width: 178px;
  height: 30px;
  margin: 20px 30px 0 30px;
`;

const Block = styled.div`
  background-image: url(${myBlock});
  width: 186px;
  height: 38px;
  margin: 16px 30px 0 30px;
`;
const Coin = styled.div`
  background-image: url(${myCoin});
  width: 170px;
  height: 38px;
  margin: 12px 30px 0 30px;
`;

export default function Footer() {
  return (
    <React.Fragment>
      <FooterContanier>
        <FooterItem>
          <Our />
          <EndFooter>
            <Binance />
            <Bit />
            <Block />
            <Coin />
          </EndFooter>
        </FooterItem>
      </FooterContanier>
    </React.Fragment>
  );
}
