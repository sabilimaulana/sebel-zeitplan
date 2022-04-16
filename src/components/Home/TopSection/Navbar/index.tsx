import Link from 'next/link';

import ArrowForwardOutline from '~/svg/arrow-forward-outline.svg';
import Zeitplan from '~/svg/zeitplan.svg';

const Navbar = () => {
  return (
    <nav
      className='flex h-16 items-center justify-between bg-white px-10 xl:h-[100px]'
      style={{ boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.05)' }}
    >
      <section className='flex items-center gap-4'>
        <Zeitplan className='h-[38px] w-[38px]' />
        <h1 className='text-lg font-semibold'>ZEITPLAN</h1>
      </section>

      <section className='hidden flex-col items-center gap-12 xl:flex xl:flex-row'>
        <Link href='/'>
          <a className='font-sans font-semibold text-zeitplan'>Home</a>
        </Link>
        <Link href='/'>
          <a className='font-sans text-black opacity-50'>Fitur-Fitur</a>
        </Link>
        <Link href='/'>
          <a className='font-sans text-black opacity-50'>Harga</a>
        </Link>
        <Link href='/'>
          <a className='font-sans text-black opacity-50'>Testimoni</a>
        </Link>

        <button
          className='flex h-10 items-center gap-[15px] rounded-[5px] bg-zeitplan px-5 font-sans'
          style={{
            boxShadow: '0px 20px 30px rgba(255, 86, 58, 0.15)',
          }}
        >
          <p className='text-white'>Download</p> <ArrowForwardOutline />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
