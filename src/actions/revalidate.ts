'use server';
import { revalidatePath as revalidate } from 'next/cache';

export const revalidatePath = (path: string) => {
    console.log('revalidating path:', path);
    revalidate(path);
};
