import { Route, Routes } from "react-router-dom";
import CounterContainer from "./components/Templates/CounterContainer";
import TodoContainer from "./components/Templates/TodoContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div>
      <CounterContainer />
      <TodoContainer />
      <Routes>
        <Route path="/" element={<PostListPage />} exact={true} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
