import ArrowRight from 'assets/icons/ArrowRight';
import React from 'react';
import { positionToolTip } from 'utils';
import * as S from './style';

export interface ToolTipProps {
  position: string;
  imageUrl: string;
  priceOriginal: number;
  discountRate: number;
  outside: boolean;
  productName: string;
  priceDiscount: number;
}

export function ToolTip({
  position,
  imageUrl,
  priceOriginal,
  discountRate,
  outside,
  productName,
  priceDiscount,
}: ToolTipProps) {
  return (
    <S.Container position={position}>
      <S.Image src={imageUrl} alt={productName} />
      <S.InfoBox>
        <S.Name>{productName}</S.Name>
        <S.PriceRow>
          <S.Price>
            {!outside && discountRate ? (
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
