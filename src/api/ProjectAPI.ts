import api from "../lib/axios";
import { IService } from "../types/types";


export async function getServices(): Promise<IService[]> {

    try {
        const response = await api.get('/services')
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return []
       
    }
   
}