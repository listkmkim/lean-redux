import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../modules/posts";
import PostList from "../organisms/PostList";

export default function PostListContainer() {
  const { loading, data, error } = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}
