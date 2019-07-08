import * as ActionTypes from "./types";
import { createActions } from "redux-actions";

export const {
	callSignIn
} = createActions({
	[ActionTypes.CALL_SIGN_IN]: undefined
});

// export const signIn = (accessToken) => {
// 	return {
// 		type: ActionTypes.SIGN_IN,
// 		payload: accessToken
// 	};
// }