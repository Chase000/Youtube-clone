import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ItopLevelSnippet } from '../../interface/comments';

 interface CommentProps {
   comment: ItopLevelSnippet
 }
const Comment:React.FC<CommentProps> = ({comment}) => {
   dayjs.extend(relativeTime);
    
  return (
    <div className='flex items-start border-b py-5'>
         <img
            src={comment.authorProfileImageUrl}
            alt=''
            className='mr-3 rounded-full'
         />
         <div>
            <p className='text-xs py-1 text-gray-500'>
               {comment.authorDisplayName} • {dayjs(comment.publishedAt).fromNow()}
            </p>
            <p className='mb-0 line-clamp-4'>{comment.textDisplay}</p>
         </div>
      </div>
  )
}

export default Comment;