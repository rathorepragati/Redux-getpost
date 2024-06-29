import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchPosts, removePost } from './store/actions';
import Card from './Card';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch(fetchPosts(response.data));
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  const handleRemove = (id) => {
    dispatch(removePost(id));
    const totalPostsLeft = posts.length - 1;
    const totalPages = Math.ceil(totalPostsLeft / postsPerPage);

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  };

  // Ensure posts is defined and not empty
  if (!posts || posts.length === 0) {
    return <div className="text-center my-5">No posts available</div>;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container my-5 w-75 p-5 bg-primary-subtle">
      <div className="row">
        {currentPosts.map(post => (
          <Card key={post.id} post={post} onRemove={handleRemove} />
        ))}
      </div>
      <Pagination 
        totalPosts={posts.length} 
        postsPerPage={postsPerPage} 
        paginate={setCurrentPage} 
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
