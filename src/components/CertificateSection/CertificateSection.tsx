import React from 'react';
import CertificateCard from './CertificateCard';

export default function CertificateSection({ listCertificate }: { listCertificate: Certificate[] }) {
    return (
        <section id="certificates" className="mx-auto max-w-6xl w-full p-5 pb-20 sm:p-10">
            <h3 className="text-xl font-bold text-hover text-center sm:text-start">CERTIFICATE</h3>
            <div className="grid grid-cols-1 justify-between gap-x-6 gap-y-10 mt-8 sm:mt-16 sm:grid-cols-2">
                {listCertificate.map((certificate) => (
                    <CertificateCard key={certificate.id} certificate={certificate} />
                ))}
            </div>
        </section>
    );
}
