import { useRouter } from 'next/router';
import { getSearchVideos } from '../../services/videos'
import { useEffect, useState } from 'react';
import VideoList from '../../components/VideoList';
import PageHead from '../layouts/PageHead'
import Header from '../layouts/Header'
import { isEmpty } from 'lodash';
const index:React.FC = ()=> {
    const router = useRouter();
    const {q} = router.query;
    const [searchVideo, setSearchVideo] = useState()
  
  useEffect(()=>{
    if(!isEmpty(q)){
      const fetchSearch = async()=> {
        const result = await getSearchVideos(q as string);
        setSearchVideo(result.items);
      }
      fetchSearch();
    }
    
  },[q])
  


  return (
    <div>
      <PageHead />
      <Header />
      <div className='pt-28 flex flex-col items-center justify-center bg-red'>
        <div>
          {searchVideo?.map((video, index)=>(
                  !isEmpty(video.snippet) && (
                    <div className='pl-12' key={index} >
                      <VideoList video={video} isSearch={true}/>
                    </div>
                  )   
                ))}
        </div>
        
      </div>

    </div>
  )
}

export default index