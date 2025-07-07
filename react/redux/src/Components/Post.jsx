import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/Slice/postSlice/postSlice";

const Post = () => {
  const { isLoading, postsValue, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <h1>Posts</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Error: {error}</h3>}
      {postsValue?.length > 0 ? (
        <ul>
          {postsValue.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <h3>No posts available</h3>
      )}
    </>
  );
};

export default Post;
