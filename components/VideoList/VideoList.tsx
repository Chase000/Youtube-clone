import dayjs from 'dayjs';
import { Isnippet, Ivideo } from '../../interface/video';
import { useRouter } from 'next/router';
import relativeTime from 'dayjs/plugin/relativeTime';

interface VideoListProps {
    video: Ivideo,
    isSearch: boolean
     
}



const VideoList:React.FC<VideoListProps> = ({video, isSearch}) => {
  dayjs.extend(relativeTime);
  const router = useRouter();

  const handleVideoClick = () => {
    router.push(`/watch/${video.id.videoId}`)
    

}

  return (
    <div  className='flex py-1.5 cursor-pointer' onClick={handleVideoClick}>
      {
        isSearch? <img src={video.snippet.thumbnails.high.url} /> :<img src={video.snippet.thumbnails.default.url} />
      }
        <div className='pl-3'>
            <p className='text-sm'>{video.snippet.title}</p>
            <p className='text-sm text-gray-400'>{video.snippet.channelTitle}</p>
            <p className='text-sm text-gray-400'>{dayjs(video.snippet.publishedAt).fromNow()}</p>
        </div>
    </div>
  )
}

export default VideoList