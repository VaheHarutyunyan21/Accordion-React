import logo from './logo.svg';
import './App.css';
import Data from './Data'
import Pagination from './Pagination';
import { useState,useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage,setPostsPerPage]=useState(10)



  useEffect(() => {
    
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => response.json())
      .then(count => {
        setPosts(count.data);
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = pageNumber => setCurrentPage(pageNumber);



  return (



    <div className='container mt-5'>
      {posts.map((value,index)=>{
        return(
          <div>
            <Data name={value.name} capital={value.capital}/>

          </div>
        )
      })}
      {/* <h1 className='text-primary mb-3'>My Accordion</h1>
      <Data posts={currentPosts} loading={loading} setLoading={setLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
    </div>

  );




}

export default App;
