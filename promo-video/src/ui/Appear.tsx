import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

// Muncul dengan fade + geser ke atas, mulai pada frame `delay`.
export const Appear: React.FC<{
	delay?: number;
	y?: number;
	x?: number;
	scaleFrom?: number;
	style?: React.CSSProperties;
	children: React.ReactNode;
}> = ({delay = 0, y = 50, x = 0, scaleFrom = 1, style, children}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const p = spring({frame: frame - delay, fps, config: {damping: 200}, durationInFrames: 22});
	return (
		<div
			style={{
				opacity: p,
				translate: `${(1 - p) * x}px ${(1 - p) * y}px`,
				scale: String(scaleFrom + (1 - scaleFrom) * p),
				...style,
			}}
		>
			{children}
		</div>
	);
};
