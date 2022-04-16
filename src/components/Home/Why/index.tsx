import CodeIcon from '~/svg/code.svg';
import DatabaseIcon from '~/svg/database.svg';
import UserIcon from '~/svg/user.svg';
import WifiOffIcon from '~/svg/wifi-off.svg';

const Why = () => {
  return (
    <div
      id='why'
      className='mx-auto flex flex-col items-center justify-between gap-8 px-6 py-10 xl:w-[1168px] xl:flex-row xl:gap-0 xl:py-[100px] xl:px-0'
    >
      <section className='w-[369px]'>
        <h2 className='text-center font-patua text-2xl font-normal text-dark xl:text-left xl:text-[38px] xl:leading-[52px]'>
          Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
        </h2>
        <p className='mt-5 text-justify font-sans text-lg text-dark text-opacity-60 xl:text-left'>
          Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak
          bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout
          sendiri, untung gak berdua.
        </p>

        <section className='mt-6 flex w-full justify-between xl:mt-20'>
          <section>
            <p className='font-inter text-xs text-dark text-opacity-60'>
              TOTAL DON’TLOUD
            </p>
            <p className='font-inter text-2xl font-semibold'>1,501,234</p>
          </section>

          <section className='border-l border-dark border-opacity-60' />

          <section>
            <p className='font-inter text-xs text-dark text-opacity-60'>
              TOTAL USERS
            </p>
            <p className='font-inter text-2xl font-semibold'>1,318,829</p>
          </section>
        </section>
      </section>

      <section className='grid grid-cols-1 gap-[30px] xl:w-[669px] xl:grid-cols-2'>
        <section className='flex flex-col gap-6 bg-zeitplan bg-opacity-5 p-10'>
          <section className='flex items-center gap-5'>
            <section className='flex h-[50px] w-[50px] items-center justify-center rounded-md bg-zeitplan bg-opacity-20'>
              <DatabaseIcon className='h-6 w-6' />
            </section>
            <h3 className='font-sans text-lg font-semibold'>Aplikasi Gratis</h3>
          </section>
          <p className='font-sans text-base font-normal text-black'>
            Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu
            akan kami jual ke agen khusus US.
          </p>
        </section>

        <section className='flex flex-col gap-6 bg-zeitplan bg-opacity-5 p-10'>
          <section className='flex items-center gap-5'>
            <section className='flex h-[50px] w-[50px] items-center justify-center rounded-md bg-zeitplan bg-opacity-20'>
              <WifiOffIcon className='h-6 w-6' />
            </section>
            <h3 className='font-sans text-lg font-semibold'>Kode OTP Error</h3>
          </section>
          <p className='font-sans text-base font-normal text-black'>
            Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba
            berulang kali sampe bisa.
          </p>
        </section>

        <section className='flex flex-col gap-6 bg-zeitplan bg-opacity-5 p-10'>
          <section className='flex items-center gap-5'>
            <section className='flex h-[50px] w-[50px] items-center justify-center rounded-md bg-zeitplan bg-opacity-20'>
              <UserIcon className='h-6 w-6' />
            </section>
            <h3 className='font-sans text-lg font-semibold'>Data Tidak Aman</h3>
          </section>
          <p className='font-sans text-base font-normal text-black'>
            Data tidak disimpan dengan baik dan rentan bocor, jangan heran data
            lo tiba-tiba ada di deepweb.
          </p>
        </section>

        <section className='flex flex-col gap-6 bg-zeitplan bg-opacity-5 p-10'>
          <section className='flex items-center gap-5'>
            <section className='flex h-[50px] w-[50px] items-center justify-center rounded-md bg-zeitplan bg-opacity-20'>
              <CodeIcon className='h-6 w-6' />
            </section>
            <h3 className='font-sans text-lg font-semibold'>Biasanya Error</h3>
          </section>
          <p className='font-sans text-base font-normal text-black'>
            Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng
            itu aplikasi pemerintah~
          </p>
        </section>
      </section>
    </div>
  );
};

export default Why;
