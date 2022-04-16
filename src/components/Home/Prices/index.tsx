import styles from './Prices.module.css';

import { prices } from '@/constants/prices';

import CheckIcon from '~/svg/check.svg';

const Prices = () => {
  return (
    <div
      id='prices'
      className='flex w-screen flex-col items-center bg-zeitplan bg-opacity-5 px-6 py-10 xl:px-0 xl:py-[100px]'
    >
      <h1 className='w-full text-center font-patua text-2xl font-normal xl:w-[565px] xl:text-[38px] xl:leading-[52px]'>
        Main catur sambil bersepeda, beda harga beda fitur
      </h1>
      <p className='mt-5 w-full text-center text-sm text-dark text-opacity-60 xl:w-[567px] xl:leading-8'>
        Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga
        sih, untuk gantinya kami kasih fitur yang spesial buat kamu!
      </p>

      <section className='mx-auto flex flex-col gap-2 py-8 xl:w-[1168px] xl:flex-row xl:gap-[30px] xl:py-[100px]'>
        {prices.map((price) => (
          <section key={price.title}>
            <section className={styles.priceCard}>
              <p className={styles.priceTitle}>{price.title}</p>
              <p className={styles.pricePrice}>{price.price}</p>
              <p className={styles.priceSubtitle}>{price.subtitle}</p>
              <section className={styles.priceBenefits}>
                {price.benefits.map((benefit) => (
                  <section key={benefit} className={styles.priceBenefit}>
                    <CheckIcon />
                    <p>{benefit}</p>
                  </section>
                ))}
              </section>
              <button className={styles.priceButton}>Download</button>
            </section>
          </section>
        ))}
      </section>

      <h3 className='text-center font-sans text-sm font-normal text-dark text-opacity-60 xl:w-[567px] xl:text-base xl:leading-8'>
        <b className='font-bold'>Harap Diingat:</b> Harga di atas belum termasuk
        KKM, dan harga sewaktu-waktu bisa berubah secara mendadak seperti
        pengumuman PPKM darurat.
      </h3>
    </div>
  );
};

export default Prices;
