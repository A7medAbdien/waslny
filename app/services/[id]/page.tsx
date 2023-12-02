import AnimatedTextWord from '@/components/animations/AnimatedTextWord'
import FoldedMenu from '@/components/foldedMenu/FoldedMenu'
import ContactSection from '@/components/secitons/ContactSection'
import SectionHeader from '@/components/sectoin-layout/SectionHeader'
import SectionBody from '@/components/sectoin-layout/section-body'
import Logo from '@/components/svgs/Logo'
import { services } from '@/lib/data/services'
import { headerFont } from '@/lib/fonts'
import { Faq, Service } from '@/lib/types'

type Props = {
    params: { id: string }
}

const servicePage = ({ params }: Props) => {
    const serviceParams = params.id.split("-")[0];
    const subServiceParams = params.id.split("-")[1];

    const service = services.find(s => s.id === serviceParams);
    if (!service) return null;

    const subService = service.subServices?.find(s => s.id === subServiceParams);
    // if (!subService) return null;

    return (
        <main className="flex flex-col items-center">


            {/* Case 1: Service Section  */}
            {service && !subService && <SectionHeader {...service} />}

            {/* Case 2: Sub Service Section  */}
            {subService && <SectionHeader
                mutedText={service.title}
                {...subService}
            />}

            <SectionBody className="px-0 lg:px-20">

                {/* Case 1: Sub-Services Section  */}
                {service && !subService && service.subServices && <SubServicesSection subServices={service.subServices} />}

                {/* Case 2: Sub Service FAQs  */}
                {subService && subService.faqs && <FaqSection faqs={subService.faqs} />}

                <ContactSection fullWidthOnLgScreen />

                <div className="w-full flex flex-col justify-center items-center mt-10 -mb-24">
                    <Logo />
                </div>
            </SectionBody>
        </main>
    )
}

type SubServicesSectionProps = {
    subServices: Service[]
}

const SubServicesSection = ({ subServices }: SubServicesSectionProps) => {
    return <>
        <div className='flex flex-col lg:flex-row justify-between items-start -mt-10 px-5 lg:px-0'>
            <AnimatedTextWord
                height='h-[5.2rem]'
                wordsSpacing='mr-7'
                className={`${headerFont.className} text-6xl lg:text-7xl font-light tracking-tighter`}
                text={"Sub-Services"}
            />
        </div>

        <FoldedMenu data={subServices} titleClassName='!text-2xl !font-normal' />
    </>
}

type FaqSectionProps = {
    faqs: Faq[]
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
    return <>
        <div className='flex flex-col lg:flex-row justify-between items-start -mt-10 px-5 lg:px-0'>
            <AnimatedTextWord
                height='h-[5.2rem]'
                wordsSpacing='mr-7'
                className={`${headerFont.className} text-6xl lg:text-7xl font-light tracking-tighter`}
                text={"FAQs"}
            />
        </div>

        <FoldedMenu hideImage data={faqs} titleClassName='!text-2xl !font-normal' />
    </>
}

export default servicePage;
