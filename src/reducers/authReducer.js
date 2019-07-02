import * as ActionTypes from "../actions/types";
import { handleActions } from "redux-actions";

const INITIAL_STATE = {
	isSignedIn: true,
	userId: null
};

export default handleActions(
	{
		[ActionTypes.SIGN_IN]: (state, action) => ({ ...state, isSignedIn: true, userId: action.payload })
	},
	INITIAL_STATE
);