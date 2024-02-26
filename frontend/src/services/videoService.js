import youtubeApi from "../api/youtubeApi";

export const popularVideosAPI = () => {
  return youtubeApi.get(`videos`, {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 2, // Số lượng video bạn muốn hiển thị
    },
  });
};

export const searchVideosAPI = (keyword) => {
  return youtubeApi.get(`search`, {
    params: {
      part: "snippet",
      type: "video",
      q: keyword,
      maxResults: 2,
    },
  });
};

export const getVideoByIdAPI = (videoId) => {
  return youtubeApi.get(`videos`, {
    params: {
      part: "snippet,statistics",
      id: videoId,
    },
  });
};

export const getVideoRelatedByIdAPI = (videoTitle) => {
  return youtubeApi.get(`search`, {
    params: {
      part: "snippet",
      type: "video",
      q: videoTitle,
      maxResults: 2,
    },
  });
};
