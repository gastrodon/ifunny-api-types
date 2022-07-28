import {
	RESTAPIErrorResponse,
	RESTAPICaptchaError,
	RESTAPIExpiredBearerError,
} from "../utils/rest";

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

export interface RESTAPIOauth2LoginInvalidCreds extends RESTAPIErrorResponse {
	error: "invalid_grant";
	error_description: "Wrong user credentials";
	status: 400;
}

export type RESTAPIOauth2LoginError =
	| RESTAPIOauth2LoginInvalidCreds
	| RESTAPICaptchaError
	| RESTAPIExpiredBearerError;
