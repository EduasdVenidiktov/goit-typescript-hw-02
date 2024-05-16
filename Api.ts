import axios, { AxiosResponse } from "axios";
import { Photo } from "./src/components/App/App.types";

interface ApiResponse {
  total: number;
  total_pages: number;
  results: Photo[];
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

  return response;
};
export default fetchImages;
