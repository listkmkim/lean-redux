import { Link } from "react-router-dom";
import PlainList from "../atoms/PlainList";

export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <PlainList key={post.id}>
          <Link to={{ pathname: `/${post.id}` }}>{post.title}</Link>
        </PlainList>
      ))}
    </ul>
  );
}
