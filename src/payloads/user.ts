import { HexCode, Size, Timestamp } from "../utils/util";
import { APIBasePayload } from "./base";

export interface APIUser extends APIUserBase {
	/**
	 * Is the client subscribed to the user's notifications
	 */
	is_subscribed_to_updates: boolean;
	/**
	 * The user's profile photo
	 */
	photo?: APIProfilePhoto;
	/**
	 * Is the user blocked by the client
	 */
	is_blocked: false;
	/**
	 * Did the user block the client
	 */
	are_you_blocked: false;
	/**
	 * User's cover image url
	 * @example
	 * `https://img.ifunny.co/user_covers/${string}.webp`
	 */
	cover_url?: string;
	/**
	 * User's cover image background color {@link HexCode}
	 */
	cover_bg_color?: HexCode;
	/**
	 * Is the Client subscribed to the user
	 */
	is_in_subscriptions: boolean;
	/**
	 * Is the User subscribed to the Client
	 */
	is_in_subscribers: boolean;
	/**
	 * User's nick color\
	 * ? Default: 55FF00
	 */
	nick_color?: APINickColor;
	/**
	 * The User's linked social accounts\
	 * Twitter, Google, Facebook
	 */
	social?: APIUserSocial;
}

/**
 * API Base User Payload\
 * ? All required properties
 */
export interface APIUserBase extends APIBasePayload {
	/**
	 * The user's meme experience
	 */
	meme_experience: APIMemeExperience;
	/**
	 * The Chat privacy status of the user
	 */
	messaging_privacy_status: APIPrivacyStatus;
	/**
	 * Can the Client chat with the user
	 */
	is_available_for_chat: boolean;
	/**
	 * Is the  user's account private
	 */
	is_private: boolean;
	/**
	 * Seems to always be `"1010101010101010101010101010101010101010"`
	 */
	messenger_token: string; // TODO: Check if this is always the same
	/**
	 * Does the user have access to chats
	 */
	messenger_active: boolean;
	/**
	 * Array of APIBan objects.
	 */
	bans: APIBan[];
	/**
	 * User's inapp share url
	 * @example
	 * `https://ifunny.co/user/${APIUser["nick"]}`
	 */
	web_url: string;
	/**
	 * User's about bio\
	 * ? Can be an empty string
	 */
	about: string;
	/**
	 * User's unique id\
	 * ? Never changes
	 */
	id: string;
	/**
	 * User's unique username\
	 * ! UNSAFE FOR USER CACHING.
	 */
	nick: string;
	/**
	 * Is the user verified on iFunny
	 */
	is_verified: boolean;
	/**
	 * Is the user banned\
	 * ! UNSAFE TO CHECK FOR ACTIVE BANS
	 */
	is_banned: boolean;
	/**
	 * Is the user deleted from iFunny's servers\
	 * ? if true, many properties will be undefined
	 */
	is_deleted: boolean;
	/**
	 * User's profile stats
	 */
	num: APIUserNums;
	/**
	 * The user's rating\
	 * ! Deprecated by iFunny
	 */
	rating: APIUserRating;
	/**
	 * Original nick of the user\
	 * ? Should never change, but I'm not positive
	 */
	original_nick: string;
}

/**
 * `public` anyone can create a direct message the user\
 * `subscribers` only subscribers can create a direct message with the user\
 * `closed` only the user can create direct messages\
 * ? Backend does not check this status on requests as of 5/28/22
 */
export enum MESSAGING_PRIVACY_STATUS {
	PUBLIC = "public",
	SUBSCRIBERS = "subscribers",
	CLOSED = "closed",
}

export type APIPrivacyStatus = `${MESSAGING_PRIVACY_STATUS}`;

/**
 * A user's meme experience
 */
export interface APIMemeExperience {
	/**
	 * The amount of days the user has logged into iFunny
	 */
	days: number;
	/**
	 * The user's rank name
	 */
	rank: MemeRank;
	/**
	 * MemeRank badge png url
	 * @example
	 * `https://img.ifunny.co/meme_experience/${number}.png`
	 */
	badge_url: string;
	/**
	 * Pixel size of the badge
	 */
	badge_size: Size;
	/**
	 * Days needed to get to the meme rank
	 */
	next_milestone: number;
}

