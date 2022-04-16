import NextImage from '@/components/NextImage';

import Footer from './Footer';

const BottomSection = () => {
  return (
    <div id='bottom-section' className='w-full px-6 xl:px-0'>
      <div className='mx-auto flex flex-col items-center gap-5 py-10 xl:w-[1168px] xl:py-[100px]'>
        <h1 className='text-center font-patua text-2xl font-normal xl:w-[761px] xl:text-[38px] xl:leading-[52px]'>
          Download Aplikasi Keren Ini Sekarang!
        </h1>
        <p className='text-center text-sm leading-6 text-dark text-opacity-60 xl:w-[761px] xl:text-base xl:leading-8'>
          Please download lah aplikasi ini, udah susah-susah buat, mana pas
          bikin sampe begadang, terus juga ditambah weekend. Jadi, please
          download lah ya.
        </p>

        <section className='flex gap-[15px]'>
          <section className='relative h-[46px] w-[150px] cursor-pointer'>
            <NextImage
              src='/images/appstore.png'
              alt='AppStore'
              layout='fill'
            />
          </section>

          <section className='relative h-[46px] w-[150px] cursor-pointer'>
            <NextImage
              src='/images/playstore.png'
              alt='PlayStore'
              layout='fill'
            />
          </section>
        </section>
      </div>
      <section className='mx-auto mt-6 border-b xl:mt-[84px] xl:w-[1168px]' />

      <Footer />
    </div>
  );
};

export default BottomSection;
