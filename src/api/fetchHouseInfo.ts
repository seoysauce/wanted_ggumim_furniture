import { API_ORIGIN, API_PATH } from 'constants/api';

export const fetchHouseInfo = async () => {
  const response = await fetch(`${API_ORIGIN}${API_PATH}`);
  const data = response.json();

  return data;
};
