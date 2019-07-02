import * as ActionTypes from "./types";

export const signIn = (userId) => {
	return {
		type: ActionTypes.SIGN_IN,
		payload: userId
	};
}