import { RESTAPIItems } from "../utils/rest";
import { APIContent } from "../payloads/content";

import { RESTAPISuccessResponse } from "../utils";
import { APICounters } from "./counters";

/**
 * The feed returned from the API
 */
export interface APIFeed {
	content: RESTAPIItems<APIContent>;
}

/**
 * Response when fetching feed items
 */
export interface RESTAPIFeedResponse extends RESTAPISuccessResponse<APIFeed> {
	notifications: APICounters;
}
