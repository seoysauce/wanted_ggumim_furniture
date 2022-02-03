import React from 'react';
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

interface ISwiperProps {
  id: number;
  productList: Array<IProductInfo>;
}

export function Swiper({ id, productList }: ISwiperProps) {
  return (
    <S.Container>
      <S.BoxWrap>
        {productList.map((productInfo) => (
          <S.Box key={productInfo.productId}>
            <S.Image src={productInfo.imageUrl} />
          </S.Box>
        ))}
      </S.BoxWrap>
    </S.Container>
  );
}
