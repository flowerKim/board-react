import axios from "axios";

export const mutipartHeadeer = () => {
  return { headers: { "Content-Type": "multipart/form-data" } };
};
const HOST = "http://3.34.140.96:4000/";
// const HOST = "http://localhost:4000/";

// back end 와 연결할 axios 함수들
export const PostApi = async (url, data) => {
  const response = await axios
    .post(`${HOST}${url}`, data)
    .catch((error) => null);
  if (!response) return null;
  const result = response.data;
  return result;
};
