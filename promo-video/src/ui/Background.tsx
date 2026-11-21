import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, fontFamily} from '../theme';

// Latar gelap bergaya situs: kisi halus + cahaya hijau yang bergerak pelan.
export const Background: React.FC<{glowY?: number; children: React.ReactNode}> = ({
	glowY = 30,
	children,
}) => {
	const frame = useCurrentFrame();
	const drift = interpolate(frame, [0, 300], [0, 60]);
	return (
		<AbsoluteFill style={{backgroundColor: C.bg, fontFamily, color: C.fg}}>
			<AbsoluteFill
				style={{
					backgroundImage: `linear-gradient(${C.line}55 1px, transparent 1px), linear-gradient(90deg, ${C.line}55 1px, transparent 1px)`,
					backgroundSize: '90px 90px',
					backgroundPosition: `0 ${drift}px`,
					maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)',
				}}
			/>
			<AbsoluteFill
				style={{
					background: `radial-gradient(circle at 50% ${glowY}%, rgba(61,214,140,.20), transparent 55%)`,
				}}
			/>
			{children}
		</AbsoluteFill>
	);
};

export const Kicker: React.FC<{children: React.ReactNode; color?: string}> = ({
	children,
	color = C.green,
}) => (
	<div
		style={{
			fontSize: 34,
			fontWeight: 700,
			letterSpacing: 6,
			textTransform: 'uppercase',
			color,
		}}
	>
		{children}
	</div>
);

export const SampleBadge: React.FC<{label?: string}> = ({label = 'Data contoh'}) => (
	<span
		style={{
			fontSize: 24,
			fontWeight: 700,
			letterSpacing: 3,
			textTransform: 'uppercase',
			color: C.goldFg,
			background: C.goldSoft,
			border: `2px solid ${C.gold}55`,
			padding: '8px 18px',
			borderRadius: 999,
		}}
	>
		{label}
	</span>
);

export const rupiah = (n: number) =>
	'Rp' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
