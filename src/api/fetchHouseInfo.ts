import { API_ORIGIN, API_PATH } from 'constants/api';

export const fetchHouseInfo = async () => {
  const response = await fetch(`${API_ORIGIN}${API_PATH}`);
  console.log('response', response);

  const data = response.json();
  console.log('data', data);

  return data;
};
