import StarIcon from '~/svg/star.svg';

type RatingProps = {
  rate: number;
  maxRate?: number;
};

const Rating = ({ rate, maxRate = 5 }: RatingProps) => {
  return (
    <section className='flex gap-[5px]'>
      {[...Array(rate)].map((_, index) => (
        <section
          key={index}
          className='flex h-5 w-5 items-center justify-center rounded-[3px] bg-[#FFC93F]'
        >
          <StarIcon className='h-3 w-3' />
        </section>
      ))}
      {[...Array(maxRate - rate)].map((_, index) => (
        <section
          key={index}
          className='flex h-5 w-5 items-center justify-center rounded-[3px] bg-black bg-opacity-20'
        >
          <StarIcon className='h-3 w-3' />
        </section>
      ))}
    </section>
  );
};

export default Rating;
