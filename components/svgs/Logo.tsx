import image2 from '@/public/imgs/logo.jpeg';
import Image from 'next/image';


export default function Logo() {
   return <div className="w-full h-full overflow-hidden">
      <Image
         width={400}
         height={400}
         src={image2}
         alt=''
         className="w-full h-full"
      />
   </div>
};

