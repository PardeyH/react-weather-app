import axios from 'axios';

export const client = axios.create({
    baseURL: "https://api.openweathermap.org/data/3.0/onecall"
})

export interface ResponseAPI {
    userId: number;
    id: number;
    title: string;
    body: string;
}