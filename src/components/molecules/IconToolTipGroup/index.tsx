import React from 'react';
import { ToolTip } from 'components';
import { CIRCLE_MAGNIFIER, CIRCLE_X } from 'constants/imageUrl';
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

interface IIconToolTipGroupProps {
  productInfo: IProductInfo;
  clickedId: number | null;
  setClickedId: (value: any) => void; // 수정 필요!!
}

export function IconToolTipGroup({
  productInfo,
  clickedId,
  setClickedId,
}: IIconToolTipGroupProps) {
  const {
    productId,
    productName,
    outside,
    pointX,
    pointY,
    priceOriginal,
    priceDiscount,
    discountRate,
    imageUrl,
  } = productInfo;

  return (
    <S.CircleDiv pointX={pointX} pointY={pointY}>
      {clickedId === productId ? (
        <>
          <S.Icon
            alt="circle-x"
            src={CIRCLE_X}
            onClick={() => setClickedId(null)}
          />
          <ToolTip
            imageUrl={imageUrl}
            priceOriginal={priceOriginal}
            discountRate={discountRate}
            outside={outside}
            productName={productName}
            priceDiscount={priceDiscount}
          />
        </>
      ) : (
        <S.Icon
          alt="circle-magnifier"
          src={CIRCLE_MAGNIFIER}
          onClick={() => setClickedId(productId)}
        />
      )}
    </S.CircleDiv>
  );
}
