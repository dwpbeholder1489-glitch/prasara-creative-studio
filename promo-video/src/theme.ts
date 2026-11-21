// Palet warna diambil dari tema gelap situs PRASARA (prasara-id.vercel.app).
import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

// Font Inter (lisensi OFL) disimpan lokal di public/fonts agar render tidak butuh internet.
export const fontFamily = 'Inter';
const faces: Array<[string, 'normal' | 'italic', string]> = [
	['400', 'normal', 'inter-latin-400-normal.woff2'],
	['500', 'normal', 'inter-latin-500-normal.woff2'],
	['600', 'normal', 'inter-latin-600-normal.woff2'],
	['700', 'normal', 'inter-latin-700-normal.woff2'],
	['800', 'normal', 'inter-latin-800-normal.woff2'],
	['800', 'italic', 'inter-latin-800-italic.woff2'],
];
for (const [weight, style, file] of faces) {
	loadFont({family: fontFamily, url: staticFile(`fonts/${file}`), weight, style, format: 'woff2'});
}

export const C = {
	bg: '#08110F',
	surface: '#0F1D1A',
	sunk: '#060D0B',
	line: '#1C302B',
	fg: '#E4EFEA',
	muted: '#92A79F',
	brand: '#14533F',
	green: '#3DD68C',
	greenSoft: '#113528',
	greenLight: '#A7F3CB',
	greenMid: '#22A86A',
	greenFg: '#6EE7AA',
	ink: '#03231A',
	gold: '#E2B04A',
	goldSoft: '#33290F',
	goldFg: '#EBC46A',
	bad: '#F2928A',
	badSoft: '#3A1C1A',
} as const;

export const SAFE_X = 90;
