// 이미지에 대한 위치에 따라 tooltip의 위치를 지정해주는 함수

interface IPositionProps {
  pointX: number;
  pointY: number;
  IMAGE_WIDTH: number;
  IMAGE_HEIGHT: number;
}

export const positionToolTip = ({
  pointX,
  pointY,
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
}: IPositionProps): string => {
  let verticalStr = '';
  let horizontalStr = '';

  if (pointY * 1.6 <= IMAGE_WIDTH / 2) {
    horizontalStr = 'left';
  } else {
    horizontalStr = 'right';
  }

  if (pointX * 1.6 <= IMAGE_HEIGHT / 2) {
    verticalStr = 'top';
  } else {
    verticalStr = 'bottom';
  }

  return `${verticalStr}-${horizontalStr}`;
};
