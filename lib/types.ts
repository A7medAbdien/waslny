import { StaticImageData } from "next/image";
import { links } from "./data";

export type ImageType = string | StaticImageData

export type SectionTitle = (typeof links)[number]["url"];
export type MainServicesData = Service[];
export type BlogsSectionData = Blog[];

export type SectionHeaderData = {
    title: string,
    description: string,
    buttonUrl?: string
}
export type AboutTextImageSectionData = {
    title: string,
    description: string,
    img: string | StaticImageData,
    mutedText: string
}
export type SectionHeaderWithImages = {
    headerData: SectionHeaderData,
    images: (string | StaticImageData)[]
}

export type Service = {
    id: string,
    title: string,
    description: string,
    img: string | StaticImageData,
    url: string
    subServices?: Service[]
    faqs?: Faq[]
}
export type Faq = {
    title: string,
    description: string
}
export type Blog = {
    title: string,
    description?: string,
    img: string | StaticImageData,
    date: string,
    author: string,
    link: string
}

export type Driver = {
    id: string,
    name: string,
    rating: number,
    priceTrip: number,
    priceMonth: number,
    car: string,
    img: ImageType,
}