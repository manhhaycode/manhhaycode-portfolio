import React from 'react';
import Image from '../common/Image';
import { Tooltip, TooltipContent, TooltipTrigger } from '../common/Tooltip';
import Link from 'next/link';

export default function CertificateCard({ certificate }: { certificate: Certificate }) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <a target="_blank" href={certificate.url} className="w-full">
                    <Image ratio="56.25%" src={certificate.image} alt="certificate" />
                </a>
            </TooltipTrigger>
            <TooltipContent className="Tooltip">
                <p className="text-[#fff] text-base">{certificate.content}</p>
            </TooltipContent>
        </Tooltip>
    );
}
