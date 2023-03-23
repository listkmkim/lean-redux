import { call, put, takeEvery, takeLeading } from "redux-saga/effects";
import * as postAPI from "../api/posts";
import {
  createPromiseSaga,
  createPromiseSagaById,
  createPromiseThunk,
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
} from "../lib/asyncUtils";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const GET_POST = "posts/GET_POST";
const GET_POST_SUCCESS = "posts/GET_POST_SUCCESS";
const GET_POST_ERROR = "posts/GET_POST_ERROR";

const CLEAR_POST = "posts/CLEAR_POST";

export const clearPost = () => ({ type: CLEAR_POST });

// export const getPosts = () => async (dispatch) => {
//   dispatch({ type: GET_POSTS });

//   try {
//     const posts = await postAPI.getPosts();
//     dispatch({ type: GET_POSTS_SUCCESS, posts });
//   } catch (error) {
//     dispatch({ type: GET_POSTS_ERROR, error });
//   }
// };

// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const post = postAPI.getPostById(id);

//     dispatch({ type: GET_POST_SUCCESS, post });
//   } catch (error) {
//     dispatch({ type: GET_POST_ERROR, error });
//   }
// };

// redux-thunk 방식
// export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
// export const getPost = createPromiseThunk(GET_POST, postAPI.getPostById);

//redux-saga 방식
export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });

const getPostsSaga = createPromiseSaga(GET_POSTS, postAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postAPI.getPostById);

// function* getPostsSaga() {
//   try {
//     const posts = yield call(postAPI.getPosts);
//     yield put({ type: GET_POSTS_SUCCESS, payload: posts });
//   } catch (error) {
//     yield put({ type: GET_POSTS_ERROR, payload: error, error: true });
//   }
// }

// function* getPostSaga(action) {
//   const param = action.payload;
//   const id = action.meta;
//   try {
//     const post = yield call(postAPI.getPostById, param);
//     yield put({ type: GET_POST_SUCCESS, payload: post, meta: id });
//   } catch (error) {
//     yield put({ type: GET_POST_ERROR, payload: error, error: true, meta: id });
//   }
// }

function* clearPostSaga() {
  yield put({ type: CLEAR_POST });
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeLeading(CLEAR_POST, clearPostSaga);
}

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, "post", true)(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}

export const goToHome = (navigate) => (dispatch, getState) => {
  navigate("/");
};

export const goToNext = (navigate) => (dispatch, getState) => {
  const {
    posts: {
      posts: { data: posts },
      post: { data: post },
    },
  } = getState();
  const currentPostIndex = posts.findIndex((item) => item.id === post.id);
  if (currentPostIndex < posts.length - 1)
    navigate(`/${posts[currentPostIndex + 1].id}`);
};

// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: { ...state.posts, loading: true },
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: { loading: false, data: action.posts, error: null },
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: { ...state.posts, loading: false, error: action.error },
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: { ...state.post, loading: true },
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: { loading: false, data: action.post, error: null },
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: { ...state.post, loading: false, error: action.error },
//       };
//     default:
//       return state;
//   }
// }
