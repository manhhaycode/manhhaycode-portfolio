import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function TechTag({ tech, ...props }: { tech: string } & React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            {...props}
            className={twMerge(
                'text-[#fff] shadow-primary p-3 text-base font-semibold bg-[#FF3B5C] rounded-md cursor-pointer',
                props.className,
            )}
        >
            {tech}
        </p>
    );
}
