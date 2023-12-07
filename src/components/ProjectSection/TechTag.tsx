import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function TechTag({ tech, ...props }: { tech: string } & React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            {...props}
            className={twMerge(
                'text-[#fff] shadow-primary p-2 text-xs font-semibold bg-[#FF3B5C] rounded-md cursor-pointer xs:text-sm sm:text-base sm:p-3',
                props.className,
            )}
        >
            {tech}
        </p>
    );
}
