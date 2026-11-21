import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Appear} from '../ui/Appear';
import {Background} from '../ui/Background';
import {Logo} from '../ui/Logo';
import {C, SAFE_X} from '../theme';

// Adegan 8: ajakan bertindak.
export const Cta: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const btn = spring({frame: frame - 30, fps, config: {damping: 12}});
	const pulse = 1 + Math.max(0, Math.sin((frame - 60) / 9)) * 0.03 * (frame > 60 ? 1 : 0);
	return (
		<Background glowY={52}>
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
				<div style={{display: 'flex', alignItems: 'center', gap: 26}}>
					<Logo size={130} animate />
					<Appear delay={8} x={-30} y={0}>
						<span style={{fontSize: 100, fontWeight: 800, letterSpacing: 4}}>PRASARA</span>
					</Appear>
				</div>
				<Appear delay={16}>
					<div style={{fontSize: 84, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5, marginTop: 120}}>
						Coba sekarang,
						<br />
						<span style={{color: C.green}}>gratis.</span>
					</div>
				</Appear>
				<div
					style={{
						marginTop: 90,
						opacity: Math.min(1, btn),
						scale: String(btn * pulse),
						background: C.green,
						color: C.ink,
						fontSize: 64,
						fontWeight: 800,
						padding: '44px 80px',
						borderRadius: 999,
						boxShadow: `0 0 80px ${C.green}77`,
					}}
				>
					Mulai Gratis 14 Hari →
				</div>
				<Appear delay={44}>
					<div style={{fontSize: 44, color: C.muted, fontWeight: 600, marginTop: 54, lineHeight: 1.45}}>
						Tanpa kartu kredit
						<br />
						Ada paket Gratis Rp0, selamanya
					</div>
				</Appear>
				<Appear delay={58}>
					<div
						style={{
							marginTop: 90,
							fontSize: 52,
							fontWeight: 700,
							color: C.greenLight,
							border: `2px solid ${C.line}`,
							background: C.surface,
							padding: '24px 46px',
							borderRadius: 22,
						}}
					>
						prasara-id.vercel.app
					</div>
				</Appear>
			</div>
		</Background>
	);
};
