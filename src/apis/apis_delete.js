import axios from 'axios';
import thumbnail_preview from 'asset/assign/thumbnail_preview.png';

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers.withCredentials = true;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 401 Unauthorized 응답을 받으면 로그인 페이지로 리디렉트
      window.location.href = '/assign_login';
    }
    return Promise.reject(error);
  }
);
export const deleteDetail = (category, id) => {
  if (
    category == 'lostItem' ||
    category == 'missingPerson' ||
    category == 'urgent'
  )
    return axios.delete(`/admin/${category}/${id}`);
  else return axios.delete(`/${category}/${id}`);
};
// DELETE DELETE DELETE(끝)

export const deleteInquiry = (id) => {
  return axios.delete('/admin/inquiry', { params: { inquiryId: id } });
};
