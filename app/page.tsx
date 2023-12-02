
import SectionHeader from "@/components/sectoin-layout/SectionHeader";
import { homeHeaderSectionData } from "@/lib/data/home";


export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <div className="mt-32">
                <SectionHeader home {...homeHeaderSectionData} />
            </div>
            {/* <SectionBody>
                <ContactSection negativeMargin />
            </SectionBody> */}
        </main>
    );
}
