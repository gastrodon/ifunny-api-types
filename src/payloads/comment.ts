import {
	APIGifCaptionPost,
	APIGifPost,
	APIPost,
	APIPostCreator,
	APIPostThumbnail,
} from "./post";

import { APIBasePayload } from "./base";
import { APIUserRating } from "./user";

export interface APICommentBase extends APIBasePayload {
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
}

export interface APIComment {
	content: APIPost;
	attachments: APICommentAttachments;
	content_thumbs: APIPostThumbnail;
	last_reply?: APILastReply;
	root_comm_id?: string;
	parent_comm_id?: string;
	depth?: number;
}

interface APILastReply {
	root_comm_id: string;
	parent_comm_id: string;
	depth: number;
	attachments: APICommentAttachments;
	content_thumbs: APIPostThumbnail;
}

interface APICommentAuthor extends APIPostCreator {
	rating: APIUserRating;
}

interface APICommentAttachments {
	content: APIPost[];
	content_from_links: APIPost[];
	mention_user: APIMentionUser[];
	giphy: (APIGifPost | APIGifCaptionPost)[];
}

interface APIMentionUser {
	id: string;
	user_id: string;
	nick: string;
	start_index: number;
	stop_index: number;
	original_nick: string;
}

interface APICommentNum {
	smiles: number;
	unsmiles: number;
	replies: number;
}
