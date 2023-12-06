'use client';
import { revalidatePath } from '@/actions/revalidate';
import React from 'react';

export default function RevalidateButton() {
    return (
        <button
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#fff] shadow-primary p-3 text-base font-semibold bg-[#FF3B5C] rounded-md"
            onClick={async () => revalidatePath('/')}
        >
            Revalidate Page
        </button>
    );
}
