import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Appear} from '../ui/Appear';
import {Background} from '../ui/Background';
import {C, SAFE_X} from '../theme';

// Adegan 1: catatan bisnis yang tersebar di mana-mana.
const Chip: React.FC<{
	text: string;
	x: number;
	y: number;
	rot: number;
	delay: number;
	tone?: 'plain' | 'chat' | 'warn';
}> = ({text, x, y, rot, delay, tone = 'plain'}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const p = spring({frame: frame - delay, fps, config: {damping: 11, mass: 0.7}});
	const bob = Math.sin((frame + delay * 7) / 14) * 8;
	const styles = {
		plain: {background: C.surface, border: `2px solid ${C.line}`, color: C.fg},
		chat: {background: '#123126', border: `2px solid ${C.greenMid}66`, color: C.greenLight},
		warn: {background: C.goldSoft, border: `2px solid ${C.gold}88`, color: C.goldFg},
	}[tone];
	return (
		<div
			style={{
				position: 'absolute',
				left: x,
				top: y,
				opacity: Math.min(1, p),
				scale: String(p),
				rotate: `${rot}deg`,
				translate: `0 ${bob}px`,
				padding: '24px 34px',
				borderRadius: tone === 'chat' ? '30px 30px 30px 6px' : 20,
				fontSize: 44,
				fontWeight: 600,
				whiteSpace: 'nowrap',
				boxShadow: '0 20px 50px rgba(0,0,0,.45)',
				...styles,
			}}
		>
			{text}
		</div>
	);
};

export const Hook: React.FC = () => {
	const frame = useCurrentFrame();
	const shake = interpolate(frame, [70, 100], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	return (
		<Background glowY={20}>
			<div style={{position: 'absolute', left: SAFE_X, right: SAFE_X, top: 200}}>
				<Appear delay={0}>
					<div style={{fontSize: 92, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2}}>
						Bisnis bertumbuh,
					</div>
				</Appear>
				<Appear delay={8}>
					<div
						style={{
							fontSize: 92,
							fontWeight: 800,
							lineHeight: 1.05,
							letterSpacing: -2,
							color: C.green,
							fontStyle: 'italic',
							marginTop: 10,
						}}
					>
						tapi cara mengelolanya masih sama?
					</div>
				</Appear>
			</div>
			<div style={{position: 'absolute', inset: 0, translate: `${Math.sin(frame * 2.2) * 4 * shake}px 0`}}>
				<Chip text="Buku catatan" x={110} y={760} rot={-6} delay={14} />
				<Chip text="Nota di laci" x={600} y={850} rot={5} delay={20} />
				<Chip text="No. HP Pak Dedi berapa?" x={150} y={1010} rot={3} delay={26} tone="chat" />
				<Chip text="Spreadsheet" x={640} y={1180} rot={-4} delay={32} />
				<Chip text="Siapa yang masih kasbon?" x={100} y={1330} rot={-3} delay={38} tone="chat" />
				<Chip text="File terpisah" x={160} y={1520} rot={6} delay={44} />
				<Chip text="Lupa dicatat" x={600} y={1560} rot={-7} delay={50} tone="warn" />
			</div>
		</Background>
	);
};
