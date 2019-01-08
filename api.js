const version = 'v1';
const baseUrl = 'https://event-storage-api-ms.juejin.im/';
const hotBaseUrl = 'https://short-msg-ms.juejin.im/';
const smallBookBaseUrl = 'https://xiaoce-timeline-api-ms.juejin.im/';
const bookDetailBaseUrl = 'https://xiaoce-cache-api-ms.juejin.im/';

module.exports = {
  // activeity
  getActiveitySwiper: `${baseUrl}${version}/getEventList`,
  getCityList: `${baseUrl}${version}/getCityList`,
  getEventList: `${baseUrl}${version}/getEventList`,
  // index
  getRecommended: `${baseUrl}${version}/get_recommended_entry?suid=NUNqmRvef7BI3QNZAeyA&ab=welcome_3&src=web`,
  // hot
  getHotRecommend: `${hotBaseUrl}${version}/pinList/recommend`,
  // xiaoce
  getSmallBook: `${smallBookBaseUrl}${version}/getListByLastTime`,
  getListSection: `${bookDetailBaseUrl}${version}/getListSection`,
  getBookInfo: `${bookDetailBaseUrl}${version}/get`,
  getListBuy: `${bookDetailBaseUrl}${version}/getListBuy`,
  getHotList: `https://xiaoce-comment-api-ms.juejin.im/${version}/getHotList`,

};


// xiaoce
// url: 'https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime',
// data: {
//   src: 'web',
//   uid: auth.uid || '',
//   device_id: auth.clientId,
//   token: auth.token,
//   pageNum: this.data.pageNum,
// },
