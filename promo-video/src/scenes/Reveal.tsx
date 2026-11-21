import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear} from '../ui/Appear';
import {Background, Kicker} from '../ui/Background';
import {Logo} from '../ui/Logo';
import {C, SAFE_X} from '../theme';

// Adegan 3: perkenalan PRASARA.
export const Reveal: React.FC = () => {
	const frame = useCurrentFrame();
	const spacing = interpolate(frame, [10, 40], [40, 4], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<Background glowY={38}>
			<div
				style={{
					position: 'absolute',
					left: SAFE_X,
					right: SAFE_X,
					top: 0,
					bottom: 0,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				}}
			>
				<Logo size={260} animate delay={0} />
				<Appear delay={12} y={20}>
					<div style={{fontSize: 140, fontWeight: 800, letterSpacing: spacing, marginTop: 30}}>PRASARA</div>
				</Appear>
				<Appear delay={22} y={20}>
					<div style={{marginTop: 10}}>
						<Kicker>Adaptive Business System</Kicker>
					</div>
				</Appear>
				<Appear delay={36}>
					<div style={{fontSize: 84, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5, marginTop: 110}}>
						Bisnis Lebih Teratur.
					</div>
				</Appear>
				<Appear delay={46}>
					<div
						style={{
							fontSize: 84,
							fontWeight: 800,
							lineHeight: 1.1,
							letterSpacing: -1.5,
							color: C.green,
							fontStyle: 'italic',
							marginTop: 8,
						}}
					>
						Keputusan Lebih Terarah.
					</div>
				</Appear>
			</div>
		</Background>
	);
};
