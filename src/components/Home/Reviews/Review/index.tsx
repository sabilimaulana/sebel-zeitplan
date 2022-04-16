import NextImage from '@/components/NextImage';

import Rating from '../Rating';

type ReviewProps = {
  rate: number;
  avatar: string;
  content: string;
  reviewer: string;
  reviewerDesc: string;
};

const Review = ({
  rate,
  avatar,
  content,
  reviewer,
  reviewerDesc,
}: ReviewProps) => {
  return (
    <section className='flex flex-col gap-5 rounded-md bg-white p-6 xl:p-[30px]'>
      <Rating rate={rate} />

      <p className='text-sm leading-6 text-dark xl:leading-[26px]'>
        “{content}”
      </p>

      <section className='flex gap-5'>
        <section className='relative h-[55px] w-[55px] '>
          <NextImage src={avatar} alt={reviewer} layout='fill' />
        </section>

        <section className='flex flex-col justify-center'>
          <p className='font-medium leading-6 text-black'>{reviewer}</p>
          <p className='text-xs font-medium text-dark text-opacity-60'>
            {reviewerDesc}
          </p>
        </section>
      </section>
    </section>
  );
};

export default Review;
