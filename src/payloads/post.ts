import { APIUser, APIUserNums } from "./user";
import { HexCode, Size, Timestamp } from "../utils/util";

import { APIBasePayload } from "./base";

/**
 * JSON data of an iFunny Post
 */
export interface APIPostBase<Type extends APIPostType = APIPostType>
	extends APIBasePayload {
	/**
	 * Unique id of the post.\
	 * Typically 9 characters long
	 */
	id: string;
	/**
	 * The type of the post.
	 */
	type: Type;
	/**
	 * Content url of the post.
	 */
	url: string;
	/**
	 * If the post uses the old watermark or the new one
	 */
	old_watermark: boolean;
	/**
	 * In-app share url.
	 * @example
	 * `https://ifunny.co/picture/${post.id}`
	 * `https://ifunny.co/video/${post.id}`
	 */
	link: string;
	/**
	 * The title of the post
	 */
	title: string;
	/**
	 * Fixed title of the post
	 * @example
	 * `Gif memes ${post.id} by ${post.creator.nick}`
	 * `Picture memes ${post.id} by ${post.creator.nick}: ${post.num.comments} comments`
	 */
	fixed_title: string;
	/**
	 * Array of tags on the post
	 */
	tags: string[];
	/**
	 * The publish state of the post
	 */
	state: APIPostState;
	/**
	 * {@link Timestamp} of when the post was created
	 */
	date_create: Timestamp;
	/**
	 * {@link Timestamp} of when the Post was published
	 */
	publish_at: Timestamp;
	/**
	 * Is the post smiled by the Client
	 */
	is_smiled: boolean;
	/**
	 * Is the post unsmiled by the Client
	 */
	is_unsmiled: boolean;
	/**
	 * Is the post removed by iFunny
	 */
	is_abused: boolean;
	/**
	 * Is the post featured by iFunny
	 */
	is_featured: boolean;
	/**
	 * Is the post republished by the Client
	 */
	is_republished: boolean;
	/**
	 * Is the post pinned by the creator
	 */
	is_pinned: boolean;
	/**
	 * Background color of the post.
	 */
	bg_color: HexCode;
	/**
	 * The {@link APIPostThumbnail thumbnail} of the post
	 */
	thumb: APIPostThumbnail;
	/**
	 * A post's {@link APIPostCopyright copyright} data
	 */
	copyright: APIPostCopyright;
	/**
	 * The {@link APIPostNums numbers} on the post.
	 */
	num: APIPostNums;
	/**
	 * The author of the post
	 */
	creator: APIPostCreator;
	/**
	 * Size of the post
	 */
	size: Size;
	/**
	 * The post's visibility
	 */
	visibility: APIPostVisibility;
	/**
	 * TODO: shot_status description
	 */
	shot_status: APIPostShotStatus;
	/**
	 * TODO: fast_start description
	 */
	fast_start: boolean;
	/**
	 * The risk level of the post
	 */
	risk: number;
	/**
	 * @example
	 * `https://ifunny.co/picture/${post.id}`
	 */
	canonical_url: string;
	/**
	 * Text generated from iFunny's {@link https://www.ibm.com/cloud/blog/optical-character-recognition OCR}
	 */
	ocr_text?: string;
	/**
	 * Can the post be boosted still
	 */
	can_be_boosted: boolean;
}

// * Enum types

/**
 * Post visibility types
 */
export enum POST_VISIBILITIES {
	/**
	 * Anyone can see the post
	 */
	PUBLIC = "public",
	/**
	 * Post is hidden from collective and explore
	 */
	SUBSCRIBERS = "subscribers",
	/**
	 * Only the creator can see the post
	 */
	CLOSED = "closed",
}

export type APIPostVisibility = `${POST_VISIBILITIES}`;

/**
 * Post shot status types
 */
export enum SHOT_STATUSES {
	/**
	 * The post was approved for upload
	 */
	APPROVED = "approved",
	/**
	 * The post was uploaded but immediately deleted by the auto moderation system
	 */
	HARD_SHOT = "hardShot",
	/**
	 * TODO: Find a post with shot status and document difference.
	 */
	SHOT = "shot",
}

/**
 * Possible shot statuses
 */
export type APIPostShotStatus = `${SHOT_STATUSES}`;

