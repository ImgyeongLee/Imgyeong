import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import { cn } from '@/lib/tailwind-utils';

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Imgyeong Lee Portfolio',
    description: 'The Portfolio website of Imgyeong Lee',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(roboto.className, 'text-leeim-white overflow-x-hidden overflow-y-scroll h-full w-full')}>
                {children}
            </body>
        </html>
    );
}
