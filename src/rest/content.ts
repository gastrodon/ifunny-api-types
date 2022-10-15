import { APIContent, APISimpleUser } from "../payloads";
import { RESTAPIItems, RESTAPISuccessResponse } from "../utils";

/**
 * Possible report reasons
 */
export enum REPORT_TYPE {
	/**
	 * Hate Speech
	 */
	HATE = "hate",
	/**
	 * Nudity
	 */
	NUDE = "nude",
	/**
	 * Bot spam / spamming
	 */
	SPAM = "spam",
	/**
	 * Scam or Fraud
	 */
	FRAUD = "fraud",
	/**
	 * Targeted Abuse
	 */
	TARGETED_ABUSE = "target",
	/**
	 * Threats of Harm
	 */
	THREATS = "harm",
	/**
	 * Violence or Gore
	 */
	VIOLENCE = "violence",
	/**
	 * Harassment
	 */
	HARASSMENT = "harassment",
	/**
	 * Suicide or Self-injury
	 */
	SUICIDE = "suicide",
	/**
	 * Illegal or regulated goods
	 */
	ILLEGAL = "illegal",
	/**
	 * Banner Issues
	 */
	BANNER = "banner",
}

/**
 * Possible report reasons
 */
export type APIReportReason = `${REPORT_TYPE}`;

/**
 * Where an action was completed
 * @example
 * PUT /v4/reads/:contentId?from=:ACTION_LOCATION
 */
export enum ACTION_LOCATION {
	CHANNEL = "channel",
	COLLECTIVE = "coll",
	FEATURES = "feat",
	MONOFEED = "monofeed",
	MY_SMILES = "my-smiles",
	PROFILE = "prof",
	SUBS = "subs",
	TAG = "tag",
}

/**
 * Possible `from` locations
 */
export type APIActionLocation = `${ACTION_LOCATION}`;

/**
 * @example
 * GET /v4/content/:contentId
 */
export type RESTAPIContentResponse = RESTAPISuccessResponse<APIContent>;

/**
 * Nums returned when smiling or unsmiling content
 */
export interface ContentSmileNums {
	num_smiles: number;
	num_unsmiles: number;
	num_guest_smiles: number;
}

/**
 * @example
 * PUT /v4/content/:contentId/smiles
 * DELETE /v4/content/:contentId/smiles
 * PUT /v4/content/:contentId/unsmiles
 * DELETE /v4/content/:contentId/unsmiles
 */
export type RESTAPIContentSmileResponse = RESTAPISuccessResponse<ContentSmileNums>;

export interface ContentSmileUsers {
	smiles_count: number;
	guest_smiles_count: number;
	users: RESTAPIItems<APISimpleUser>;
}

/**
 * @example
 * GET /v4/content/:contentId/smiles
 * GET v4/
 */
export type RESTAPIContentSmileUsersResponse = RESTAPISuccessResponse<ContentSmileUsers>;

export interface ContentRepublishUsers {
	republishes_count: number;
	users: RESTAPIItems<APISimpleUser>;
}

/**
 * @example
 * GET /v4/content/:contentId/republished
 */
export type RESTAPIContentRepublishUsersResponse =
	RESTAPISuccessResponse<ContentRepublishUsers>;
