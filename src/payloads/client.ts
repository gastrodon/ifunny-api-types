import { APIUserBase } from "./user";

/**
 * The user data retrieved from `/account`
 */
export interface APIClientUser extends APIUserBase {
	/**
	 * Is the client blocked from using chats
	 */
	is_blocked_in_messenger: boolean;
	/**
	 * Is safe mode enabled
	 */
	safe_mode: boolean;
	/**
	 * Is the client a moderator of iFunny
	 */
	is_moderator: boolean;
	/**
	 * Is the client an iFunny staff member
	 */
	is_ifunny_team_member: boolean;
	/**
	 * Does the Client have unnotified bans
	 */
	have_unnotified_bans: boolean;
	/**
	 * Does the client have unnotified strikes
	 */
	have_unnotified_strikes: boolean;
	/**
	 * Does the client have unnotified achievements
	 */
	have_unnotified_achievements: boolean;
	/**
	 * Does the client have unnotified levels
	 */
	have_unnotified_levels: boolean;
	/**
	 * Does the client still need to set up their account
	 */
	need_account_setup: boolean;
	/**
	 * Hometown of the client. Can be an empty string
	 */
	hometown: string;
	/**
	 * Location of the client. Can be an empty string
	 */
	location: string;
	/**
	 * The Clinet's sex
	 */
	sex: APIClientUserSex;
	/**
	 * `YYYY-MM-DD`
	 */
	birth_date: string;
	/**
	 * The email attached to the Client's account
	 */
	email: string;
}

/**
 * All current genders (sex) for the Client
 */
export enum API_SEX {
	MALE = "male",
	FEMALE = "female",
	OTHER = "other",
}

/**
 * Possible sex types for the Client
 */
export type APIClientUserSex = `${API_SEX}`;

/**
 * Alias for {@link APIClientUserSex}
 */
export type APIClientUserGender = APIClientUserSex;
