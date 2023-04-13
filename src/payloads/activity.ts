import { APIComment, APIMentionUser, APIReply } from "./comment";

import { APIBanType } from "./ban";
import { APIContent } from "./content";
import { APIUser } from "./user";
import { EpochSec } from "../utils";

interface Smiles {
	smiles: string;
}

export interface APINews {
	banId?: string;
	banType?: APIBanType;
	banTypeMessage?: string;
	comment?: APIComment;
	content?: APIContent;
	countActiveStrike?: number;
	date: EpochSec;
	date_until?: EpochSec;
	expiredAt?: EpochSec;
	imageUrl?: string;
	mention_content?: APIContent;
	mention_users?: APIMentionUser[];
	purchaseType?: string;
	reply?: APIReply;
	smiles?: number;
	strikeId?: string;
	text?: string;
	title?: string;
	type: APINewsType;
	url?: string;
	user?: APINewsUser;
	username?: string;
}

export interface APINewsReply extends APINewsComment {
	root_comm_id: string;
}

export interface APINewsComment
	extends Pick<APIComment, "text" | "id" | "cid" | "is_reply"> {
	num: Smiles;
}

export type APINewsUser = Pick<
	APIUser,
	"id" | "nick" | "is_banned" | "is_verified" | "is_deleted" | "photo" | "nick_color"
>;

/**
 * All current new types
 */
export enum NEWS_TYPES {
	BAN = "ban",
	BAN_ACTION = "ban_action",
	COMMENT = "comment",
	COMMENT_FOR_REPUB = "comment_for_repub",
	CONTENT_BOOSTED = "content_boost",
	DELETE = "user_deleted",
	FEATURED = "featured",
	FRIEND_REGISTERED = "friend_registered",
	GEO_FRIEND_ACCEPTED = "geo_friend_accepted",
	GEO_FRIEND_REJECTED = "geo_friend_rejected",
	GEO_FRIEND_REQUEST = "geo_friend_request",
	MENTION_CONTENT = "mention_content",
	MENTION_USER = "mention_user",
	PURCHASE_ONETIME = "purchase_onetime",
	PURCHASE_SUBSCRIPTION = "purchase_subscription",
	/**
	 * @deprecated iFunny no longer uses this
	 */
	REJECTED_BY_CUSTOMS = "rejected_by_customs",
	REPLY_FOR_COMMENT = "reply_for_comment",
	REPORTED_COMMENT_BANNED = "reported_comment_banned",
	REPORTED_CONTENT_BANNED = "reported_content_banned",
	REPORTED_USER_BANNED = "reported_user_banned",
	REPUB = "repub",
	REPUB_OF_REPUB = "repub_of_repub",
	SMILE = "smile",
	SMILE_FOR_COMMENT = "smile_for_comment",
	SMILE_FOR_REPLY = "smile_for_reply",
	SMILE_FOR_REPUB = "smile_for_repub",
	SMILE_TRACKER = "smile_tracker",
	/**
	 * @deprecated iFunny no longer uses this
	 */
	SPECIAL = "special",
	STRIKE = "strike_action",
	STRIKE_EXPIRED = "expire_strike",
	SUBSCRIBE = "subscribe",
	UNBAN = "unban",
	UNBAN_ACTION = "unban_action",
	UNDELETE = "user_undeleted",
}

/**
 * All possible activity types
 */
export type APINewsType = `${NEWS_TYPES}`;
