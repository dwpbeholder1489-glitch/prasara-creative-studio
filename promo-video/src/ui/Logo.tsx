import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

// Logomark PRASARA, disalin dari SVG di header situs.
// Jika `animate`, tiga bagiannya masuk bergantian.
export const Logo: React.FC<{size: number; animate?: boolean; delay?: number}> = ({
	size,
	animate = false,
	delay = 0,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const part = (i: number) =>
		animate
			? spring({frame: frame - delay - i * 5, fps, config: {damping: 14, mass: 0.6}})
			: 1;
	const [a, b, c] = [part(0), part(1), part(2)];
	return (
		<svg width={size} height={size} viewBox="0 0 48 48">
			<g transform="skewX(-14) translate(9 0)">
				<path
					d="M8 6h9v36H8z"
					fill="#3DD68C"
					style={{opacity: a, translate: `0 ${(1 - a) * -20}px`}}
				/>
				<path
					d="M19 6h11a12 12 0 0 1 0 24h-11v-8h11a4 4 0 0 0 0-8h-11z"
					fill="#A7F3CB"
					style={{opacity: b, translate: `${(1 - b) * 20}px 0`}}
				/>
				<path
					d="M8 34h9v8H8z"
					fill="#22A86A"
					style={{opacity: c, translate: `0 ${(1 - c) * 20}px`}}
				/>
			</g>
		</svg>
	);
};
