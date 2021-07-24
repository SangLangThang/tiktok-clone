import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, {
            params,
            /*  headers: {
                 'testing': 'test1' //add header
             }, */
            /*  baseURL:'https://testing.com'  //use new url,if not use default */
        });
    },

    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
}

export default productApi;