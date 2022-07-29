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
	BotSpam = "bot_spam",
	Abuse = "abuse_harassment",
	ChildPorn = "child_pornography",
	Hardcore = "hardcore",
	Other = "other",
	DeathGore = "death_gore",
	HateSpeech = "hate_speech",
	Threats = "threats_of_harm",
}

/**
 * All possible ban reasons
 */
export type APIBanReason = `${BAN_REASONS}`;

/**
 * All known ban types
 */
export enum BAN_TYPES {
	ContentCreation = "content_creation",
	ChatAccess = "chat_access",
	Subscribing = "subscribing",
	CommentCreation = "comment_creation",
	Republishing = "repubing",
	ProfileAccess = "profile_access",
	Smiling = "smiling",
	Other = "other",
	/**
	 * Not in app but from requests.
	 */
	CollectiveShadow = "collective_shadow",
}

/**
 * Possible Ban Types
 */
export type APIBanType = `${BAN_TYPES}`;
