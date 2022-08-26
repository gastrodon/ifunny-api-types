export class Endpoints {
	static readonly base = "api.ifunny.mobi";
	static readonly account = "/account";
	static readonly collective = "/feeds/collective";
	static readonly counters = "/counters";
	static readonly featured = "/feeds/featured";
	static readonly feeds = "/feeds";
	static readonly oauth2 = "/oauth2";
	static readonly projectElements = "/feeds/project_elements";
	static readonly subscriptionFeed = "/timelines/home";
	static readonly timelines = "/timelines";
	static readonly token = "/oauth2/token";

	static readonly myComments = "users/my/comments";
	static readonly chatInvites = "users/my/chat_invitations";
	static readonly mySmiles = "/users/my/content_smiles";
	static readonly myAppeals = "users/my/appeals";
	static readonly unreadChatMessages = "users/my/unread_chat_messages";
	static readonly myNews = "news/my";

	/**
	 * @example
	 * "/timelines/users/:userId"
	 * "/timelines/users/by_nick/:userNick"
	 */
	static userTimeline(query: string, byNick: boolean = false): string {
		return this.timelines + this.user(query, byNick);
	}

	/**
	 * @param query The user id or nick
	 * @param byNick Whether to search by nick (Default: false)
	 * @example
	 * "/users"
	 * "/users/:userId"
	 * "/users/by_nick/:userNick"
	 */
	static user(query?: string, byNick: boolean = false): string {
		let users = "/users";
		if (!query) return users;
		return users + (byNick ? `/by_nick/${query}` : `/query`);
	}

	/**
	 * @param user The user id or nick
	 * @param byNick Whether the user is by nick (Default: false)
	 * @example
	 * "/users/:userId/guests"
	 * "/users/by_nick/:userNick/guests"
	 */
	static guests(user: string, byNick: boolean = false): string {
		return this.user(user, byNick) + "/guests";
	}

	/**
	 * @param user The user id or nick
	 * @param byNick Whether the user is by nick (Default: false)
	 * @example
	 * "/users/:userId/blocked"
	 * "/users/by_nick/:userNick/blocked"
	 */
	static blocked(user: string, byNick: boolean = false): string {
		return this.user(user, byNick) + "/blocked";
	}

	/**
	 * @param user The user id or nick
	 * @param byNick Whether the user is by nick (Default: false)
	 * @example
	 * "/users/:userId/subscribers"
	 * "/users/by_nick/:userNick/subscribers"
	 */
	static subscribers(user: string, byNick: boolean = false): string {
		return this.user(user, byNick) + "/subscribers";
	}

	/**
	 * @param user The user id or nick
	 * @param byNick Whether the user is by nick (Default: false)
	 * @example
	 * "/users/:userId/subscriptions"
	 */
	static subscriptions(user: string, byNick: boolean = false): string {
		return this.user(user, byNick) + "/subscriptions";
	}

	/**
	 * @example
	 * "/content"
	 * "/content/:contentId"
	 */
	static content(id?: string): string {
		return "/content" + (id ? `/${id}` : "");
	}

	/**
	 * @param contentId The content id or array of content ids if adding to reads
	 * @example
	 * "/content/:contentId/smiles"
	 */
	static smiles(contentId: string): string {
		return this.content(contentId) + "/smiles";
	}

	/**
	 * @param contentId The content id
	 * @example
	 * "/content/:contentId/republished"
	 */
	static republishes(id: string): string {
		return this.content(id) + "/republished";
	}

	/**
	 * @example
	 * "/content/:contentId/comments"
	 */
	static comments(contentId: string): string {
		return this.content(contentId) + "/comments";
	}

	/**
	 * @param contentId The content id
	 * @param commentId The comment id
	 * @example
	 * "/content/:contentId/comments/:commentId/replies"
	 */
	static replies(contentId: string, commentId: string): string {
		return this.comments(contentId) + `/${commentId}/replies`;
	}

	/**
	 * @param contentId The content id
	 * @example
	 * "/content/:contentId/comments/attached_content"
	 */
	static commentAttachment(contentId: string): string {
		return this.comments(contentId) + "/attached_content";
	}

	/**
	 * @param contentId The content id or array of content ids if adding to reads
	 * @example
	 * "/reads"
	 * "/reads/:contentId"
	 * "/reads/:contentId1,contentId2..."
	 */
	static reads(contentId?: string | string[]): string {
		if (Array.isArray(contentId)) {
			contentId = contentId.join(",");
		}
		return "/reads" + (contentId ? `/${contentId}` : "");
	}

	/**
	 * @param userId The id of the user the ban belongs to
	 * @param banId The id of the Ban
	 * @example
	 * "/users/:userId/bans"
	 * "/users/:userId/bans/:banId"
	 */
	static bans(userId: string, banId?: string) {
		return `/users/${userId}/bans` + (banId ? `/${banId}` : "");
	}
}
