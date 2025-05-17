import axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from "axios";

export function httpCommon(baseUrl: string, formData: boolean = false, cancel?: {token: CancelTokenSource}): AxiosInstance{
    const source = axios.CancelToken.source();

    if(cancel){
    cancel.token = source;
    }
    const config: AxiosRequestConfig = {
        url: baseUrl,
        headers: {
            "Content-Type": formData ? "multipart/form-data": "application/json"
        },
        cancelToken: source.token
    }
    return axios.create(config);
}
