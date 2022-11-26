export interface APIAppSettings {
	experiments: APISettingsExperiment[];
	features: APISettingsFeature[];
	group: number;
}

export interface APISettingsFeature {
	id: string;
	enabled: boolean;
	variant?: APISettingsFeatureVariant;
}

export interface APISettingsFeatureVariant {
	max_events_array_size?: string;
	queue_size_fetch_count?: string;
	max_fetch_threads_count?: string;
	core_fetch_threads_count?: string;
	skip_before_remove?: string;
	instant?: boolean;
	delay_time_m?: string;
	value?: string;
	offscreen_page_limit?: string;
	max_fetch_count?: string;
	max_prefetch_count?: string;
	max_operation_time_mls?: string;
	radius?: string;
	rate?: number | string;
	disable_timeout?: string;
	freq?: string;
	retry_time_array_milliseconds?: string;
	poster_pool_size?: string;
	native_ad_pool_size?: string;
	video_pool_size_each?: string;
	warm_up_pool?: string;
	vast_url_params?: string;
	fc_config_id?: string;
	account_id?: string;
	player_height?: string;
	config_id?: string;
	max_key_length?: string;
	vast_default_url?: string;
	vast_url_enabled?: string;
	bid_lifetime?: string;
	player_width?: string;
	activated?: string;
	max_weight?: string;
	max_poor_connection_weight?: string;
	video_preload_size?: string;
	max_cache_size?: string;
	image_weight?: string;
	video_weight?: string;
	rounding?: string;
	min_drop_to_track?: string;
	price_mapping?: string;
	slot_id?: string;
	app_id?: string;
	type?: string;
	period?: string;
	views_before_nps?: string;
	dispatch_interval?: string;
	videoCost?: string;
	goodNetMaxCost?: string;
	imageCost?: string;
	badNetMaxCost?: string;
	android_limit?: string;
	ios_limit?: string;
	hide_comments_threshold?: string;
	max_memes?: string;
	timeout?: string;
	bitmap_pool_screens?: string;
	max_size_multiplier?: string;
	snapshot_create_interval_in_sec?: string;
	max_memory_events_array_size?: string;
	second_look?: string;
	first_look?: string;
	for_secs?: number;
	timeout_ms?: string;
	max_events?: string;
	max_video_edit_duration_ms?: string;
	max_video_aspect_ratio?: string;
	max_video_trim_duration_ms?: string;
	min_video_aspect_ratio?: string;
	min_video_trim_duration_ms?: string;
	min_pic_height?: string;
	min_video_height?: string;
	max_pic_width?: string;
	max_gif_duration_sec?: string;
	max_gif_height?: string;
	min_gif_height?: string;
	min_video_width?: string;
	min_gif_width?: string;
	max_gif_width?: string;
	max_video_size_mb?: string;
	max_gif_size_mb?: string;
	min_pic_width?: string;
	max_pic_height?: string;
	location_send_time_interval_seconds?: string;
	start_delay?: string;
	time_ms?: string;
	fake_key?: string;
	load_balance?: string;
	coub_source_name_android?: string;
	coub_source_name?: string;
	compress_level?: string;
	mopub_load_id?: string;
	slot_id_fl?: string;
	antispam_in_group?: string;
	antispam_in_one_on_one?: string;
	hours?: string;
	coin_denomination?: string;
	threads_timeout_sec?: string;
	scheduled_thread_pool_size_multiplier?: string;
	allow_threads_max_size?: string;
	thread_pool_max_size?: string;
	period_sec?: string;
	allow_threads_core_timeout?: string;
	publisher_id?: string;
	adspace_id?: string;
	video_clip_source_list_android?: string;
	video_clip_source_list?: string;
	max_length_milliseconds?: string;
	max_size_bytes?: string;
	clear_video_cache?: string;
	clear_url_cache?: string;
	adspace_id_fl?: string;
	min_buffering_frames?: string;
	buffering_timeout?: string;
	new_user_default_value?: string;
	threshold?: string;
	mod?: string;
	prefech_version?: string;
	config_id_fl?: string;
	content_in_digest_count?: string;
	antispam?: string;
	media_upload?: string;
	bitrate_low?: string;
	bitrate_high?: string;
	max_size_mb?: string;
	push_notifications?: string;
	max_members?: string;
	user_share_limit?: string;
	user_invite_limit?: string;
	in_app_invites?: string;
	file_messages?: string;
	placement_id?: string;
	seller_id?: string;
	soft_shot?: string;
	treshold?: string;
	should_moderate?: string;
	timer?: string;
	enable_constraints?: string;
	maxSize?: string;
	buffering_size?: string;
	track_impression_time_interval?: string;
	insertion_count?: string;
	fetch_count?: string;
	prefetch_count?: string;
	max_poor_connection_weight_sum?: string;
	load_in_memory?: string;
	max_weight_sum?: string;
	bool2?: string;
	string1?: string;
	string2?: string;
	integer1?: string;
	float?: string;
	integer2?: string;
	users_enabled?: string;
	categories_enabled?: string;
	memes_enabled?: string;
	comments_enabled?: string;
	years_enabled?: string;
	search_enabled?: string;
	channels_enabled?: string;
	tags_enabled?: string;
	best_enabled?: string;
	chats_enabled?: string;
	client_id?: string;
	fb_server_bidding_enabled?: string;
	timer_interval_ms?: string;
}

