import axios from "axios";

const fetchImages = async (query, page) => {
  const apiKey = "_L4RsgQefhJUXVchOFXeVg7KvqNwVHRbh6wT5CFXwls";

  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      client_id: apiKey,
      query: query,
      page: page,
      per_page: 12,
    },
  });

  return response;
};
export default fetchImages;
