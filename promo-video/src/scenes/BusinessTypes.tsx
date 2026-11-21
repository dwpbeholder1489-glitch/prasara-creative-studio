import React from 'react';
import {Appear} from '../ui/Appear';
import {Background} from '../ui/Background';
import {C, SAFE_X} from '../theme';

// Adegan 6: jenis bisnis yang saat ini didukung (sesuai FAQ situs).
const Icon: React.FC<{d: string}> = ({d}) => (
	<svg width={84} height={84} viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
		<path d={d} />
	</svg>
);

const ICONS = {
	kos: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z',
	toko: 'M5 8h14l-1 12H6zM9 8a3 3 0 0 1 6 0',
	laundry: 'M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM12 9a4 4 0 1 0 0 8a4 4 0 1 0 0-8zM7 6h2',
	kuliner: 'M4 11h14v2a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6zM18 12h1a2 2 0 0 1 0 4h-1M8 4v4M12 4v4',
	builder: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
};

const Card: React.FC<{icon: string; title: string; sub: string; delay: number; wide?: boolean}> = ({icon, title, sub, delay, wide}) => (
	<Appear delay={delay} y={60} style={{gridColumn: wide ? 'span 2' : undefined}}>
		<div
			style={{
				background: C.surface,
				border: `2px solid ${C.line}`,
				borderRadius: 30,
				padding: '40px 36px',
				height: '100%',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: wide ? 'row' : 'column',
				alignItems: wide ? 'center' : 'flex-start',
				gap: wide ? 30 : 22,
			}}
		>
			<div style={{background: C.greenSoft, borderRadius: 24, padding: 18, display: 'flex'}}>
				<Icon d={icon} />
			</div>
			<div>
				<div style={{fontSize: 50, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1}}>{title}</div>
				<div style={{fontSize: 32, color: C.muted, fontWeight: 500, marginTop: 8, lineHeight: 1.3}}>{sub}</div>
			</div>
		</div>
	</Appear>
);

export const BusinessTypes: React.FC = () => (
	<Background glowY={40}>
		<div style={{position: 'absolute', left: SAFE_X, right: SAFE_X, top: 200}}>
			<Appear delay={0}>
				<div style={{fontSize: 92, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2}}>Satu platform.</div>
			</Appear>
			<Appear delay={8}>
				<div style={{fontSize: 92, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: C.green}}>
					Berbagai jenis bisnis.
				</div>
			</Appear>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 90}}>
				<Card icon={ICONS.kos} title="Kos & Properti" sub="Kamar, penghuni, tagihan sewa" delay={16} />
				<Card icon={ICONS.toko} title="Toko & Grosir" sub="Kasir, stok, supplier" delay={22} />
				<Card icon={ICONS.laundry} title="Laundry & Jasa" sub="Pesanan per kg/item, DP/lunas" delay={28} />
				<Card icon={ICONS.kuliner} title="Kuliner" sub="Menu, dapur, QR meja" delay={34} />
				<Card icon={ICONS.builder} title="Usaha lainnya" sub="Susun sendiri lewat Business Builder" delay={40} wide />
			</div>
		</div>
	</Background>
);
