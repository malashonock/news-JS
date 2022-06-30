import { ArticlesResponse } from "../model/ArticlesResponse";
import { SourcesResponse } from "../model/SourcesResponse";

export type QueryParams = {
    [k: string]: string,
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type Action = () => void;

export type ArticlesResponseHandler = (data: ArticlesResponse) => void;
export type SourcesResponseHandler = (data: SourcesResponse) => void;
export type ResponseHandler = ArticlesResponseHandler | SourcesResponseHandler;

class Loader {
    constructor(
        readonly baseLink: string,
        readonly options: QueryParams, 
    ) { }

    getResp(
        { endpoint, options = {} }: { endpoint: string, options?: QueryParams },
        callback: ResponseHandler = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: QueryParams, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: HttpMethod,
        endpoint: string,
        callback: ResponseHandler,
        options: QueryParams = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
