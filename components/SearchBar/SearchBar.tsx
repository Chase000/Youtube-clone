import { SearchIcon } from '@heroicons/react/solid'
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();
  const [searchString, setSearchString] = useState<string>('');
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    router.push({
      pathname: '/search',
      query: {
        q: searchString
      }
    })
	
	};



  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  }

    
  return (
    <div className='flex items-center justify-center w-full'>
      <form className='flex items-center h-13 border-solid border-2 w-full sm:w-2/5 lg:max-w-xl'>
        <input 
          className='border-none focus:outline-none w-full'
          placeholder=' Search' 
          onChange={onChange} 
          value={searchString}
        />
        <button 
          type='submit' 
          onClick={handleSubmit} 
          className='flex items-center justify-center border-solid border-l-2 bg-gray-50 h-10 w-16'
        >
          <SearchIcon className="h-6 w-6 text-gray-400" />
        </button> 
      </form> 
    </div>      
  )
}
export default SearchBar