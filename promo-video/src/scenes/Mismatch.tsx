import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {Appear} from '../ui/Appear';
import {Background, Kicker, rupiah, SampleBadge} from '../ui/Background';
import {C, SAFE_X} from '../theme';

// Adegan 2: catatan dan uang di laci tidak cocok (contoh dari situs).
const count = (frame: number, start: number, to: number) =>
	interpolate(frame, [start, start + 25], [0, to], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.cubic),
	});

const Box: React.FC<{label: string; value: string}> = ({label, value}) => (
	<div
		style={{
			background: C.surface,
			border: `2px solid ${C.line}`,
			borderRadius: 28,
			padding: '44px 52px',
		}}
	>
		<div style={{fontSize: 44, color: C.muted, fontWeight: 600}}>{label}</div>
		<div style={{fontSize: 104, fontWeight: 800, letterSpacing: -2, marginTop: 6, fontVariantNumeric: 'tabular-nums'}}>
			{value}
		</div>
	</div>
);

export const Mismatch: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Background glowY={50}>
			<div
				style={{
					position: 'absolute',
					left: SAFE_X,
					right: SAFE_X,
					top: 120,
					bottom: 120,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					gap: 34,
				}}
			>
				<Appear delay={0}>
					<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<Kicker>Akhir hari</Kicker>
						<SampleBadge label="Ilustrasi" />
					</div>
				</Appear>
				<Appear delay={4}>
					<Box label="Catatan" value={rupiah(count(frame, 6, 4250000))} />
				</Appear>
				<Appear delay={14} scaleFrom={0.4}>
					<div style={{textAlign: 'center', fontSize: 120, fontWeight: 800, color: C.gold, lineHeight: 1}}>≠</div>
				</Appear>
				<Appear delay={20}>
					<Box label="Uang di laci" value={rupiah(count(frame, 22, 3980000))} />
				</Appear>
				<Appear delay={52} scaleFrom={0.85}>
					<div
						style={{
							marginTop: 30,
							background: C.badSoft,
							border: `2px solid ${C.bad}77`,
							borderRadius: 28,
							padding: '40px 48px',
							fontSize: 66,
							fontWeight: 800,
							lineHeight: 1.15,
							color: C.bad,
						}}
					>
						Selisih Rp270.000.
						<div style={{color: C.fg, fontWeight: 700}}>Dari mana?</div>
					</div>
				</Appear>
			</div>
		</Background>
	);
};
