import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://sukima-mensetsu.vercel.app/'), //本番環境のアプリ名
	title: 'スキマ面接',
	description: 'スキマ面接',
	openGraph: {
		title: 'スキマ面接',
		description: 'スキマ面接',
	},
	twitter: {
		title: 'スキマ面接',
		description: 'スキマ面接',
		card: 'summary_large_image',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
