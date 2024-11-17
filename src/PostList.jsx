import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './dataSlice';
import PostItem from './PostItem';
import { useEffect } from 'react';

const PostsList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData()); // Fetch data when the component mounts
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const filteredPosts = items.filter(post => post.id === post.userId);
  return (
    <>
    <div>
      <h1>Posts</h1>
      {items.map(post => (
        <PostItem key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
      <div>
      <h1>Filtered Posts............................................ (id != userId)</h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <PostItem key={post.id} title={post.title} body={post.body} />
        ))
      ) : (
        <div>No posts match the criteria.</div>
      )}
    </div>
    </>
  );
};

export default PostsList;
