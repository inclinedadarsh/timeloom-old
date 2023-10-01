import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";

import { PROFILE, TIMELINE } from "@/constants";

const page = () => {
	return (
		<div className="container flex flex-col lg:flex-row gap-6">
			<div className="relative max-w-lg lg:max-w-none mx-auto lg:flex-1">
				<Profile
					profile={PROFILE}
					isSelf={false}
					className="py-12 sticky max-w-full top-0"
				/>
			</div>
			<Timeline
				className="max-w-3xl lg:max-w-none mx-auto lg:flex-2"
				timeline={TIMELINE}
			/>
		</div>
	);
};

export default page;
