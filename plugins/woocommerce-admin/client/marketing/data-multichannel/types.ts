export type ApiFetchError = {
	code: string;
	data: {
		status: number;
	};
	message: string;
};

export type RegisteredChannel = {
	slug: string;
	is_setup_completed: boolean;
	settings_url: string;
	name: string;
	description: string;
	product_listings_status: string;
	errors_count: number;
	icon: string;
};

export type ChannelsState = {
	data?: Array< RegisteredChannel >;
	error?: ApiFetchError;
};

type Subcategory = {
	slug: string;
	name: string;
};

type Tag = {
	slug: string;
	name: string;
};

export type RecommendedChannel = {
	title: string;
	description: string;
	url: string;
	direct_install: boolean;
	icon: string;
	product: string;
	plugin: string;
	categories: Array< string >;
	subcategories: Array< Subcategory >;
	tags: Array< Tag >;
};

export type RecommendedChannelsState = {
	data?: Array< RecommendedChannel >;
	error?: ApiFetchError;
};

export type Campaign = {
	id: string;
	channel: string;
	title: string;
	manage_url: string;
	cost: {
		value: string;
		currency: string;
	};
};

export type CampaignsState = {
	data?: Array< Campaign >;
	error?: ApiFetchError;
};

export type State = {
	registeredChannels: ChannelsState;
	recommendedChannels: RecommendedChannelsState;
	campaigns: CampaignsState;
};