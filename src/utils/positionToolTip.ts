// 이미지에 대한 위치에 따라 tooltip의 위치를 지정해주는 함수

interface IPositionProps {
  pointX: number;
  pointY: number;
  imageWidth: number;
  imageHeight: number;
}

export const positionToolTip = ({
  pointX,
  pointY,
  imageWidth,
  imageHeight,
}: IPositionProps): string => {
  console.log('x, y, width, height', pointX, pointY, imageWidth, imageHeight);
  let verticalStr = '';
  let horizontalStr = '';

  if (pointY * 1.6 <= imageWidth / 2) {
    horizontalStr = 'left';
  } else {
    horizontalStr = 'right';
  }

  if (pointX * 1.6 <= imageHeight / 2) {
    verticalStr = 'top';
  } else {
    verticalStr = 'bottom';
  }
  console.log(verticalStr, horizontalStr);

  return `${verticalStr}-${horizontalStr}`;
};
