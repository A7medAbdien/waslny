import { socialMediaData } from '@/lib/data'
import Link from 'next/link'

const FooterSocialMediaLinks = () => {
    return (
        <div>
            <div className="right-0 flex  items-center gap-5 p-4">
                {socialMediaData.map((item, index) => (
                    <Link href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                        <div className="group flex h-20 w-20 items-center justify-center rounded-full border-2 FooterSocialMediaLinks-border-color text-center">
                            <div className="absolute h-20 w-20 rounded-full FooterSocialMediaLinks-bg transition-all duration-300"></div>
                            <div className="absolute h-20 w-20 scale-0 rounded-full FooterSocialMediaLinks-hovered-bg transition-all duration-300 group-hover:scale-[98%] group-hover:duration-300 group-hover:ease-in"></div>
                            <div className="relative z-20 text-3xl group-hover:FooterSocialMediaLinks-icon-hovered-color translate-y-0.5">
                                {item.icon}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FooterSocialMediaLinks