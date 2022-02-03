import styled from 'styled-components';
import { shadows } from 'styles/theme';

const positionTail = (position: string): string => {
  switch (position) {
    case 'top-left':
      return `
        top: -8px;
        left: 34px;
        width: 12px;
        height: 8px;`;
    case 'top-right':
      return `
        top: -8px;
        right: 34px;
        width: 12px;
        height: 8px;`;
    case 'bottom-left':
      return `
        bottom: -8px;
        left: 34px;
        width: 12px;
        height: 8px;
        transform: rotate(180deg);`;
    case 'bottom-right':
      return `
        bottom: -8px;
        right: 34px;
        width: 12px;
        height: 8px;
        transform: rotate(180deg);`;
    default:
      return '';
  }
};

const positionContainer = (position: string): string => {
  switch (position) {
    case 'top-left':
      return `top: 28px; left: -20px;`;
    case 'top-right':
      return `top: 28px; left: -160px;`;
    case 'bottom-left':
      return `bottom: 52px; left: -20px;`;
    case 'bottom-right':
      return `bottom: 52px; left: -160px;`;
    default:
      return '';
  }
};

export const Container = styled.div<{ position: string }>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  height: 86px;
  padding: 8px;
  color: #4a4a4a;
  border-radius: 7px;
  box-shadow: ${shadows.normal};
  position: absolute;
  ${({ position }) => positionContainer(position)}
  z-index: 10;
  background-color: white;
  margin-top: 16px;

  &::before {
    content: '';
    position: absolute;
    ${({ position }) => positionTail(position)}
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 10;
  }
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
