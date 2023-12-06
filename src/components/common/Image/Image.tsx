import React from 'react';
import ImageNext, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function Image({ ratio = '100%', ...props }: { ratio?: '56.25%' | '100%' } & ImageProps) {
    return (
        <div style={{ paddingTop: ratio }} className={'w-full relative max-w-full'}>
            <div className="absolute top-0 left-0 bottom-0 right-0 z-0 h-full max-w-full w-full">
                <ImageNext
                    {...props}
                    {...(!(props.height && props.width) ? { sizes: '100vw', fill: true } : {})}
                    className={twMerge('object-cover', props.className)}
                ></ImageNext>
            </div>
        </div>
    );
}
