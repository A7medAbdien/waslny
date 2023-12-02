import { SectionHeaderData, SectionHeaderWithImages, Service } from "../types"
import image1 from '@/public/imgs/cover1.png';
import image2 from '@/public/imgs/cover2.png';
import image3 from '@/public/imgs/cover3.png';

export const servicesHeaderData: SectionHeaderData = {
    title: "Services",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
}

export const servicesHeaderImagesUrls = [
    image1,
    image2,
    image3,
]

export const serviceHeaderWithImageData: SectionHeaderWithImages = {
    headerData: servicesHeaderData,
    images: servicesHeaderImagesUrls,
}

export const services: Service[] = [
    {
        id: "s1",
        title: "Service 1",
        url: "/services/s1",
        img: image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        subServices: [
            {
                id: "s1",
                title: "SubService 1",
                url: "/services/s1-s1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image1,
                faqs: [
                    {
                        title: "Lorem ipsum dolor sit",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    },
                    {
                        title: "Lorem ipsum dolor sit",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    },
                    {
                        title: "Lorem ipsum dolor sit",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    },
                    {
                        title: "Lorem ipsum dolor sit",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    },
                ]
            },
            {
                id: "s2",
                title: "SubService 2",
                url: "/services/s1-s2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image1,
            },
            {
                id: "s3",
                title: "SubService 3",
                url: "/services/s1-s3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image1,
            },
            {
                id: "s4",
                title: "SubService 4",
                url: "/services/s1-s4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image1,
            },
            {
                id: "s5",
                title: "SubService 5",
                url: "/services/s1-s5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image1,
            },
            {
                id: "s6",
                title: "SubService 6",
                url: "/services/s1-s6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image1,
            },
        ]
    },
    {
        id: "s2",
        title: "Service 2",
        url: "/services/s2",
        img: image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        subServices: [
            {
                id: "s2s1",
                title: "S2 - SubService 1",
                url: "/services/s2s1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image2,
            },
            {
                id: "s2s2",
                title: "S2 - SubService 2",
                url: "/services/s2s2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image2,
            },
            {
                id: "s2s3",
                title: "S2 - SubService 3",
                url: "/services/s2s3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image2,
            },
            {
                id: "s2s4",
                title: "S2 - SubService 4",
                url: "/services/s2s4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image2,
            },
            {
                id: "s2s5",
                title: "S2 - SubService 5",
                url: "/services/s2s5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image2,
            },
            {
                id: "s2s6",
                title: "S2 - SubService 6",
                url: "/services/s2s6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image2,
            },
        ]
    },
    {
        id: "s3",
        title: "Service 3",
        url: "/services/s3",
        img: image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        subServices: [
            {
                id: "s3s1",
                title: "S3 - SubService 1",
                url: "/services/s3s1",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image3,
            },
            {
                id: "s3s2",
                title: "S3 - SubService 2",
                url: "/services/s3s2",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image3,
            },
            {
                id: "s3s3",
                title: "S3 - SubService 3",
                url: "/services/s3s3",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image3,
            },
            {
                id: "s3s4",
                title: "S3 - SubService 4",
                url: "/services/s3s4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image3,
            },
            {
                id: "s3s5",
                title: "S3 - SubService 5",
                url: "/services/s3s5",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image3,
            },
            {
                id: "s3s6",
                title: "S3 - SubService 6",
                url: "/services/s3s6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
                img: image3,
            },
        ]
    }
]

export const ServicesListHeaderData = {
    headerTitle: "Our Services",
    searchMutedText: "select a category",
    categoryMenuFirstRow: "All Categories"
}