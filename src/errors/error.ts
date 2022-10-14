import RESTAPIError from "./error_base";
import RESTAPIErrorBadRequest from "./bad_request";
import RESTAPIErrorCaptchaRequired from "./captcha_required";
import RESTAPIErrorEmailExists from "./email_exists";
import RESTAPIErrorInvalidEmail from "./invalid_email";
import RESTAPIErrorInvalidGrant from "./invalid_grant";
import RESTAPIErrorNotFound from "./not_found";
import RESTAPIErrorPermissionDenied from "./permission_denied";
import RESTAPIErrorUnauthorized from "./unauthorized";
import RESTAPIErrorInvalidClient from "./invalid_client";

/**
 * Returns when the request throws an error.\
 * Automatically evaluates the error based on other values
 * @example
 * function foo(error: RESTAPIErrorResponse) {
 *    switch(error.status) {
 * 		case 400:
 * 			error.error !== 'captcha_required' // true
 * 		case 403:
 * 			error.error !== 'bad_request' // true
 * 	  }
 * }
 */
export type RESTAPIErrorResponse =
	| RESTAPIErrorInvalidClient
	| RESTAPIErrorBadRequest
	| RESTAPIErrorCaptchaRequired
	| RESTAPIErrorEmailExists
	| RESTAPIErrorInvalidEmail
	| RESTAPIErrorInvalidGrant
	| RESTAPIErrorNotFound
	| RESTAPIErrorPermissionDenied
	| RESTAPIErrorUnauthorized;

/**
 * Use this if you don't know the error being thrown or don't want full intellisense support
 */
export type RESTAPIUnknownError = RESTAPIError;
