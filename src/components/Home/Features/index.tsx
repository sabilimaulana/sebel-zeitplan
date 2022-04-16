import styles from './Features.module.css';

import BellIcon from '~/svg/bell.svg';
import CloudOffIcon from '~/svg/cloud-off.svg';
import FeatureImage from '~/svg/feature-image.svg';
import TrashIcon from '~/svg/trash.svg';
import VideoIcon from '~/svg/video.svg';

const Features = () => {
  return (
    <div
      id='features'
      className='mx-auto flex flex-col items-center justify-between px-6 py-10 xl:w-[1168px] xl:flex-row xl:px-0 xl:py-[100px]'
    >
      <section className='w-full xl:w-auto'>
        <section
          className={styles.featuresImage}
          style={{
            background:
              'linear-gradient(180deg, #FFBFB5 55.44%, #FF735C 104.78%)',
          }}
        >
          <FeatureImage className='h-auto w-full xl:h-[557px] xl:w-[297px]' />
        </section>
      </section>

      <section className='w-full xl:w-[569px]'>
        <h2 className='mt-6 text-center font-patua text-2xl font-normal text-dark xl:mt-0 xl:text-left xl:text-[38px] xl:leading-[52px]'>
          Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini?
          Jadi penasaran nich~
        </h2>
        <p className='mt-5 text-justify font-sans text-lg text-dark text-opacity-60 xl:text-left'>
          Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan
          apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi
          jarang masuk, titip absen doang!
        </p>

        <section className='mt-10 grid grid-cols-1 gap-[30px] xl:grid-cols-2'>
          <section className='flex flex-col items-center gap-2 xl:items-start xl:gap-[10px]'>
            <CloudOffIcon className='h-[35px] w-[35px]' />
            <h3 className='font-patua text-lg font-normal text-dark'>
              Tidak Tersimpan Otomatis
            </h3>
            <p className='text-center text-sm text-dark text-opacity-60 xl:text-left xl:text-base xl:leading-8'>
              Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.
            </p>
          </section>

          <section className='flex flex-col items-center gap-2 xl:items-start xl:gap-[10px]'>
            <VideoIcon className='h-[35px] w-[35px]' />
            <h3 className='font-patua text-lg font-normal text-dark'>
              Si Rizal Gak Pernah Ngonten
            </h3>
            <p className='text-center text-sm text-dark text-opacity-60 xl:text-left xl:text-base xl:leading-8'>
              Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.
            </p>
          </section>

          <section className='flex flex-col items-center gap-2 xl:items-start xl:gap-[10px]'>
            <TrashIcon className='h-[35px] w-[35px]' />
            <h3 className='font-patua text-lg font-normal text-dark'>
              Terhapus Otomatis
            </h3>
            <p className='text-center text-sm text-dark text-opacity-60 xl:text-left xl:text-base xl:leading-8'>
              Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.
            </p>
          </section>

          <section className='flex flex-col items-center gap-2 xl:items-start xl:gap-[10px]'>
            <BellIcon className='h-[35px] w-[35px]' />
            <h3 className='font-patua text-lg font-normal text-dark'>
              Nggak Tau Lagi Gw
            </h3>
            <p className='text-center text-sm text-dark text-opacity-60 xl:text-left xl:text-base xl:leading-8'>
              Mikir teks buat konten susah bro, ini aja ngasal masih susah!
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Features;
