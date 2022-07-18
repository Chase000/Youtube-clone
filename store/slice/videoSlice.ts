import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSuggestedVideos,getVideoDetail } from '../../services/videos'
import store from '../store'
export const getVideos = createAsyncThunk("video/getVideos", async() => {
    const response = await getSuggestedVideos()
    return response;
  });
  export const getVideoDetailById = createAsyncThunk("video/getVideoDetailById", async(id:string) => {
    const response = await getVideoDetail(id)
    return response;
  });

export const videoSlice = createSlice({
    name:'video',
    initialState: {
        videos:[],
        videoDetail:{},
        loading:false,
        nextPageToken: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getVideos.fulfilled,  (state, {payload}) => {
          state.loading = false;
          state.videos = payload.items;
          state.nextPageToken = payload.nextPageToken;
        })
        .addCase(getVideoDetailById.fulfilled,  (state, {payload}) => {
          state.loading = false;
          state.videoDetail = payload.items[0];
        })
    },
})
export type AppState = ReturnType<typeof store.getState>;
export const selectVideosState = (state:AppState) => state.video.videos;
export const selectVideoDetailSate = (state:AppState) => state.video.videoDetail;

export default videoSlice.reducer