/**
 * All current MemeRanks from the API
 */
export enum RANKS {
	MEME_EXPLORER = "Meme explorer",
	MEME_BRO = "Meme bro",
	MEME_DADDY = "Meme daddy",
	DANK_MEMER = "Dank memer",
	MEME_MASTER_BAKER = "Meme master baker",
	DEEP_FRIED_MEMER = "Deep fried memer",
	SAUCY_MEMER = "Saucy memer",
	ORIGINAL_MEME_GANGSTER = "Original Meme Gangster",
	MEME_DEMON = "Meme demon",
	STEAL_BEAMS_OF_MEMES = "Steal beams of memes",
	MEME_DEALER = "Meme dealer",
	IFUNNY_VETERAN = "iFunny Veteran",
	/**
	 * Final MemeExperience rank
	 */
	CHEFS_MEME_AGENT = "Chef's meme agent",
}

export type MemeRank = `${RANKS}`;

// TODO: Discover more ban types
/**
 * Known ban types
 */
export enum BAN_TYPES {
	COLLECTIVE_SHADOW = "collective_shadow",
}

/**
 * ? Place holder for when more ban types are known
 */
export type APIBanType = `${BAN_TYPES}`;

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
	type: APIBanType;
}

export interface APIProfilePhoto {
	/**
	 * Profile Photo background color {@link HexCode}
	 */
	bg_color: HexCode;
	/**
	 * Profile photo thumbnail
	 */
	thumb: APIProfilePhotoThumbnail;
	/**
	 * Profile photo content url
	 */
	url: string;
}

/**
 * Profile photo thumbnail
 */
export interface APIProfilePhotoThumbnail {
	/**
	 * resize:400x,quality:90
	 */
	large_url: string;
	/**
	 * resize:200x quality:90
	 */
	medium_url: string;
	/**
	 * resize:100x quality:90
	 */
	small_url: string;
}

export interface APIUserNums {
	/**
	 * Amount of users the user is subscribed to
	 */
	subscriptions: number;
	/**
	 * Amount of subscribers the user has
	 */
	subscribers: number;
	/**
	 * Total amount of posts on the user's timeline
	 */
	total_posts: number;
	/**
	 * Amout of original (not republished) posts on the user's timeline
	 */
	created: number;
	/**
	 * Amount of featured posts the user has
	 */
	featured: number;
	/**
	 * Amount of smiles the user has from posts
	 */
	total_smiles: number;
	/**
	 * Amount of achievements the user has
	 */
	achievements: number;
}

/**
 * User's Rating\
 * ! Deprecated by iFunny
 */
export interface APIUserRating {
	points: number;
	current_level: APIUserRatingLevel;
	next_level: APIUserRatingLevel;
	/**
	 * Always the same values
	 */
	max_level: APIUserRatingLevelMax;
	is_show_level: boolean;
}

/**
 * A User Rating Level\
 * ! Deprecated by iFunny
 */
export interface APIUserRatingLevel {
	id: string;
	value: number;
	points: number;
}

export interface APIUserRatingLevelMax extends APIUserRatingLevel {
	id: "5d3f0152a88a50006d4b1d5c";
	value: 99;
	points: 297600;
}

// TODO: Find all nick colors.
/**
 * Known nick colors
 */
export enum NICK_COLORS {
	BRIGHT_GREEN = "55FF00",
	BETA_TESTER = BRIGHT_GREEN,
	MAROON = "660000",
	RED = "ff3e52",
	PURPLE = "a078f0",
	ORANGE = "e0b400",
}

/**
 * A user's nick color\
 * ? Nick colors are hex codes but these are the currently documented ones
 */
export type APINickColor = `${NICK_COLORS}`;

/**
 * A user's linked socials
 */
export interface APIUserSocial {
	ggl?: APIUserSocialGoogle;
	tw?: APIUserSocialTwitter;
}

export interface APIUserSocialGoogle {
	id: string;
	is_hidden: boolean;
	link: string;
}

export interface APIUserSocialTwitter {
	id: string;
	is_hidden: boolean;
	link: string;
}
