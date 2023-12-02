import Video from '@/components/Video'
import AboutTextImageSection from '@/components/secitons/AboutTextImageSection'
import SectionBody from '@/components/sectoin-layout/section-body'
import SectionHeader from '@/components/sectoin-layout/SectionHeader'
import { aboutUsData } from '@/lib/data/about'

export default function aboutPage() {
    return (
        <main className="flex flex-col items-center px-4">
            <SectionHeader title={aboutUsData.pageTitle} />
            <SectionBody>
                <AboutTextImageSection {...aboutUsData.textImageFirstSection} />
                <div className="mb-24 lg:mb-60 -mt-16">
                    <Video url={aboutUsData.videoUrl} />
                </div>
                <AboutTextImageSection {...aboutUsData.textImageSecondSection} />
            </SectionBody>
        </main>
    )
}
