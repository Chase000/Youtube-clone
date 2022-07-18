import React from 'react'
import { IComments, ItopLevelSnippet } from '../../interface/comments'
import Comment from '../Comment'

interface CommentsProps {
    VideoComments: IComments 
  }
const Comments:React.FC<CommentsProps> = ({VideoComments}) => {
    const totalComments = VideoComments.length 
    const comments = VideoComments.map(
        (comment: { snippet: { topLevelComment: { snippet: object } } }) => comment.snippet.topLevelComment.snippet
     )
     
  return (
    <div className='pr-8 w-11/12'>
         <p  className='py-4'>{totalComments} Comments</p>
         <div className='my-2 comments__form d-flex w-100'>
            <form className='flex flex-grow-1 justify-between border-b-2'>
                <input 
                  type='text'
                  className='flex-grow-1 pb-1'
                  placeholder='Write a comment...'
               />
                {/* <button className='p-2 border-gray-400 bg-gray-400 text-white'>
                    Comment
                </button> */}
            </form>
         </div>
         <div>
            {comments?.map((comment: ItopLevelSnippet, i: React.Key | null | undefined) => (
               <Comment comment={comment} key={i} />
            ))}
         </div>
      </div>
  )
}

export default Comments