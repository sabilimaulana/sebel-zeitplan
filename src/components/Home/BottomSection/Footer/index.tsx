import { RiGithubLine } from 'react-icons/ri';

import styles from './Footer.module.css';

import clsxm from '@/lib/clsxm';

import Facebook from '~/svg/facebook.svg';
import Instagram from '~/svg/instagram.svg';
import Twitter from '~/svg/twitter.svg';
import Zeitplan from '~/svg/zeitplan.svg';

const Footer = () => {
  return (
    <div className='py-10 xl:pt-[100px] xl:pb-20'>
      <div className='mx-auto flex w-full flex-wrap justify-between xl:w-[1240px]'>
        <div className='flex flex-col items-center xl:w-[400px] xl:items-start'>
          <Zeitplan className='h-[38px] w-[38px]' />
          <p className='mt-5 font-patua'>Zeitplan</p>
          <p
            className={clsxm([
              'mt-5 text-justify xl:text-left',
              styles.footerMenu,
            ])}
          >
            Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah,
            jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal
            lainnya. Walaupun banyak error, setidaknya kami sudah berusaha
            semaksimal mungkin.
          </p>
          <p className='mt-4 flex flex-col items-center gap-1 text-sm font-semibold text-dark text-opacity-60 xl:mt-5 xl:flex-row xl:items-start'>
            COPYRIGHT (C) 2021. <span>DESIGN BY NAUVAL.</span>
            <span>CODE BY BILI.</span>
          </p>
        </div>

        <div className='w-1/2 xl:w-60'>
          <p className='mt-5 font-patua'>Sitemap</p>

          <section className='mt-5 flex flex-col gap-[10px]'>
            <p className={styles.footerMenu}>Beranda</p>
            <p className={styles.footerMenu}>Fitur-fitur</p>
            <p className={styles.footerMenu}>Harga</p>
            <p className={styles.footerMenu}>Testimoni</p>
            <p className={styles.footerMenu}>Download</p>
          </section>
        </div>

        <div className='w-1/2 xl:w-60'>
          <p className='mt-5 font-patua'>Partner</p>

          <section className='mt-5 flex flex-col gap-[10px]'>
            <p className={styles.footerMenu}>Sefaan.ru</p>
            <p className={styles.footerMenu}>Ganoool</p>
            <p className={styles.footerMenu}>Waptriick</p>
            <p className={styles.footerMenu}>Stafaaband</p>
            <p className={styles.footerMenu}>MyWapBlogg</p>
            <p className={styles.footerMenu}>FrivGem</p>
          </section>
        </div>

        <div className='mt-4 w-screen border-t xl:w-60 xl:border-0'>
          <p className='mt-5 text-center font-patua xl:mt-0 xl:text-left'>
            Tetep Terhubung
          </p>

          <p className='mt-5 text-center font-sans text-base text-dark text-opacity-60 xl:text-left'>
            Lihat kami pansos di sosial media berikut:
          </p>

          <section className='mt-5 flex justify-center gap-[10px] xl:justify-start'>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.social}
            >
              <Facebook className='h-6 w-6' />
            </a>
            <a
              href='https://twitter.com/sabilimawlana'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.social}
            >
              <Twitter className='h-6 w-6' />
            </a>
            <a
              href='https://www.instagram.com/sabilimawlana'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.social}
            >
              <Instagram className='h-6 w-6' />
            </a>

            <a
              href='https://github.com/sabilimaulana'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.social}
            >
              <RiGithubLine className='h-6 w-6 text-zeitplan text-opacity-80' />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
