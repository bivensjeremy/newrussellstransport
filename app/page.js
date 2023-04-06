import DriveForUs from './components/DriveForUs'
import GetInTouch from './components/GetInTouch'
import Passionate from './components/Passionate'
import Regions from './components/Regions'
import Services from './components/Services'
import Splash from './components/Splash'
import SplitSection from './components/SplitSection'
import Video from './components/Video'

export default function Home() {
	return (
		<div>
			<main>
				<Video />
				<Splash />
				<Regions />
				<SplitSection />
				
				<Services />
				<DriveForUs />
				<Passionate />
				<GetInTouch />
			</main>
		</div>
	)
}
