import React, { useState } from 'react';
import { IconToolTipGroup } from 'components';
import * as S from './style';

interface IProductInfo {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
}

interface HouseViewProps {
  imageUrl: string;
  productList: Array<IProductInfo>;
  clickedId: number | null;
  setClickedId: (value: any) => void; // 수정 필요
}

export function HouseView({
  imageUrl,
  productList,
  clickedId,
  setClickedId,
}: HouseViewProps) {
  return (
    <S.ImageContainer>
      <S.Image src={imageUrl} />
      {productList.map((productInfo) => (
        <IconToolTipGroup
          key={productInfo.productId}
          productInfo={productInfo}
          clickedId={clickedId}
          setClickedId={setClickedId}
        />
      ))}
    </S.ImageContainer>
  );
}
