import styled from 'styled-components';
import { shadows } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 86px;
  padding: 10px;
  border-radius: 7px;
  box-shadow: ${shadows.normal};
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 10;
  background-color: white;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 4px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /* background-color: beige; */
  margin-left: 10px;
`;

export const Name = styled.div`
  font-size: 14px;
  color: #333c45;
  line-height: 1.2em;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
`;

export const Price = styled.div`
  font-weight: bold;
`;
export const PriceSpan = styled.span`
  color: #898f94;
  font-size: 11px;
  margin-right: 4px;
`;

export const DiscountRate = styled.span`
  color: #ff585d;
  margin-right: 4px;
`;
