import SectionHeader from "@/components/sectoin-layout/SectionHeader";
import TripFormSection from "@/components/secitons/TripFormSection";

const driverData = {
    pageTitle: "Trip Form",
    pageDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit rerum, ullam cum illum soluta beatae."
}

export default function DriverPage() {
    return (
        <main className="flex flex-col items-center px-4">

            <SectionHeader title={driverData.pageTitle} description={driverData.pageDescription} />

            <div
                className={`section-body-bg w-screen min-h-[60vh] rounded-[6rem] md:rounded-[9rem] leading-6 flex flex-row justify-center items-center`}
            >
                <TripFormSection negativeMargin />
            </div>
        </main>
    );
}
