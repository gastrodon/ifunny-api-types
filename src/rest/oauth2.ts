import { RESTAPICaptchaError, RESTAPIErrorResponse } from "../utils/errors";

export type RESTAPIOauth2Login = RESTAPIOauth2LoginSuccess | RESTAPIOauth2LoginError;

export interface RESTAPIOauth2LoginSuccess {
	/**
	 * Bearer token used for requests
	 */
	access_token: string;
	token_type: TOKEN_TYPES.BEARER;
	/**
	 * ? This Timestamp is in seconds, which is equivilent to 10 years
	 */
	expires_in: 315360000;
}

export enum TOKEN_TYPES {
	BEARER = "bearer",
	BASIC = "basic",
}

export type APITokenType = `${TOKEN_TYPES}`;

export type RESTAPIOauth2LoginError = RESTAPIErrorResponse | RESTAPICaptchaError;
