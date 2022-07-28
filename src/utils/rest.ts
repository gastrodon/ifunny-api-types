export interface RESTAPISuccessResponse<T extends unknown> {
	/**
	 * The data returned from the API
	 */
	data: T;
	/**
	 * Typically 200 on success
	 */
	status: number;
}

/**
 * Common data response
 */
export interface RESTAPIData<Item extends unknown> {
	/**
	 * Array of items returned from the API
	 */
	items: Item[];
	/**
	 * Pagination data returned from the API
	 */
	paging: RESTAPIPaging;
}

export interface RESTAPIPaging {
	cursors: RESTAPICursors;
	/**
	 * Is there a prev key in cursors
	 */
	hasPrev: boolean;
	/**
	 * Is there a next key in cursors
	 */
	hasNext: boolean;
}

export interface RESTAPICursors {
	/**
	 * The next value for pagination
	 */
	next?: string;
	/**
	 * The previous value for backwards pagination
	 */
	prev?: string;
}
