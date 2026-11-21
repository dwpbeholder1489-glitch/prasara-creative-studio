import React from 'react';
import {Appear} from '../ui/Appear';
import {Background} from '../ui/Background';
import {C, SAFE_X} from '../theme';

// Adegan 7: poin keamanan & kemudahan yang tertulis di situs.
const ICONS = {
	phone: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2',
	shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4',
	download: 'M12 3v12M7 10l5 5 5-5M5 21h14',
};

const Row: React.FC<{icon: string; title: string; sub: string; delay: number}> = ({icon, title, sub, delay}) => (
	<Appear delay={delay} x={70} y={0}>
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 36,
				background: C.surface,
				border: `2px solid ${C.line}`,
				borderRadius: 30,
				padding: '40px 40px',
			}}
		>
			<div style={{background: C.greenSoft, borderRadius: 26, padding: 22, display: 'flex', flexShrink: 0}}>
				<svg width={80} height={80} viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
					<path d={icon} />
				</svg>
			</div>
			<div>
				<div style={{fontSize: 54, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1}}>{title}</div>
				<div style={{fontSize: 38, color: C.muted, fontWeight: 500, marginTop: 8}}>{sub}</div>
			</div>
		</div>
	</Appear>
);

export const Trust: React.FC = () => (
	<Background glowY={35}>
		<div style={{position: 'absolute', left: SAFE_X, right: SAFE_X, top: 120, bottom: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 34}}>
			<Appear delay={0}>
				<div style={{fontSize: 92, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, marginBottom: 70}}>
					Praktis.
					<br />
					<span style={{color: C.green}}>Dan bisa dipercaya.</span>
				</div>
			</Appear>
			<Row icon={ICONS.phone} title="Cukup dari HP" sub="Lewat browser, tanpa pasang aplikasi" delay={14} />
			<Row icon={ICONS.shield} title="Data tiap bisnis terpisah" sub="Dijaga langsung di tingkat database" delay={24} />
			<Row icon={ICONS.download} title="Data tetap milik Anda" sub="Bisa diekspor ke Excel & PDF" delay={34} />
		</div>
	</Background>
);
