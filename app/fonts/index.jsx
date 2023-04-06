import { Passion_One, Roboto } from "next/font/google";

export const robotoFont = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap'
});

export const PassionFont = Passion_One({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
});