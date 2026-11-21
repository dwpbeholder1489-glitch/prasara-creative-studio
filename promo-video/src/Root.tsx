import {Composition, Folder} from 'remotion';
import {PrasaraPromo, PROMO_DURATION} from './PrasaraPromo';

export const RemotionRoot: React.FC = () => {
	return (
		<Folder name="PRASARA">
			<Composition
				id="PrasaraPromoVertical"
				component={PrasaraPromo}
				durationInFrames={PROMO_DURATION}
				fps={30}
				width={1080}
				height={1920}
			/>
		</Folder>
	);
};
