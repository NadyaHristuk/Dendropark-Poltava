import axios from "axios";

// const apiUrl = 'https://dendropark-poltava-back-ix1i.onrender.com/api/locations';
const apiUrl = "/api/locations";

export const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        limit: 11,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
};
