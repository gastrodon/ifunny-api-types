import {
	APIContent,
	APIContentCreator,
	APIContentGif,
	APIContentThumbnail,
} from "./content";
import { APIUser, APIUserRating } from "./user";

/**
 * Represents a Comment from iFunny
 */
export interface APICommentBase {
	id: string;
	cid: string;
	status: string;
	date: string;
	text: string;
	is_reply: boolean;
	num: APICommentNum;
	is_smiled: boolean;
	is_unsmiled: boolean;
	is_edited: boolean;
	user: APICommentAuthor;
	content: APIContent;
	attachments: APICommentAttachments;
	content_thumbs: APIContentThumbnail;
	last_reply?: APIReply;
	state?: APICommentState;
}

/**
 * Represents a Reply to a Comment from iFunny
 */
export interface APIReply extends APICommentBase {
	root_comm_id: string;
	parent_comm_id: string;
	depth: number;
}

/**
 * Represents a Comment from iFunny
 */
export type APIComment = APICommentBase | APIReply;

export interface APICommentNum {
	smiles: number;
	unsmiles: number;
	replies: number;
}

/**
 * All states of the comment
 */
export enum COMMENT_STATE {
	NORMAL = "normal",
	TOP_COMMENT = "top",
	ABUSED = "abused",
	DELETED = "deleted",
	AUTHOR_DELETED = "deleted_self",
}

/**
 * All possible states of the comment
 */
export type APICommentState = `${COMMENT_STATE}`;

interface APICommentAuthor extends APIContentCreator {
	rating: APIUserRating;
}

interface APICommentAttachments {
	content: APIContent[];
	content_from_links: APIContent[];
	mention_user: APIMentionUser[];
	giphy: APIContentGif[];
}

export type APICommentContent = Pick<
	APIContent,
	| "id"
	| "type"
	| "is_abused"
	| "bg_color"
	| "shot_status"
	| "state"
	| "size"
	| "thumb"
	| "source"
	| "creator"
>;

export interface APIMentionUser {
	/**
	 * ID of the Mention\
	 * ? Increments last digit of the comment id
	 */
	id: string;
	creator: APIContentCreator;
	nick: APIUser["nick"];
	start_index: number;
	stop_index: number;
	user_id: APIUser["id"];
	original_nick: APIUser["original_nick"];
}
