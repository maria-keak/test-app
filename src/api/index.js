import axios from 'axios';
import getResponse from './util/util.js';

const MAIN_API = 'https://6543ad6901b5e279de20c994.mockapi.io/todo/todos/' 

export const getListsData = async () => {
    let response = await getResponse(axios.get(MAIN_API))
    return response
};


export const getListItem = async (id) => {
    let response = await getResponse(axios.get(MAIN_API + id))
    return response

};
export const deleteItemApi = async (id) => {
    let response = await getResponse(axios.delete(MAIN_API + id))
    return response

};

export const updateItemApi = async (id, data) => {
    let response = await getResponse( axios.put(MAIN_API + id, data))
    return response

};

export const postListItem = async (data) => {
    let response = await getResponse(
        axios.post(MAIN_API, data)
    )
    return response
};

