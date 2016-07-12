import { get , del, post } from "../request-promise";
import { Publisher } from "wowza";

export async function list() : Promise<any>{
    let {response, body} = await get('/publishers');
    if (body.publishers) {
        return body.publishers;
    }
    let list : Publisher[] = JSON.parse(body);
    return list;
}

export async function create(publisher: Publisher) : Promise<any> {
    try {
        let {response, body} = await post('/publishers', {
            body : publisher,
            json : true,
        });
        return body;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function remove(publisherName : string) : Promise<any> {
    let { response, body } = await del(`/publishers/${publisherName}`);
    return body;
}

