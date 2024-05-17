import axios, { AxiosResponse } from "axios";
import { Image } from "./components/ImageGallery/ImageGallery.types";

interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

const fetchImages = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const apiKey = "_L4RsgQefhJUXVchOFXeVg7KvqNwVHRbh6wT5CFXwls";

  const response: AxiosResponse<ApiResponse> = await axios.get(
    "https://api.unsplash.com/search/photos/",
    {
      params: {
        client_id: apiKey,
        query: query,
        page: page,
        per_page: 12,
      },
    }
  );

  return response.data;
};
export default fetchImages;
