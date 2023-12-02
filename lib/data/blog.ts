import { Blog, SectionHeaderData, SectionHeaderWithImages } from "../types"
import image1 from '@/public/imgs/cover1.png';
import image2 from '@/public/imgs/cover2.png';
import image3 from '@/public/imgs/cover3.png';

export const blogsHeaderData: SectionHeaderData = {
    title: "Blogs",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
}

export const blogsHeaderImagesUrls = [
    image1,
    image2,
    image3,
]

export const blogHeaderWithImageData: SectionHeaderWithImages = {
    headerData: blogsHeaderData,
    images: blogsHeaderImagesUrls,
}


export const blogs: Blog[] = [
    {
        title: "SubBlog 1",
        date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        author: "Aga",
        link: "/s1s1",
        description: "",
        img: image1,
    },
    {
        title: "SubBlog 2",
        date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        author: "Aga",
        link: "/s1s2",
        description: "",
        img: image1,
    },
    {
        title: "SubBlog 3",
        date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        author: "Aga",
        link: "/s1s3",
        description: "",
        img: image1,
    },
    {
        title: "SubBlog 4",
        date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        author: "Aga",
        link: "/s1s4",
        description: "",
        img: image1,
    },
    {
        title: "SubBlog 5",
        date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        author: "Aga",
        link: "/s1s5",
        description: "",
        img: image1,
    },
    {
        title: "SubBlog 6",
        date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        author: "Aga",
        link: "/s1s6",
        description: "",
        img: image1,
    },
]

export const BlogsListHeaderData = {
    headerTitle: "Our Blogs",
    searchMutedText: "select a category",
    categoryMenuFirstRow: "All Categories"
}