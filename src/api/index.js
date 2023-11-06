import axios from 'axios';
import getResponse from './util/util.js';

export const getListsData = async () => {
    let response = await getResponse(axios.get('https://6543ad6901b5e279de20c994.mockapi.io/todo/todos/'))
    return response
};


export const getListItem = async (id) => {
    let response = await getResponse(axios.get('https://6543ad6901b5e279de20c994.mockapi.io/todo/todos/' + id))
    return response

};
export const deleteItemApi = async (id) => {
    let response = await getResponse(axios.delete('https://6543ad6901b5e279de20c994.mockapi.io/todo/todos/' + id))
    return response

};

export const updateItemApi = async (id, data) => {
    let response = await getResponse( axios.put('https://6543ad6901b5e279de20c994.mockapi.io/todo/todos/' + id, data))
    return response

};

export const postListItem = async (data) => {
    let response = await getResponse(
        axios.post('https://6543ad6901b5e279de20c994.mockapi.io/todo/todos/', data)
    )
    return response
};