export interface APISettingsExperiment {
	id: string;
	enabled: boolean;
	variant: APISettingsExperimentVariant;
}

export interface APISettingsExperimentVariant {
	id: string;
	bitmap_pool_screens?: string;
	max_size_multiplier?: string;
	max_video_edit_duration_ms?: string;
	max_video_aspect_ratio?: string;
	max_video_trim_duration_ms?: string;
	min_video_aspect_ratio?: string;
	min_video_trim_duration_ms?: string;
	min_pic_height?: string;
	min_video_height?: string;
	max_pic_width?: string;
	max_gif_duration_sec?: string;
	max_gif_height?: string;
	min_gif_height?: string;
	min_video_width?: string;
	min_gif_width?: string;
	max_gif_width?: string;
	max_video_size_mb?: string;
	max_gif_size_mb?: string;
	min_pic_width?: string;
	max_pic_height?: string;
	buffering_size?: string;
	load_without_gaps?: string;
	next_requests_delay?: string;
	comments_request_count?: string;
	native_comments_mopub_id?: string;
	init_request_delay?: string;
	autoplay?: string;
	insertion_count?: string;
	instant?: boolean;
	native_mopub_id?: string;
	banner_mopub_id_1?: string;
	banner_mopub_id_2?: string;
	rotation_rate?: string;
	banner_mopub_id_fl?: string;
	bids_request_timeout?: string;
	rotation_rate_fl?: string;
	interstitial_bids_request_timeout?: string;
	retry_rate?: string;
	refresh_background_time?: string;
	waterfall_request_timeout?: string;
	creatives_request_timeout?: string;
	first_run_rate?: string;
	run_delay_days?: string;
	ranking_session_time?: string;
	adunit?: string;
	cache_url?: string;
	host_url?: string;
	name?: string;
	channel_id?: string;
	importance?: string;
	bid_floor?: string;
	max_sdk_key?: string;
	fixed?: string;
	interval?: string;
	skip_before_remove?: string;
	max_ad_unit?: string;
	max_enabled?: string;
	banner_waterfall?: string;
	native_waterfall?: string;
	native_comments_waterfall?: string;
	ad_network_domain?: string;
	api_sdk_key?: string;
	max_native_ad_unit?: string;
	price_floor_increment?: string;
	after_mediation?: string;
	config_id?: string;
}

export interface APIAppPrivacy {
	is_gdpr_zone: boolean;
	is_ccpa_zone: boolean;
	is_lgpd_zone: boolean;
	should_show_privacy_acceptance: boolean;
	should_show_gdpr_acceptance: boolean;
	should_show_ccpa_acceptance: boolean;
	is_accepted: boolean;
	is_privacy_accepted: boolean;
	is_ccpa_accepted: boolean;
	is_gdpr_accepted: boolean;
	is_lgpd_accepted: boolean;
}
