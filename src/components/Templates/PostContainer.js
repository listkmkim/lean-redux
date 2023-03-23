import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearPost, getPost, goToHome, goToNext } from "../../modules/posts";
import Post from "../organisms/Post";

export default function PostContainer({ postId }) {
  const navigate = useNavigate();

  const { loading, data, error } = useSelector((store) => store.posts.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(postId));

    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, postId]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생.</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome(navigate))}>홈으로</button>
      <button onClick={() => dispatch(goToNext(navigate))}>다음</button>
      <Post post={data} />
    </>
  );
}
