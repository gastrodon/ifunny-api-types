import { EpochSec } from "../utils";
import { APIBanReason } from "./ban";
import Base from "./base";
import { APIContent } from "./content";

export interface APIStrike extends Base {
	ban_reason: APIBanReason;
	created_at: EpochSec;
	expired_at: EpochSec;
	related_content?: APIContent;
	was_shown: boolean;
	is_active: boolean;
	ban_days: number;
	is_appealed: boolean;
}
