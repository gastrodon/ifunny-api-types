import { HexCode, Size } from "../utils/util";

import { APIBan } from "./ban";
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
	is_blocked: boolean;
	/**
	 * Did the user block the client
	 */
	are_you_blocked: boolean;
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
	messaging_privacy_status: APIUserMessagePrivacy;
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
	 * `https://ifunny.co/user/:nick`
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
export enum MESSAGE_PRIVACY {
	PUBLIC = "public",
	SUBSCRIBERS = "subscribers",
	CLOSED = "closed",
}

export type APIUserMessagePrivacy = `${MESSAGE_PRIVACY}`;

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
	rank: APIMemeRank;
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
 * All current Meme Ranks from the API
 */
export enum RANK {
	/**
	 * Days: `1-4`
	 */
	MEME_EXPLORER = "Meme explorer",
	/**
	 * Days: `5-24`
	 */
	MEME_BRO = "Meme bro",
	/**
	 * Days: `25-49`
	 */
	MEME_DADDY = "Meme daddy",
	/**
	 * Days: `50-99`
	 */
	DANK_MEMER = "Dank memer",
	/**
	 * Days: `100-199`
	 */
	MEME_MASTER_BAKER = "Meme master baker",
	/**
	 * Days: `200-299`
	 */
	DEEP_FRIED_MEMER = "Deep fried memer",
	/**
	 * Days: `300-499`
	 */
	SAUCY_MEMER = "Saucy memer",
	/**
	 * Days: `500-665`
	 */
	ORIGINAL_MEME_GANGSTER = "Original Meme Gangster",
	/**
	 * Days: `666-910`
	 */
	MEME_DEMON = "Meme demon",
	/**
	 * Days: `911-999`
	 */
	STEAL_BEAMS_OF_MEMES = "Steal beams of memes",
	/**
	 * Days: `1000-1499`
	 */
	MEME_DEALER = "Meme dealer",
	/**
	 * Days: `1500-1999`
	 */
	IFUNNY_VETERAN = "iFunny Veteran",
	/**
	 * Days: `2000+`
	 * * Final Meme Rank
	 * ? next_milestone is `3000` but rank does not change
	 */
	CHEFS_MEME_AGENT = "Chef's meme agent",
}

export type APIMemeRank = `${RANK}`;

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
export enum NICK_COLOR {
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
export type APINickColor = `${NICK_COLOR}`;

/**
 * A user's linked socials
 */
export interface APIUserAllSocials {
	/**
	 * Apple account linked to the user
	 */
	apple?: APIUserSocial;
	/**
	 * Facebook account linked to the user
	 */
	fb?: APIUserSocial;
	/**
	 * Google account linked to the user
	 */
	ggl?: APIUserSocial;
	/**
	 * Odnoklassniki account linked to the user (Russian social media)
	 */
	ok?: APIUserSocial;
	/**
	 * Twitter account linked to the user
	 */
	tw?: APIUserSocial;
	/**
	 * V Kontakte account linked to the user (Russian social media)
	 */
	vk?: APIUserSocial;
}

/**
 * A user's linked social
 */
export interface APIUserSocial {
	id: string;
	is_hidden: boolean;
	nick?: string;
	link: string;
}
