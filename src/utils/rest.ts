export interface RESTAPICaptchaError extends RESTAPIErrorResponse {
	error: "captcha_required";
	error_description: "Human verification is required";
	data: {
		captcha_url: string;
		type: CaptchaType;
	};
	status: 403;
}

enum CaptchaTypes {
	FUN_CAPTCHA = "fun_captcha",
}

type CaptchaType = `${CaptchaTypes}`;

export interface RESTAPIExpiredBearerError extends RESTAPIErrorResponse {
	status: 401;
	error: "invalid_grant";
	error_description: "token is expired";
}

/**
 * Returns when the request throws an error.
 */
export interface RESTAPIErrorResponse {
	/**
	 * The error code for the error
	 */
	error: string;
	/**
	 * The error message for the error
	 */
	error_description: string;
	/**
	 * HTTP status code for the error
	 */
	status: number;
}

/**
 * Returns when the request was a success
 */
export interface RESTAPISuccessResponse<T extends unknown> {
	/**
	 * The data returned from the API
	 */
	data: T;
	/**
	 * Typically 200 on success
	 */
	status: number;
}

/**
 * Common data response
 */
export interface RESTAPIItems<Item extends unknown> {
	/**
	 * Array of items returned from the API
	 */
	items: Item[];
	/**
	 * Pagination data returned from the API
	 */
	paging: RESTAPIPaging;
}

export interface RESTAPIPaging {
	cursors: RESTAPICursors;
	/**
	 * Is there a prev key in cursors
	 */
	hasPrev: boolean;
	/**
	 * Is there a next key in cursors
	 */
	hasNext: boolean;
}

export interface RESTAPICursors {
	/**
	 * The next value for pagination
	 */
	next?: string;
	/**
	 * The previous value for backwards pagination
	 */
	prev?: string;
}
