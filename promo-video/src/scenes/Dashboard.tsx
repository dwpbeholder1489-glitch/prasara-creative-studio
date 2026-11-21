import React from 'react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Appear} from '../ui/Appear';
import {Background, SampleBadge} from '../ui/Background';
import {Logo} from '../ui/Logo';
import {C, SAFE_X} from '../theme';

// Adegan 4: tiruan layar "Command Center" dengan data contoh dari situs.
const clampOut = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)} as const;

const Stat: React.FC<{label: string; value: string; delta: string; delay: number}> = ({label, value, delta, delay}) => (
	<Appear delay={delay} y={30}>
		<div style={{background: C.sunk, border: `2px solid ${C.line}`, borderRadius: 22, padding: '24px 22px'}}>
			<div style={{fontSize: 26, color: C.muted, fontWeight: 600}}>{label}</div>
			<div style={{fontSize: 44, fontWeight: 800, marginTop: 6, letterSpacing: -1, fontVariantNumeric: 'tabular-nums'}}>
				{value}
			</div>
			<div style={{fontSize: 26, color: C.green, fontWeight: 700, marginTop: 4}}>{delta}</div>
		</div>
	</Appear>
);

const Alert: React.FC<{text: string; delay: number}> = ({text, delay}) => (
	<Appear delay={delay} x={-40} y={0}>
		<div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 32, fontWeight: 600, padding: '14px 0'}}>
			<span style={{width: 16, height: 16, borderRadius: 999, background: C.gold, boxShadow: `0 0 16px ${C.gold}`}} />
			{text}
		</div>
	</Appear>
);

export const Dashboard: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const phone = spring({frame: frame - 6, fps, config: {damping: 200}, durationInFrames: 28});
	const rev = interpolate(frame, [24, 60], [0, 24.8], clampOut);
	const trx = interpolate(frame, [28, 64], [0, 318], clampOut);
	const profit = interpolate(frame, [32, 68], [0, 7.4], clampOut);
	// Bentuk grafik ilustratif (naik bertahap), sama-sama data contoh.
	const bars = [0.42, 0.5, 0.47, 0.6, 0.66, 0.72, 0.8, 0.95];
	const jt = (n: number) => `Rp${n.toFixed(1).replace('.', ',')} jt`;
	return (
		<Background glowY={60}>
			<div style={{position: 'absolute', left: SAFE_X, right: SAFE_X, top: 220}}>
				<Appear delay={0}>
					<div style={{fontSize: 84, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5}}>
						Semua bisnis
						<br />
						<span style={{color: C.green}}>dalam satu layar.</span>
					</div>
				</Appear>
			</div>
			<div
				style={{
					position: 'absolute',
					left: 130,
					right: 130,
					top: 560,
					opacity: phone,
					translate: `0 ${(1 - phone) * 300}px`,
					background: C.surface,
					border: `3px solid ${C.line}`,
					borderRadius: 64,
					padding: 40,
					boxShadow: '0 40px 120px rgba(0,0,0,.6), 0 0 0 12px #0B1714',
					display: 'flex',
					flexDirection: 'column',
					gap: 26,
				}}
			>
				<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 14}}>
						<Logo size={52} />
						<span style={{fontSize: 34, fontWeight: 800}}>Command Center</span>
					</div>
					<SampleBadge />
				</div>
				<div style={{fontSize: 30, color: C.muted, fontWeight: 600}}>Ringkasan hari ini</div>
				<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16}}>
					<Stat label="Pendapatan" value={jt(rev)} delta="+12%" delay={20} />
					<Stat label="Transaksi" value={String(Math.round(trx))} delta="+8%" delay={24} />
					<Stat label="Laba" value={jt(profit)} delta="+5%" delay={28} />
				</div>
				<div style={{background: C.sunk, border: `2px solid ${C.line}`, borderRadius: 22, padding: 28}}>
					<div style={{fontSize: 28, color: C.muted, fontWeight: 600}}>Pendapatan 8 bulan</div>
					<div style={{display: 'flex', alignItems: 'flex-end', gap: 18, height: 340, marginTop: 20}}>
						{bars.map((h, i) => {
							const g = spring({frame: frame - 40 - i * 4, fps, config: {damping: 200}, durationInFrames: 20});
							return (
								<div
									key={i}
									style={{
										flex: 1,
										height: `${h * 100 * g}%`,
										borderRadius: 10,
										background: i === bars.length - 1 ? C.green : C.greenMid + '99',
									}}
								/>
							);
						})}
					</div>
				</div>
				<div style={{background: C.sunk, border: `2px solid ${C.line}`, borderRadius: 22, padding: '24px 28px'}}>
					<div style={{fontSize: 28, color: C.goldFg, fontWeight: 700, marginBottom: 6}}>Perlu perhatian</div>
					<Alert text="3 tagihan jatuh tempo" delay={80} />
					<Alert text="2 barang hampir habis" delay={90} />
					<Alert text="1 pesanan terlambat" delay={100} />
				</div>
			</div>
		</Background>
	);
};
