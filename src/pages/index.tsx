import dynamic from 'next/dynamic';

const Seo = dynamic(() => import('@/components/Seo'));
const BottomSection = dynamic(() => import('@/components/Home/BottomSection'));
const Features = dynamic(() => import('@/components/Home/Features'));
const Prices = dynamic(() => import('@/components/Home/Prices'));
const Reviews = dynamic(() => import('@/components/Home/Reviews'));
const TopSection = dynamic(() => import('@/components/Home/TopSection'));
const Why = dynamic(() => import('@/components/Home/Why'));
const Layout = dynamic(() => import('@/components/layout/Layout'));

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            <TopSection />
            <Why />
            <Features />
            <Prices />
            <Reviews />
            <BottomSection />
          </div>
        </section>
      </main>
    </Layout>
  );
}
