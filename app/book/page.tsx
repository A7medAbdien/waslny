import FoldedMenuDrivers from "@/components/foldedMenu/FoldedMenuDrivers";
import TripFormSectionParent from "@/components/secitons/TripFormSectionParent";
import SectionHeader from "@/components/sectoin-layout/SectionHeader";
import nathan from '@/public/imgs/nathan.jpeg';
import yazin from '@/public/imgs/yazan.jpeg';
import usama from '@/public/imgs/usama.jpeg';
// import { services } from "@/lib/data/services";

const driverData = {
    pageTitle: "Trip Form",
    pageDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit rerum, ullam cum illum soluta beatae."
}

export default function ParentPage() {
    return (
        <main className="flex flex-col items-center px-4">

            <SectionHeader title={driverData.pageTitle} description={driverData.pageDescription} />

            <div
                className={`section-body-bg w-screen min-h-[60vh] rounded-[6rem] md:rounded-[9rem] leading-6 flex flex-col justify-center items-center`}
            >
                <TripFormSectionParent negativeMargin />
            </div>

            <div className="w-full mt-20">
                <FoldedMenuDrivers data={drivers} />
            </div>
        </main>
    );
}

export const drivers = [
    {
        id: "nathan",
        name: "Nathan",
        rating: 2,
        priceTrip: 3.5,
        priceMonth: 40,
        car: "Toyota-Corolla 2008",
        img: nathan,
    },
    {
        id: "usama",
        name: "Usama",
        rating: 3,
        priceTrip: 3,
        priceMonth: 40,
        car: "aslkdj",
        img: usama,
    },
    {
        id: "yazin",
        name: "Yazin",
        rating: 5,
        priceTrip: 3.5,
        priceMonth: 40,
        car: "aslkdj",
        img: yazin,
    },
]


