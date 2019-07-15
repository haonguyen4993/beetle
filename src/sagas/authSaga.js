import { all, call, put, takeLatest } from "redux-saga/effects";
import auth from "../apis/auth";
import { SIGN_IN } from "../actions/types";
// import history from "history";

const getFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}

function* signIn(action) {
	const response = yield call(auth.post, "/oauth/token", getFormData({ ...action.payload, grant_type: "password" }));
	yield put({
		type: SIGN_IN,
		payload: response.data
	})
}

export default function* authSaga() {
	yield all([
		takeLatest("CALL_SIGN_IN", signIn)
	]);
}
