import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline'
import { Ivideo} from "../../interface/video"
import dayjs from 'dayjs'
interface DetailsInfoProps {
    VideoDetail: Ivideo
}
const VideoInfo: React.FC<DetailsInfoProps> = ({VideoDetail}) => {
    const {snippet, statistics } = VideoDetail;

  return (
    <div className='pr-8 w-11/12'>
        <h5 className='text-xl line-clamp-2 py-4'>{snippet.title}</h5>
        <div className='flex justify-between border-b-2 py-3 text-sm'>
            <div className='flex justify-start text-gray-400'>
                <span>
                    {statistics?.viewCount}{' '}Views •{' '}
                    {dayjs(snippet.publishedAt).format('DD/MM/YYYY')}
                </span>
            </div>
            <div className='flex items-center justify-end'>
                <ThumbUpIcon className='h-6 w-6'/>
                <span>{statistics?.likeCount}</span>
                <ThumbDownIcon className='h-6 w-6'/>DISLIKE
            </div>
        </div>
        <div className='border-b-2 py-5'>
            <div className='text-xl pb-3'>
                {snippet.channelTitle}
            </div>
            <div className='line-clamp-2'>
                {snippet.description}
            </div>
        </div>
    </div>
  )
}
export default VideoInfo;