import { useParams } from "react-router-dom";
import PostContainer from "../components/Templates/PostContainer";

export default function PostPage() {
  const { id } = useParams();

  return <PostContainer postId={parseInt(id, 10)} />;
}
