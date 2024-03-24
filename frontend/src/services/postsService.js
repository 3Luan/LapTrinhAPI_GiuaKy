import backendApi from "../api/backendApi";

export const getPostsAPI = () => {
  return backendApi.get(`/api/posts/getPosts`);
};

export const createPostAPI = (formData) => {
  return backendApi.post(`/api/posts/createPosts`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getPostsByUserId = () => {
  return backendApi.get(`/api/posts/getPostsByUserId`);
};
