import styles from './TopSection.module.css';

import NextImage from '@/components/NextImage';

import Navbar from './Navbar';

import HeroImage from '~/svg/hero-image.svg';

const TopSection = () => {
  return (
    <div
      id='hero'
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 244, 242, 0.4) 0%, #FFF0EE 100%)',
      }}
    >
      <section className='mx-auto w-screen pb-[86px] xl:w-[1168px] xl:pt-[50px]'>
        <Navbar />

        <section className='mt-6 flex flex-col-reverse justify-between xl:mt-20 xl:flex-row'>
          <section className='xl:w-[501px]'>
            <h2 className='px-6 text-center font-patua text-2xl font-normal text-dark xl:px-0 xl:text-left xl:text-5xl xl:leading-[60px]'>
              Sebuah cara mudah mengatur jadwal kuliah kamu
            </h2>
            <p className='mt-[15px] px-6 text-center font-sans text-[#6F6F6F] xl:px-0 xl:text-left'>
              Datang kuliah terlambat karena ketiduran itu tidak masalah; datang
              kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini
              adalah sahabat kamu sekarang, brodie~
            </p>

            <section className='mt-10 flex justify-center gap-[15px] px-6 xl:justify-start xl:px-0'>
              <button className='h-[50px] w-[177px] rounded-[5px] bg-zeitplan font-sans text-white'>
                Learn More
              </button>
              <button className='h-[50px] w-[177px] rounded-[5px] border border-zeitplan border-opacity-20 bg-zeitplan bg-opacity-[0.15] font-sans text-zeitplan'>
                Play Demo
              </button>
            </section>

            <section className={styles.heroReview}>
              <NextImage
                src='/images/hero-review.png'
                layout='fill'
                alt='Review'
              />
            </section>
          </section>

          <HeroImage className='mx-auto h-auto w-3/4 xl:mx-0 xl:h-[652px] xl:w-[579.3px]' />
        </section>
      </section>
    </div>
  );
};

export default TopSection;
