import styles from './Reviews.module.css';

import { reviews } from '@/constants/reviews';

import Review from './Review';

const Reviews = () => {
  return (
    <div
      id='reviews'
      className='flex flex-col items-center bg-zeitplan bg-opacity-10 py-10 px-6 xl:py-[100px] xl:px-0'
    >
      <h1 className='text-center font-patua text-2xl font-normal xl:w-[565px] xl:text-[38px] xl:leading-[52px]'>
        Apa kata umat manusia tentang aplikasi keren ini?
      </h1>
      <p className='mt-4 text-center text-sm text-dark text-opacity-60 xl:mt-5 xl:w-[567px] xl:text-base xl:leading-8'>
        Kami tidak memfilter semua review, males soalnya. Jadi semua yang
        ditampilkan di sini semuanya asli tanpa reksadana.
      </p>

      <section className='flex flex-col justify-between gap-[30px] pt-8 xl:w-[1168px] xl:flex-row xl:pt-[100px]'>
        {[...Array(reviews.length / 2)].map((_, i) => (
          <section className={styles.reviewsCol} key={i}>
            {reviews.slice(i * 2, i * 2 + 2).map((review, j) => (
              <Review
                key={`review-${i}-${j}`}
                rate={review.rate}
                content={review.content}
                avatar={review.avatar}
                reviewer={review.reviewer}
                reviewerDesc={review.reviewerDesc}
              />
            ))}
          </section>
        ))}
      </section>
    </div>
  );
};

export default Reviews;
