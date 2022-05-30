import { Timestamp } from "../utils/util";

/**
 * When the next feature set releases
 */
export interface APINextIssueTime {
	time_left: Timestamp;
	time: Timestamp;
}

/**
 * The API response for `/issues/next_issue_time`
 */
export interface RESTAPINextIssueTime {
	data: APINextIssueTime;
	status: 200;
}
