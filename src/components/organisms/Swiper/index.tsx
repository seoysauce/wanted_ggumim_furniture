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
  productList: Array<IProductInfo>;
  clickedId: number | null;
  setClickedId: (value: any) => void; // 수정 필요
}

export function Swiper({ productList, clickedId, setClickedId }: ISwiperProps) {
  return (
    <S.Container>
      <S.BoxWrap>
        {productList.map((productInfo) => (
          <S.Box
            key={productInfo.productId}
            onClick={() =>
              setClickedId(
                clickedId === productInfo.productId
                  ? null
                  : productInfo.productId,
              )
            }
            isClicked={clickedId === productInfo.productId}
          >
            <S.Image
              image={productInfo.imageUrl}
              isClicked={clickedId === productInfo.productId}
            >
              {productInfo.discountRate ? (
                <S.DiscountBadge>{`${productInfo.discountRate}%`}</S.DiscountBadge>
              ) : null}
            </S.Image>
          </S.Box>
        ))}
      </S.BoxWrap>
    </S.Container>
  );
}
