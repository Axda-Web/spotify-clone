import { TbSquareRoundedLetterT } from 'react-icons/tb';

import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center">
      <TbSquareRoundedLetterT size={30} />
      <div className="text-sm font-bold italic">Topify</div>
    </Link>
  );
};
export default Logo;
