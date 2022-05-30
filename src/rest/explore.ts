import { ValueOf } from "../utils/util";

export interface RESTAPIExploreTabBase {
	id: APIExploreTabID;
}

export const EXPLORE_TAB_IDS = {
	Best: 2,
	Memes: 3,
	Users: 4,
	Chats: 5,
	Channels: 6,
} as const;

export type APIExploreTabID = ValueOf<typeof EXPLORE_TAB_IDS>;
