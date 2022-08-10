/**
 * Possible report reasons
 */
export enum REPORT_TYPE {
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
export enum VIEWED_FROM {
	CHANNEL = "channel",
	COLLECTIVE = "coll",
	FEATURES = "feat",
	MONOFEED = "monofeed",
	MY_SMILES = "my-smiles",
	PROFILE = "prof",
	SUBS = "subs",
	TAG = "tag",
}
