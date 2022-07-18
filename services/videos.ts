import request from "../utils/request";
// export interface Idetail {
//     part:string;
//     id:string;

// }
export const getSuggestedVideos = async (id:string) =>
request({
    method: 'GET',
    url: `/search?relatedToVideoId=${id}&part=id,snippet,statistics&type=video`
});
export const getPlaylistVideos = async () =>
request({
    method: 'GET',
    url: '/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=50'
});

export const getVideoDetail = async (id:string) => {
    return request({
        method: 'GET',
        url: `/videos?part=contentDetails,snippet,statistics&id=${id}`
    });
}

export const getVideoComments = async (id:string) => {
    return request({
        method: 'GET',
        url: `/commentThreads?part=snippet&videoId=${id}&maxResult=100`
    });
}

export const getSearchVideos = async (q:string) => {
    return request({
        method: 'GET',
        url: `/search?q=${q}&part=snippet,id&maxResults=50`
    });
}


