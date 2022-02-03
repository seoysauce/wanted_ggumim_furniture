import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 800px;
  overflow-x: scroll;
  cursor: pointer;
`;

export const BoxWrap = styled.div`
  display: flex;
`;

export const Box = styled.div<{ isClicked: boolean }>`
  margin: 28px 6px;
  border-radius: 16px;
  user-select: none;
  cursor: pointer;
  ${(props) =>
    props.isClicked &&
    `background: linear-gradient(163.54deg,#ff659e 8.22%,#f56b30 94.1%);
     margin: 26px 4px;
     padding: 2px;
     border-radius: 18px;`}
`;

export const Image = styled.div<{ image: string; isClicked: boolean }>`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  user-select: none;
  border: 0.5px solid #aaafb9;
  ${(props) => props.isClicked && `border: 0.5px solid white;`}
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
`;
