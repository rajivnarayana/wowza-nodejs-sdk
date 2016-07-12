import * as request from "request"


const BASE_URL = process.env.WSE_BASE_URL || 'http://127.0.0.1:8087/v2/servers/_defaultServer_';
const OPTIONS = {
    headers: {
        'Accept': 'application/json'
    },
    auth: {
        user: process.env.WSE_USER_NAME || '',
        pass: process.env.WSE_USER_PASSWORD || '',
        sendImmediately: false
    },
    timeout : 10 * 1000
}

export function get(relativePath, options = {}) : Promise<{response: any, body: string}> {
    options = Object.assign(OPTIONS, options);
    return new Promise((resolve, reject) => {
        request.get(BASE_URL+relativePath, options, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            
            resolve({response, body});
        })
    })
}

export function post(relativePath, options?) : Promise<{response: any, body: string}>{
    options = Object.assign(OPTIONS, options);
    let url = relativePath.startsWith('/') ? BASE_URL+relativePath : relativePath; 
    return new Promise((resolve, reject) => {
        request.post(url, options, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            resolve({response, body});
        })
    });
}

export function del(relativePath, options = {}) : Promise<{response: any, body: string}> {
    options = Object.assign(OPTIONS, options);
    let url = relativePath.startsWith('/') ? BASE_URL+relativePath : relativePath; 
    return new Promise((resolve, reject) => {
        request.del(url, options, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            resolve({response, body});
        })
    });
}


export function put(relativePath: string, options?) : Promise<{response: any, body: string}>{
    let url = relativePath.startsWith('/') ? BASE_URL+relativePath : relativePath; 
    return new Promise((resolve, reject) => {
        request.put(url, options, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            resolve({response, body});            
        })
    })
}

