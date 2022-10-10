import { APIContent } from "../payloads";
import { RESTAPISuccessResponse } from "../utils";

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
