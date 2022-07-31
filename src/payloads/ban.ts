import { Timestamp } from "../utils";

/**
 * Represents a user's ban from the API
 */
export interface APIBan {
	/**
	 * Unique ban Id
	 */
	id: string;
	/**
	 * Unix timestamp of when the ban expires\
	 * ? IN SECONDS! More better accuracy, convert to milliseconds
	 */
	date_until: Timestamp;
	/**
	 * Known {@link BAN_TYPES types}
	 */
	type: APIBanReason;
}

/**
 * All known ban reasons
 */
export enum BAN_REASONS {
	SPAM = "bot_spam",
	ABUSE = "abuse_harassment",
	CHILD_PORN = "child_pornography",
	HARDCORE = "hardcore",
	OTHER = "other",
	DEATH_GORE = "death_gore",
	HATE_SPEECH = "hate_speech",
	THREATS = "threats_of_harm",
}

/**
 * All possible ban reasons
 */
export type APIBanReason = `${BAN_REASONS}`;

/**
 * All known ban types
 */
export enum BAN_TYPES {
	CONTENT_CREATION = "content_creation",
	CHAT_ACCESS = "chat_access",
	SUBSCRIBING = "subscribing",
	COMMENTING = "comment_creation",
	REPUBING = "repubing",
	PROFILE = "profile_access",
	SMILING = "smiling",
	OTHER = "other",
	/**
	 * Not in app but from requests.
	 */
	COLLECTIVE_SHADOW = "collective_shadow",
}

/**
 * Possible Ban Types
 */
export type APIBanType = `${BAN_TYPES}`;
