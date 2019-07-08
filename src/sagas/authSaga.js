import { all, call, put, takeLatest, select } from "redux-saga/effects";
import auth from "../apis/auth";
import { SIGN_IN } from "../actions/types";
import history from "history";

function* signIn() {
	const response = yield call(auth.post, "/oauth/token", { params: { grant_type: "password", username: "admin", password: "One23456!" }});
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