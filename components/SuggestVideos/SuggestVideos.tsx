import { isEmpty } from 'lodash';
import { Ivideos } from '../../interface/video'
import dayjs from 'dayjs';
import VideoList from '../VideoList';

interface SuggestProps {
  Suggest: Ivideos 
}

const SuggestVideos:React.FC<SuggestProps> = ({Suggest})=> {

    // const SuggestSnippet = Suggest.map( item => item.snippet)
    // const Snippets = Suggest?.filter(i=> !isEmpty(i.snippet))

  
  return (
    <div className='pr-64' >
      {Suggest?.map((video, index)=>(
              !isEmpty(video.snippet) && (
                <div key={index} >
                <VideoList video={video}/>
              </div>
              )   
            ))}
    </div>
  )
}

export default SuggestVideos