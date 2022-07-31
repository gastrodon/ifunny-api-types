/**
 * Possible report reasons
 */
enum REPORT_TYPE {
	/**
	 * Hate Speech
	 */
	HATE = "hate",
	/**
	 * Nudity
	 */
	NUDE = "nude",
	/**
	 * Bot spam / spamming
	 */
	SPAM = "spam",
	/**
	 * Scam or Fraud
	 */
	FRAUD = "fraud",
	/**
	 * Targeted Abuse
	 */
	TARGETED_ABUSE = "target",
	/**
	 * Threats of Harm
	 */
	THREATS = "harm",
	/**
	 * Violence or Gore
	 */
	VIOLENCE = "violence",
	/**
	 * Harassment
	 */
	HARASSMENT = "harassment",
	/**
	 * Suicide or Self-injury
	 */
	SUICIDE = "suicide",
	/**
	 * Illegal or regulated goods
	 */
	ILLEGAL = "illegal",
	/**
	 * Banner Issues
	 */
	BANNER = "banner",
}

/**
 * Where the post was viewed from
 */
enum VIEWED_FROM {
	PROFILE = "prof",
	FEATURES = "feat",
	COLLECTIVE = "coll",
}
