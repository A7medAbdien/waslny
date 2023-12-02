import logoSvg from '@/public/imgs/logo.png';
import Image from 'next/image';

export default function Logo() {
   return <div className="w-40 h-full overflow-hidden">
      <Image
         width={600}
         height={600}
         src={logoSvg}
         alt=''
         className="w-full h-full"
      />
   </div>
};

