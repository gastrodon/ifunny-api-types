/**
 * This is thrown when you need to solve a captcha to complete the request.
 */
export interface RESTAPICaptchaError {
	error: "captcha_required";
	error_description: "Human verification is required";
	data: {
		/**
		 * Open this url in any browser, solve it, then make the exact same request again.
		 */
		captcha_url: string;
		type: CaptchaType;
	};
	status: 403;
}

/**
 * Known captcha types
 */
enum CaptchaTypes {
	FUN_CAPTCHA = "fun_captcha",
}

type CaptchaType = `${CaptchaTypes}`;

/**
 * Returned when the authorization bearer token has expired or been revoked.
 */
export interface RESTAPIExpiredBearerError {
	status: 401;
	error: "invalid_grant";
	error_description: "token is expired";
}

/**
 * Returned when the authorization bearer token could not be parsed by the API.
 */
export interface RESTAPICannotParseBearerError {
	status: 401;
	error: "invalid_grant";
	error_description: `Cannot parse ${string}`;
}

/**
 * Returned when the authorization bearer token is invalid.
 */
export interface RESTAPIInvalidBearerError {
	status: 401;
	error: "invalid_grant";
	error_description: "invalid access token";
}

/**
 * Returned when the Basic token is invalid
 */
export interface RESTAPIMalformedTokenError {
	status: 401;
	error: "invalid_client";
	error_description: "Malformed token: underscore";
}

/**
 * Returned when the request is made with a basic token but required a bearer token.
 */
export interface RESTAPIUnauthorizedError {
	status: 401;
	error: "unauthorized";
	error_description: "Requested operation is unavailable for guests";
}

/**
 * Returns when the request throws an error.
 */
export type RESTAPIErrorResponse =
	| RESTAPIInvalidBearerError
	| RESTAPIMalformedTokenError
	| RESTAPIUnauthorizedError
	| RESTAPICaptchaError;
