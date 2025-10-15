// import  { useState, useEffect } from 'react'
// import { Card } from './Card';

// export const DataBoard = () => {
//   const [articals, setarticals] = useState([]);

//   useEffect(() => {
//     let url = `mongodb://localhost:27017/`;
//     fetch(url).then(Response => Response.json()).then(Data => setarticals(Data.articles));
//   }, [])
//   return (
//     <div>
//       <h2 className='text-center'>Latest <span className='badge bg-danger'>NEWS</span></h2>
//       {articals.map((news, index) => {

//         return <Card key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//       })}
//     </div>
//   )
// }

