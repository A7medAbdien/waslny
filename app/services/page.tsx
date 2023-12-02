import ServicesList, { ServicesListHeader } from "@/components/ServicesList";
import SectionHeaderWithImages from "@/components/sectoin-layout/SectionHeaderWithImages";
import SectionBody from "@/components/sectoin-layout/section-body";
import Logo from "@/components/svgs/Logo";
import { serviceHeaderWithImageData, services } from "@/lib/data/services";
import React from "react";


export default function servicesPage() {
    return (
        <main className="flex flex-col items-center">

            <SectionHeaderWithImages {...serviceHeaderWithImageData} />

            <SectionBody className="px-0 lg:px-20">
                <ServicesListHeader />
                {services.map((service, i) =>
                    <React.Fragment key={i}>
                        <ServicesList {...service} />
                    </React.Fragment>
                )}
                <div className="w-full flex flex-col justify-center items-center -mb-24">
                    <Logo />
                </div>
            </SectionBody>
        </main>
    )
}


