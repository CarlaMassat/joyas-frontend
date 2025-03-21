import api from "../lib/axios";
import { IBanner, ICategory, IService } from "../types/types";

export async function getServices(): Promise<IService[]> {
  try {
    const response = await api.get("/services");
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getBanners(): Promise<IBanner[]> {
  try {
    const response = await api.get("/banners");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCategories(): Promise<ICategory[]> {

  try {
    const response = await api.get("/categories");
    // console.log(response.data)
    return response.data;

  } catch (error) {
    console.log(error);
    return [];
  }
}
