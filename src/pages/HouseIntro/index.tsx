import { HouseView, Swiper } from 'components';
import React, { useEffect, useState } from 'react';
// import { furniture } from 'data/furniture';
import { fetchHouseInfo } from 'api/fetchHouseInfo';
import * as S from './style';

export function HouseIntro() {
  const [clickedId, setClickedId] = useState(null);
  const [furniture, setFurniture] = useState({
    id: 0,
    imageUrl: '',
    productList: [],
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchHouseInfo();
      setFurniture(data);
    };
    getData();
  }, []);

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
