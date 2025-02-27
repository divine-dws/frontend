import Hero from '@/components/Hero';

export default function Home() {
  return (
    
      <main>
        {/* <Hero title="Give Your Child The Best Start"/> */}

        <Hero
        title1="Give your child the best, start"
        title2="with quality education"
        buttonText="Enroll your child now"
        buttonLink="/enroll"
        showButton={true}
      />
      </main>
    
    
  );
}
