import { APICommentBase } from "./comment";
import { APIPost } from "./post";
import { APIUser } from "./user";
import { Timestamp } from "../utils";

/**
 * All current activity types
 * TODO: Add remaining activity types
 */
export type APIActivity =
	| APIPostSmiledActivity
	| APICommentActivity
	| APICommentSmiledActivity
	| APISmileTrackerActivity
	| APICommentReplyActivity
	| APIRepubRepubActivity;

interface APIActivityBase {
	type: APIActivityType;
	date: Timestamp;
}

interface CommUserCont extends UserCont {
	comment: APIActivityComment;
}

interface UserCont extends APIActivityBase {
	user: APIActivityUser;
	content: APIPost;
}

export interface APIPostSmiledActivity extends UserCont {
	type: ACTIVITY_TYPES.POST_SMILED;
}

export interface APICommentActivity extends CommUserCont {
	type: ACTIVITY_TYPES.COMMENT;
}

export interface APICommentSmiledActivity extends CommUserCont {
	type: ACTIVITY_TYPES.COMMENT_SMILED;
}

export interface APISmileTrackerActivity extends APIActivityBase {
	smiles: number;
	type: ACTIVITY_TYPES.SMILE_TRACKER;
}

export interface APICommentReplyActivity extends CommUserCont {
	reply: APIActivityReply;
	type: ACTIVITY_TYPES.REPLY;
}

export interface APIRepubRepubActivity extends UserCont {
	type: ACTIVITY_TYPES.REPUB_OF_REPUB;
}

export interface APIActivityReply extends APIActivityComment {
	root_comm_id: string;
}

export interface APIActivityComment
	extends Pick<APICommentBase, "text" | "id" | "cid" | "is_reply"> {
	state: APIActivityCommentState;
	num: {
		smiles: number;
	};
}

/**
 * All known comment states for activity feed
 */
export enum COMMENT_STATES {
	NORMAL = "normal",
}

export type APIActivityCommentState = `${COMMENT_STATES}`;

export type APIActivityUser = Pick<
	APIUser,
	"id" | "nick" | "is_banned" | "is_verified" | "is_deleted" | "photo" | "nick_color"
>;

/**
 * All known activity types
 */
export enum ACTIVITY_TYPES {
	POST_SMILED = "smile",
	COMMENT = "comment",
	COMMENT_SMILED = "smile_for_comment",
	REPLY = "reply_for_comment",
	SMILE_TRACKER = "smile_tracker",
	REPUB_OF_REPUB = "repub_of_repub",
}

/**
 * All possible activity types
 */
type APIActivityType = `${ACTIVITY_TYPES}`;
