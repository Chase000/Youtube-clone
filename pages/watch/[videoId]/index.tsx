import { useRouter } from 'next/router';
import VideoInfo from '../../../components/VideoInfo';
import { isEmpty } from 'lodash';
import { Ivideo } from '../../../interface/video';
import {  IComments } from '../../../interface/comments';
import { getVideoDetail, getVideoComments, getSuggestedVideos } from '../../../services/videos';
import Comments from '../../../components/Comments';
import PlayVideo from '../../../components/PlayVideo';
import PageHead from '../../layouts/PageHead'
import Header from '../../layouts/Header'
import SuggestVideos from '../../../components/SuggestVideos'
interface VideoDetailProps {
  VideoDetail: Ivideo,
  VideoComments: IComments,
  Suggest: Ivideo,

}
const VideoDetailPage: React.FC<VideoDetailProps> = ({VideoDetail, VideoComments, Suggest}) => {
     const router = useRouter();
     const {videoId} = router.query;
     const { snippet } = VideoDetail;
   
  return (
    <>
      <PageHead />
      <Header />
      <div className='flex pt-24'>
        <div className='w-11/12 flex flex-col items-end'>
             {
              !isEmpty(videoId) && !isEmpty(snippet) &&
              <PlayVideo videoId={videoId as string} snippet={snippet} />
            }
            {
              !isEmpty(VideoDetail) &&
              <VideoInfo VideoDetail={VideoDetail}  />
            }
            {
              !isEmpty(VideoComments)&& 
              <Comments VideoComments={VideoComments}/>

            }
          </div>
          <div className=''>
            <SuggestVideos Suggest={Suggest}/>
          </div>
      </div>
       
    </>
  )
}

export const getServerSideProps = async (context: { query: { videoId: any; }; }) => {
  const { videoId } = context.query;
  const paramsArr = [
    getVideoDetail(videoId as string),
    getVideoComments(videoId as string),
    getSuggestedVideos(videoId as string),

  ];

  const result = await Promise.all(paramsArr);
  const [VideoDetail, VideoComments, Suggest] = result;
  


  return {
    props: {
      VideoDetail: VideoDetail.items[0],
      VideoComments: VideoComments.items,
      Suggest: Suggest.items,
    },
  }
}
export default VideoDetailPage;