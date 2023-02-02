import React from 'react' 

type PageProps = {
    params: {
    searchTerm: string
    }
}

type SearchResult = {
  organic_results:[
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string
    }
  ], updated_on: number
}

async function search(searchTerm:string) {
    const res = await fetch(`http://localhost:3000/api/search?searchTerm=${searchTerm}`, {
        next: {revalidate: 60}
    }); 
    const data: SearchResult = await res.json(); 
    
    return data;
}

async function SearchResults({params: {searchTerm}}:PageProps) {

  const searchResults = await search(searchTerm)
  return (
    <div>
      <p className='text-gray-500 text-sm'>You searched for: {searchTerm}, last updated on {searchResults.updated_on}</p>
      <ol className='space-y-5 p-5'>
      {searchResults.organic_results.map((result) =>(
        <li key={result.position} className="list-decimal">
          <p className='font-bold'>{result.title}</p>
          <p >{result.snippet}</p>          
        </li>
      ))}
      </ol>
    </div>
  )
}

export default SearchResults
