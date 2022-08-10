import { APIUser, APIUserNums } from "./user";
import { HexCode, Size, Timestamp } from "../utils/util";

// * Enum types

/**
 * Content visibility types
 */
export enum CONTENT_VISIBILITY {
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

export type APIContentVisibility = `${CONTENT_VISIBILITY}`;

/**
 * Content shot status types
 */
export enum SHOT_STATUS {
	/**
	 * The content was approved for upload and comment attachments are enabled
	 */
	APPROVED = "approved",
	/**
	 * The content was deleted by the automoderation system
	 */
	HARD_SHOT = "hardShot",
	/**
	 * Post was approved for upload, but can't be used in comments
	 */
	SHOT = "shot",
}

/**
 * Possible shot statuses
 */
export type APIContentShotStatus = `${SHOT_STATUS}`;

/**
 * All currently known post types
 */
export enum CONTENT_TYPE {
	// ? Videos
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
	 * A Gif post\
	 * Data key: `gif`
	 */
	GIF = "gif",
	/**
	 * A Gif post with a custom caption\
	 * Data key: `gif`
	 */
	GIF_CAPTION = "gif_caption",
	// ? Images
	/**
	 * An image meme with a custom caption\
	 * Data key: `caption`
	 */
	CAPTION = "caption",
	/**
	 * An image meme\
	 * Data key: `pic`
	 */
	PIC = "pic",
	/**
	 * Image uploaded from iFunny's old "Meme" creator.\
	 * Data key: `mem`
	 */
	MEME = "mem",
	/**
	 * Image uploaded from iFunny's old "Comic" creator.\
	 * Data key: `comics`
	 */
	COMICS = "comics",
	// ? Special / Unknown
	/**
	 * An interactive post from iFunny
	 * Data key: `app` (Unknown due to deprecation)
	 * @deprecated These posts have been removed from the database and will not be available
	 */
	APP = "app",
	/**
	 * Unknown post type\
	 * Data key: `old` (Unknown due to deprecation)\
	 * TODO: Document what CONTENT_TYPE.OLD is
	 */
	OLD = "old",
	/**
	 * Unknown post type\
	 * Data key: `dem` (Unknown due to deprecation)\
	 * TODO: Document what CONTENT_TYPE.DEM is
	 */
	DEM = "dem",
}

/**
 * Possible content types
 */
export type APIContentType = `${CONTENT_TYPE}`;

// TODO: Discover more post states
export enum CONTENT_STATE {
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
export type APIContentState = `${CONTENT_STATE}`;

// * Sub objects

/**
 * Author of a Post\
 * Only includes info also in the user object
 */
export type APIContentCreatorBase = Pick<
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
export interface APIContentCreator extends APIContentCreatorBase {
	/**
	 * Only includes subscription and subscriber count
	 */
	num: APIContentCreatorNum;
	/**
	 * Total amount of posts the creator has. For some reason this is not in the nums object for creators
	 */
	total_posts: number;
}

/**
 * Alias for {@link APIContentCreator}
 */
export type APIContentAuthor = APIContentCreator;

/**
 * Num object for Post Creator.\
 * total_posts is in the creator object for some reason
 */
export type APIContentCreatorNum = Pick<APIUserNums, "subscribers" | "subscriptions">;

/**
 * Numbers attatched to a post
 */
export interface APIContentNums {
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
export interface APIContentCopyright {
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
 * APIContentThumbnail.url = `https://imageproxy.ifunny.co/${params}/images/${content_id}.jpg`
 * APIContentThumbnail.webp_url = `https://imageproxy.ifunny.co/${params}/images/${content_id}.webp
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
export interface APIContentThumbnail {
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

// ? For internal use
interface WebP {
	/**
	 * webp format url of the post
	 */
	webp_url: string;
}

// * Specific post objects

// TODO: Find more VIDEO_SOURCE_TYPES
export enum VIDEO_SOURCE {
	USER = "user",
	INSTAGRAM = "instagram",
}

export type APIVideoSourceType = `${VIDEO_SOURCE}`;

// * Data objects

// ? Videos
export interface APICoubContentData {
	/**
	 * WebP thumbnail of the Coub
	 */
	screen_url: string;
	bytes: number;
	/**
	 * Original Coub source
	 */
	traceback_url: string;
	/**
	 * Length in seconds
	 */
	duration: number;
}

export interface APIVideoContentData {
	/**
	 * Url of original video
	 */
	url: string;
	/**
	 * Length in seconds
	 */
	duration: number;
	/**
	 * Length in seconds
	 */
	length: number;
}

export interface APIVideoClipContentData {
	/**
	 * JPEG image of the video clip
	 */
	screen_url: string;
	bytes: number;
	source_type: APIVideoSourceType;
	/**
	 * Logo url to the source if not 'user'
	 */
	logo_url?: string;
	/**
	 * In seconds
	 */
	duration: Timestamp;
}

export interface APIVineContentData {
	screen_url: string;
	bytes: number;
}

// ? Pictures
export interface APICaptionContentData {
	/**
	 * The caption of the post
	 */
	caption_text: string;
}
export type APIComicsContentData = WebP;
export type APIMemeContentData = WebP;
export type APIPicContentData = WebP;

// ? Gifs
export interface APIGifContentData {
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
export type APIGifCaptionContentData = APIGifContentData & APICaptionContentData;

// ? Special/Unknown
export interface UnknownContentData extends JSON {}

// * Content objects
/**
 * JSON data of an iFunny Post
 */
export interface APIContentBase {
	/**
	 * Unique id of the post.\
	 * Typically 9 characters long
	 */
	id: string;
	/**
	 * The type of the post.
	 */
	type: APIContentType;
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
	state: APIContentState;
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
	 * The {@link APIContentThumbnail thumbnail} of the post
	 */
	thumb: APIContentThumbnail;
	/**
	 * A post's {@link APIContentCopyright copyright} data
	 */
	copyright: APIContentCopyright;
	/**
	 * The {@link APIContentNums numbers} on the post.
	 */
	num: APIContentNums;
	/**
	 * The author of the post
	 */
	creator?: APIContentCreator;
	/**
	 * Size of the post
	 */
	size: Size;
	/**
	 * Url of the original source
	 */
	traceback_url?: string;
	/**
	 * The post's visibility
	 */
	visibility: APIContentVisibility;
	/**
	 * TODO: shot_status description
	 */
	shot_status: APIContentShotStatus;
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
	 * Text generated from iFunny's OCR
	 */
	ocr_text?: string;
	/**
	 * Can the post be boosted still
	 */
	can_be_boosted: boolean;
	/**
	 * The source of the post if it's a republish
	 */
	source?: APIContentSource;
}

// ? Videos
export interface APICoubContent extends APIContentBase {
	type: CONTENT_TYPE.COUB;
	coub: APICoubContentData;
}
export interface APIVideoClipContent extends APIContentBase {
	type: CONTENT_TYPE.VIDEO_CLIP;
	video_clip: APIVideoClipContentData;
}
export interface APIVideoContent extends APIContentBase {
	type: CONTENT_TYPE.VIDEO;
	video: APIVideoContentData;
}
export interface APIVineContent extends APIContentBase {
	type: CONTENT_TYPE.VINE;
	vine: APIVineContentData;
}

// ? Pictures
export interface APICaptionContent extends APIContentBase {
	type: CONTENT_TYPE.CAPTION;
	caption: APICaptionContentData;
}
export interface APIComicsContent extends APIContentBase {
	type: CONTENT_TYPE.COMICS;
	comics: APIComicsContentData;
}
export interface APIMemeContent extends APIContentBase {
	type: CONTENT_TYPE.MEME;
	meme: APIMemeContentData;
}
export interface APIPicContent extends APIContentBase {
	type: CONTENT_TYPE.PIC;
	pic: APIPicContentData;
}

// ? Gifs
export interface APIGifContent extends APIContentBase {
	type: CONTENT_TYPE.GIF;
	gif: APIGifContentData;
}
export interface APIGifCaptionContent extends APIContentBase {
	type: CONTENT_TYPE.GIF_CAPTION;
	gif: APIGifCaptionContentData;
}

// ? Special/Unknown
export interface APIUnknownContent extends APIContentBase {
	type: CONTENT_TYPE.APP | CONTENT_TYPE.OLD | CONTENT_TYPE.DEM;
}

/**
 * The original source of the content
 */
export type APIContentSource = Partial<APIContent> &
	Pick<APIContent, "id" | "date_create">;

/**
 * Any possible content type
 */
export type APIContent =
	| APIContentVideo
	| APIContentPic
	| APIContentGif
	| APIContentSpecial;

/**
 * All video/mp4 content types
 */
export type APIContentVideo =
	| APICoubContent
	| APIVideoClipContent
	| APIVideoContent
	| APIVineContent;

/**
 * All picture/jpg content types
 */
export type APIContentPic =
	| APICaptionContent
	| APIPicContent
	| APIComicsContent
	| APIMemeContent;

/**
 * All Gif content types
 */
export type APIContentGif = APIGifContent | APIGifCaptionContent;

/**
 * All currently undocumented content types. Once documented, these may move into the appropriate content types above.\
 * ? Currently: 'dem', 'old', 'app'
 */
export type APIContentSpecial = APIUnknownContent;
