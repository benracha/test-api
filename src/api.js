import axios from "axios";

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        //ส่วนของการให้สิทธิ์
        headers: {
            Authorization: 'Client-ID 1NHTrvzyfp9uQoreS2Hk7louq2yta0jEhRgiPrQs96c',
        },
        //String ในการค้นหารูปภาพ
        params: {
            query: term,
        },
    });

    //การเข้าถึงข้อมูลในสิ่งที่เราต้องการภายใน api
    return response.data.results;
};

export default searchImage;