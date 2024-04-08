'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
    const [scrollTop, setScrollTop] = useState<number>(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed w-full top-0 z-[100]">
            <div className="w-full h-2 bg-transparent">
                <div className="h-2 bg-leeim-mint" style={{ width: `${scrollTop}%` }}></div>
            </div>
        </div>
    );
}
