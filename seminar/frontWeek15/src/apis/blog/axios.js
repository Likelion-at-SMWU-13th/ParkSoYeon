import axios from "axios";

export const writePost = async (payload) => {
  const { response } = await axios.post("/api/posts", payload);
  return response;
};

export const getPost = async (postId) => {
  const { response } = await axios.get(`/api/posts/${postId}`);
  return response;
};

export const updatePost = async (postId, payload) => {
  const { data } = await axios.put(`/api/posts/${postId}`, payload);
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await axios.delete(`/api/posts/${postId}`);
  return data;
};
