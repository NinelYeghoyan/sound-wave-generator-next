import { useEffect, useState } from 'react';

import { BreakPoints } from '@type/index';

export const useBreakpoint = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const setSideScreen = (): void => {
            setScreenWidth(window.innerWidth);
        };

        setSideScreen();

        window.addEventListener('resize', setSideScreen);

        return () => {
            window.removeEventListener('resize', setSideScreen);
        };
    }, []);

    const getBreakpoints = () => {
        const xs = screenWidth < BreakPoints.sm;
        const sm = screenWidth >= BreakPoints.sm && screenWidth < BreakPoints.md;
        const md = screenWidth >= BreakPoints.md && screenWidth < BreakPoints.lg;
        const lg = screenWidth >= BreakPoints.lg && screenWidth < BreakPoints.xl;
        const xl = screenWidth >= BreakPoints.xl;

        const xsDown = screenWidth <= BreakPoints.xs;
        const smDown = screenWidth <= BreakPoints.sm;
        const mdDown = screenWidth <= BreakPoints.md;
        const lgDown = screenWidth <= BreakPoints.lg;
        const xlDown = screenWidth <= BreakPoints.xl;

        const xsUp = screenWidth >= BreakPoints.xs;
        const smUp = screenWidth >= BreakPoints.sm;
        const mdUp = screenWidth >= BreakPoints.md;
        const lgUp = screenWidth >= BreakPoints.lg;
        const xlUp = screenWidth >= BreakPoints.xl;

        return {
            xs,
            xsDown,
            xsUp,
            sm,
            smDown,
            smUp,
            md,
            mdDown,
            mdUp,
            lg,
            lgDown,
            lgUp,
            xl,
            xlDown,
            xlUp,
        };
    };

    return getBreakpoints();
};
