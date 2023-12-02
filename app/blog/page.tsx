import SectionHeaderWithImages from "@/components/sectoin-layout/SectionHeaderWithImages";
import SectionBody from "@/components/sectoin-layout/section-body";
import Logo from "@/components/svgs/Logo";
import { blogHeaderWithImageData, blogs } from "@/lib/data/blog";
import BlogList, { BlogsListHeader } from "./BlogList";


export default function servicesPage() {
    return (
        <main className="flex flex-col items-center">

            <SectionHeaderWithImages {...blogHeaderWithImageData} />

            <SectionBody className="px-5 lg:px-20">
                <BlogsListHeader />
                <BlogList blogs={blogs} />
                <div className="w-full flex flex-col justify-center items-center -mb-24">
                    <Logo />
                </div>
            </SectionBody>
        </main>
    )
}