/**
 * All currently known post types
 */
export enum POST_TYPES {
	// * Videos
	/**
	 * Most common video post type\
	 * Data key: `video_clip`
	 */
	VIDEO_CLIP = "video_clip",
	/**
	 * A video uploaded from a url like YouTube\
	 * Data key: `video`
	 */
	VIDEO = "video",
	/**
	 * A video uploaded from vine\
	 * Data key: `vine`
	 */
	VINE = "vine",
	/**
	 * Video meme from {@link https://coub.com Coub}\
	 * Data key: `coub`
	 */
	COUB = "coub",
	// * Gifs
	/**
	 * Gif uploaded to ifunny\
	 * Data key: `gif`
	 */
	GIF = "gif",
	/**
	 * Gif with a caption\
	 * Data key: `gif`
	 */
	GIF_CAPTION = "gif_caption",
	// * Images
	/**
	 * An image post with a custom caption\
	 * Data key: `caption`
	 */
	CAPTION = "caption",
	/**
	 * Image upload\
	 * Data key: `pic`
	 */
	PIC = "pic",
	/**
	 * Image uploaded from iFunny's old "Meme" upload system.\
	 * This is no longer in iFunny
	 */
	MEM = "mem",
	/**
	 * An image uploaded from ifunny's comic creator
	 */
	COMICS = "comics",
	// * Special / Unknown
	/**
	 * An interactive post from iFunny
	 * @deprecated These posts have been removed from the database and will not be available
	 */
	APP = "app",
	/**
	 * Unknown post type\
	 * TODO: Document what POST_TYPES.OLD is
	 */
	OLD = "old",
	/**
	 * Unknown post type\
	 * TODO: Document what POST_TYPES.DEM is
	 */
	DEM = "dem",
}

/**
 * Possible post types
 */
export type APIPostType = `${Exclude<POST_TYPES, POST_TYPES.APP>}`;

// TODO: Discover more post states
export enum POST_STATES {
	/**
	 * The post is published
	 */
	PUBLISHED = "published",
	/**
	 * A post that was scheduled to be published later
	 */
	DELAYED = "delayed",
}

/**
 * Possible post states
 */
export type APIPostState = `${POST_STATES}`;

// * Sub objects

/**
 * Author of a Post\
 * Only includes info also in the user object
 */
export type APIPostCreatorBase = Pick<
	APIUser,
	| "id"
	| "nick"
	| "photo"
	| "is_verified"
	| "is_banned"
	| "is_deleted"
	| "is_in_subscriptions"
	| "is_in_subscribers"
	| "is_blocked"
	| "nick_color"
	| "original_nick"
>;

/**
 * The creator object for a post
 */
export interface APIPostCreator extends APIPostCreatorBase {
	/**
	 * Only includes subscription and subscriber count
	 */
	num: APIPostCreatorNum;
	/**
	 * Total amount of posts the creator has. For some reason this is not in the nums object for creators
	 */
	total_posts: number;
}

/**
 * Alias for {@link APIPostCreator}
 */
export type APIPostAuthor = APIPostCreator;

/**
 * Num object for Post Creator.\
 * total_posts is in the creator object for some reason
 */
export type APIPostCreatorNum = Pick<APIUserNums, "subscribers" | "subscriptions">;

/**
 * Numbers attatched to a post
 */
export interface APIPostNums {
	/**
	 * The amount of smiles the post has
	 */
	smiles: number;
	/**
	 * The amount of unsmiles the post has
	 */
	unsmiles: number;
	/**
	 * How many smiles came from users visiting the creators profile
	 */
	guest_smiles: number;
	/**
	 * How many comments are on the post
	 */
	comments: number;
	/**
	 * How many views the post has
	 */
	views: number;
	/**
	 * How many republishes the post has
	 */
	republished: number;
	/**
	 * How many shares the post has
	 */
	shares: number;
}

/**
 * Copyright data for a post.
 */
export interface APIPostCopyright {
	/**
	 * Note about the copyright
	 */
	note?: string;
	/**
	 * URL of original source
	 */
	url?: string;
}

