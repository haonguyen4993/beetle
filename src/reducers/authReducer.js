import * as ActionTypes from "../actions/types";
import { handleActions } from "redux-actions";

const INITIAL_STATE = {
	isAuthented: null,
	accessToken: ""
};

export default handleActions(
	{
		[ActionTypes.SIGN_IN]: (state, action) => ({ ...state, isAuthented: !!action.payload.accessToken.length, accessToken: action.payload })
	},
	INITIAL_STATE
);
