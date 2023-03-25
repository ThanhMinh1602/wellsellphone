import {API_URL} from '../core/utils/constant'

function ApiHelper(url, data = {}, method = 'POST') {
    let bearer = 'Bearer ' + localStorage.getItem('user_token');
    return fetch(API_URL.dev + url, {  // Return promise
        method: method,
        withCredentials: true,
        // credentials: 'include',
        headers: {
            'Authorization': bearer,
            'X-FP-API-KEY': 'chaptoken',
            'Content-Type': 'application/json'
        }
    }, data)
        .then(res => res.json())
        .then((result) => {
            return result;
        }, (error) => {
            error = error;
        })
}

function FINDALL(url) {
    return ApiHelper(url, {}, 'GET');
}
// url có dạng: http://localhost:8083/products ví dụ vậy
function CREATE(url, body) {
    return ApiHelper(url, body, 'POST');
}
// url có dạng: http://localhost:8083/products/id 
function UPDATE(url, body) {
    return ApiHelper(url, body, 'PUT');
}

function DELETE(url) {
    return ApiHelper(url, {}, 'DELETE');
}

export const api = {
    FINDALL,
    CREATE,
    UPDATE, 
    DELETE,
}