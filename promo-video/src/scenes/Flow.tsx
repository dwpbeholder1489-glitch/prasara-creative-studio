import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear} from '../ui/Appear';
import {Background} from '../ui/Background';
import {C, SAFE_X} from '../theme';

// Adegan 5: satu transaksi, semua bagian ikut ter-update (alur kerja dari situs).
const STEP_GAP = 14;
const steps = [
	{t: 'Transaksi masuk', s: 'Penjualan atau pembayaran dicatat sekali'},
	{t: 'Stok & kas berubah', s: 'Saat itu juga, tanpa hitung ulang'},
	{t: 'Jurnal otomatis', s: 'Pembukuan tersusun dari transaksi'},
	{t: 'Laporan terbarui', s: 'Laba rugi memakai angka terbaru'},
];

export const Flow: React.FC = () => {
	const frame = useCurrentFrame();
	const lineP = interpolate(frame, [20, 20 + STEP_GAP * 3 + 10], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<Background glowY={45}>
			<div style={{position: 'absolute', left: SAFE_X, right: SAFE_X, top: 200}}>
				<Appear delay={0}>
					<div style={{fontSize: 96, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2}}>Catat sekali.</div>
				</Appear>
				<Appear delay={8}>
					<div style={{fontSize: 96, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: C.green}}>
						Semuanya ikut bergerak.
					</div>
				</Appear>
			</div>
			<div style={{position: 'absolute', left: SAFE_X, right: SAFE_X, top: 640}}>
				<div
					style={{
						position: 'absolute',
						left: 50,
						top: 60,
						width: 6,
						height: 3 * 270 * lineP,
						background: `linear-gradient(${C.green}, ${C.greenMid})`,
						borderRadius: 3,
					}}
				/>
				{steps.map((st, i) => {
					const active = frame >= 20 + i * STEP_GAP + 6;
					return (
						<Appear key={st.t} delay={20 + i * STEP_GAP} x={60} y={0}>
							<div style={{display: 'flex', alignItems: 'center', gap: 40, height: 270}}>
								<div
									style={{
										width: 106,
										height: 106,
										flexShrink: 0,
										borderRadius: 999,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: 48,
										fontWeight: 800,
										background: active ? C.green : C.surface,
										color: active ? C.ink : C.muted,
										border: `3px solid ${C.green}`,
										boxShadow: active ? `0 0 40px ${C.green}66` : 'none',
									}}
								>
									{i + 1}
								</div>
								<div>
									<div style={{fontSize: 60, fontWeight: 800, letterSpacing: -1}}>{st.t}</div>
									<div style={{fontSize: 40, color: C.muted, fontWeight: 500, marginTop: 6}}>{st.s}</div>
								</div>
							</div>
						</Appear>
					);
				})}
			</div>
		</Background>
	);
};
