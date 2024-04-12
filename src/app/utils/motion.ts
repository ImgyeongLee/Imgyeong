export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export const slideInFromBottom = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * delay,
        },
    }),
};

export function fadeIn(delay: number) {
    return {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.4,
            },
        },
    };
}

export const projectCardVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
        },
    }),
    hover: {
        scale: 1.02,
        transition: { duration: 0.2 },
    },
};