/**
 * The Thumbnail object returned from the API\
 * @example
 * ```ts
 * APIPostThumbnail.url = `https://imageproxy.ifunny.co/${params}/images/${content_id}.jpg`
 * APIPostThumbnail.webp_url = `https://imageproxy.ifunny.co/${params}/images/${content_id}.webp
 * ```
 * Content URL params:\
 * `crop:x-{number}` crops `number` pixels from bottom of the image\
 * `crop:x+{number}` leaves `number` pixels at the top, and crops the rest\
 * `crop:square` makes the image a square aspect ratio\
 * `resize:{number}` changes the size of the image\
 * `quality:{number}` changes the image quality
 *
 *
 * ? Bottom iFunny watermarks are 20 pixels tall\
 * ? `crop:x-20` crops the watermark from an image
 */
export interface APIPostThumbnail {
	/**
	 * crop:x-20,crop:square,resize:65x,quality:90x75\
	 * `jpg`
	 */
	small_url: string;
	/**
	 * crop:x-20,crop:square,resize:160x,quality:90x75\
	 * `jpg`
	 */
	url: string;
	/**
	 * crop:x-20,crop:square,resize:320x,quality:90x75\
	 * `jpg`
	 */
	large_url: string;
	/**
	 * crop:x-20,resize:640x,quality:90x75\
	 * `jpg`
	 */
	x640_url: string;
	/**
	 * crop:x-20,resize:640x,quality:90x75
	 */
	webp_url: string;
	/**
	 * crop:x-20,crop:square,resize:320x,quality:90
	 */
	large_webp_url: string;
	/**
	 * crop:x-20,resize:640x,quality:90
	 */
	x640_webp_url: string;
	/**
	 * crop:x-20,resize:320x,crop:x800,quality:90x75
	 */
	proportional_url: string;
	/**
	 * crop:x-20,resize:320x,crop:x800,quality:90
	 */
	proportional_webp_url: string;
	/**
	 * The proportional size of the image
	 */
	proportional_size: Size;
}

// Specific post objects

export interface APIPicturePost extends APIPostBase<"pic"> {
	pic: {
		/**
		 * webp format url of the post
		 */
		webp_url: string;
	};
}

/**
 * A video post object
 */
export interface APIVideoPost extends APIPostBase<"video_clip"> {
	video_clip: APIPostVideoData;
}

/**
 * A gif post
 */
export interface APIGifPost extends APIPostBase<"gif"> {
	gif: APIPostGifData;
}

/**
 * A gif caption post
 */
export interface APIGifCaptionPost extends APIPostBase<"gif_caption"> {
	gif: APIPostGifCaptionData;
}

export interface APICaptionPost extends APIPostBase<"caption"> {
	caption: APIPostCaptionData;
}

// TODO: Add data types
export interface APIVinePost extends APIPostBase<"vine"> {
	screen_url: string;
	bytes: number;
}

export interface APIComicsPost extends APIPostBase<"comics"> {
	comics: {
		webp_url: string;
	};
}

export interface APIMemePost extends APIPostBase<"mem"> {
	mem: {
		webp_url: string;
	};
}

// * Data objects

export interface APIPostVideoData {
	screen_url: string;
	bytes: number;
	source_type: APIVideoPostSourceType;
	/**
	 * In seconds
	 */
	duration: number;
}

// TODO: Find more VIDEO_SOURCE_TYPES
export enum VIDEO_SOURCE_TYPES {
	USER = "user",
}

export type APIVideoPostSourceType = `${VIDEO_SOURCE_TYPES}`;

export type APIPostGifCaptionData = APIPostGifData & APIPostCaptionData;

export interface APIPostCaptionData {
	/**
	 * The caption of the post
	 */
	caption: string;
}

export interface APIPostGifData {
	/**
	 * JPEG url of the post
	 */
	screen_url: string;
	/**
	 * How many bytes the post is
	 */
	bytes: number;
	/**
	 * Url of the post in MP4 format
	 */
	mp4_url: string;
	/**
	 * How many bytes the mp4 version is
	 */
	mp4_bytes: number;
}

/**
 * All possible Post Objects
 */
export type APIPost =
	| APIPicturePost
	| APIVideoPost
	| APIGifPost
	| APIGifCaptionPost
	| APICaptionPost
	| APIVinePost
	| APIComicsPost
	| APIMemePost;
