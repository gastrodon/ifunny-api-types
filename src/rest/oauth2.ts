import {
	RESTAPICaptchaError,
	RESTAPIErrorResponse,
	RESTAPIInvalidCreds,
} from "../utils/errors";

export type RESTAPIOauth2Login =
	| RESTAPIOauth2LoginSuccess
	| RESTAPIOauth2LoginError
	| RESTAPICaptchaError;

export interface RESTAPIOauth2LoginSuccess {
	access_token: string;
	token_type: `bearer`;
	expires_in: 315360000;
}

export enum TokenTypes {
	Bearer = "bearer",
	Basic = "basic",
}

export type RESTAPIOauth2LoginError = RESTAPIInvalidCreds | RESTAPIErrorResponse;
