import axios from "axios";
import { changeLanguage } from "i18next";


const apiUrl = 'https://dendropark-poltava-back.onrender.com/api/locations';


export const fetchData = async () => {
    try {

        const response = await axios.get(apiUrl, {
            params: {
                limit: 11
            }
        });
        const data = response.data;

        return data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};



