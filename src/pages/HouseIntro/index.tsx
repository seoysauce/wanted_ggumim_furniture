import { HouseView, Swiper } from 'components';
import React, { useState } from 'react';
import { furniture } from 'data/furniture';
import * as S from './style';

export function HouseIntro() {
  const [clickedId, setClickedId] = useState(null);

  return (
    <S.Container>
      <HouseView
        imageUrl={furniture.imageUrl}
        productList={furniture.productList}
        clickedId={clickedId}
        setClickedId={setClickedId}
      />
      <Swiper
        productList={furniture.productList}
        clickedId={clickedId}
        setClickedId={setClickedId}
      />
    </S.Container>
  );
}
