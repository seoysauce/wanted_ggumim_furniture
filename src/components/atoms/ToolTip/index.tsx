import ArrowRight from 'assets/icons/ArrowRight';
import React from 'react';
import * as S from './style';

export interface ToolTipProps {
  imageUrl: string;
  priceOriginal: number;
  discountRate: number;
  outside: boolean;
  productName: string;
  priceDiscount: number;
}

export function ToolTip({
  imageUrl,
  priceOriginal,
  discountRate,
  outside,
  productName,
  priceDiscount,
}: ToolTipProps) {
  return (
    <S.Container>
      <S.Image src={imageUrl} alt={productName} />
      <S.InfoBox>
        <S.Name>{productName}</S.Name>
        <S.PriceRow>
          <S.Price>
            {discountRate ? (
              <S.DiscountRate>{`${discountRate}%`}</S.DiscountRate>
            ) : (
              <S.PriceSpan>예상가</S.PriceSpan>
            )}

            {priceDiscount.toLocaleString()}
          </S.Price>
          <ArrowRight />
        </S.PriceRow>
      </S.InfoBox>
    </S.Container>
  );
}
