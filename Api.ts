import axios from "axios";

interface ApiResponse {
  client_id: string;
  query: string;
  page: number;
}

const fetchImages = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const apiKey = "_L4RsgQefhJUXVchOFXeVg7KvqNwVHRbh6wT5CFXwls";

  const response = await axios.get<ApiResponse>(
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
