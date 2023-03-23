import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// action type
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

// action creator
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// redux-thunk 방식
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(increase()), 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(decrease()), 1000);
// };

// initial state
const initialState = {
  number: 0,
  diff: 1,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return { ...state, diff: action.diff };
    case INCREASE:
      return { ...state, number: state.number + state.diff };
    case DECREASE:
      return { ...state, number: state.number - state.diff };

    default:
      return state;
  }
}
