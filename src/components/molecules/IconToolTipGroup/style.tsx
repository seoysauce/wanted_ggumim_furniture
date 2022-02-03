import styled from 'styled-components';

export const CircleDiv = styled.div<{ pointX: number; pointY: number }>`
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  left: ${(props) => `${props.pointY * 1.6}px`};
  top: ${(props) => `${props.pointX * 1.6}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;
