import React from 'react';
import CertificateCard from './CertificateCard';

export default function CertificateSection({ listCertificate }: { listCertificate: Certificate[] }) {
    return (
        <section id="certificates" className="mx-auto max-w-6xl w-full p-10 pb-20">
            <h3 className="text-xl font-bold text-hover">CERTIFICATE</h3>
            <div className="grid grid-cols-2 justify-between gap-x-6 gap-y-10 mt-10">
                {listCertificate.map((certificate) => (
                    <CertificateCard key={certificate.id} certificate={certificate} />
                ))}
            </div>
        </section>
    );
}
