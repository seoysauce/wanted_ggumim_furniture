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
  id: number;
  imageUrl: string;
  productList: Array<IProductInfo>;
}

export function HouseView({ id, imageUrl, productList }: HouseViewProps) {
  const [clickedId, setClickedId] = useState(null); // 열기 전에 모두 닫는 flag

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
