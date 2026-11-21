import React from 'react';
import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {BusinessTypes} from './scenes/BusinessTypes';
import {Cta} from './scenes/Cta';
import {Dashboard} from './scenes/Dashboard';
import {Flow} from './scenes/Flow';
import {Hook} from './scenes/Hook';
import {Mismatch} from './scenes/Mismatch';
import {Reveal} from './scenes/Reveal';
import {Trust} from './scenes/Trust';

// Total = jumlah durasi adegan - 7 transisi x 12 frame.
// 105+105+105+180+135+120+120+150 = 1020; 1020 - 84 = 936 frame (31,2 detik @30fps).
export const PROMO_DURATION = 936;

export const PrasaraPromo: React.FC = () => (
	<TransitionSeries>
		<TransitionSeries.Sequence name="1 Masalah" durationInFrames={105}>
			<Hook />
		</TransitionSeries.Sequence>
		<TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
		<TransitionSeries.Sequence name="2 Selisih kas" durationInFrames={105}>
			<Mismatch />
		</TransitionSeries.Sequence>
		<TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
		<TransitionSeries.Sequence name="3 Perkenalan" durationInFrames={105}>
			<Reveal />
		</TransitionSeries.Sequence>
		<TransitionSeries.Transition presentation={slide({direction: 'from-bottom'})} timing={linearTiming({durationInFrames: 12})} />
		<TransitionSeries.Sequence name="4 Dashboard" durationInFrames={180}>
			<Dashboard />
		</TransitionSeries.Sequence>
		<TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={linearTiming({durationInFrames: 12})} />
		<TransitionSeries.Sequence name="5 Alur otomatis" durationInFrames={135}>
			<Flow />
		</TransitionSeries.Sequence>
		<TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={linearTiming({durationInFrames: 12})} />
		<TransitionSeries.Sequence name="6 Jenis bisnis" durationInFrames={120}>
			<BusinessTypes />
		</TransitionSeries.Sequence>
		<TransitionSeries.Transition presentation={slide({direction: 'from-right'})} timing={linearTiming({durationInFrames: 12})} />
		<TransitionSeries.Sequence name="7 Kepercayaan" durationInFrames={120}>
			<Trust />
		</TransitionSeries.Sequence>
		<TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
		<TransitionSeries.Sequence name="8 Ajakan" durationInFrames={150}>
			<Cta />
		</TransitionSeries.Sequence>
	</TransitionSeries>
);
