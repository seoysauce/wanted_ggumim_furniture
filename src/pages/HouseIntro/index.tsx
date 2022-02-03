import { HouseView, Swiper } from 'components';
import React from 'react';
import { furniture } from 'data/furniture';
import * as S from './style';

export function HouseIntro() {
  return (
    <S.Container>
      <HouseView
        id={furniture.id}
        imageUrl={furniture.imageUrl}
        productList={furniture.productList}
      />
      <Swiper id={furniture.id} productList={furniture.productList} />
    </S.Container>
  );
}
