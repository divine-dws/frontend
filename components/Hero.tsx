// "use client"


// import React from 'react';
// import Link from 'next/link';

// interface HeroProps {
//   title: string;
// }

// const Hero: React.FC <HeroProps> = ({title}) => {
//   return (
//     <section 
//       className="text-white py-20 px-4 relative min-h-[763px]"
//       style={{
//         // width: '100vw',
//         maxWidth: '100%',
//         margin: '0 auto',
//         background: `
//           linear-gradient(255.03deg, 
//             rgba(228, 15, 119, 0.69) 1.29%, 
//             rgba(32, 47, 128, 0.69) 55.12%
//           ),
//           url(/images/school-image.jpg) 
//         `,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       {/* <div className="max-w-4xl mx-auto text-center relative z-10 h-full flex items-center justify-center min-h-[763px]">
//         <div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Give Your Child The Best Start
//             <span className="block mt-4 text-2xl md:text-3xl font-normal">
//               with quality education
//             </span>
//           </h1>
          
//           <div className="mt-8">
//             <Link href="/enroll" passHref>
//               <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-2xl font-bold hover:bg-pink-500 transition-colors">
//                 Enroll Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div> */}

//         <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4">
//           Give your child the best start
//             </h1>
//             <h2 className="text-5xl font-bold mb-8">
//           with quality education
//             </h2>
//             <div className="mt-8">
//             <Link href="/enroll" passHref>
//             <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-2xl font-bold hover:bg-pink-500 transition-colors">
//               Enrol your child now
//             </button>
//           </Link>
//         </div>
//       </div>


//     </section>
//   );
// };

// export default Hero;


"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title1: string;
  title2: string;
  buttonText: string;
  buttonLink: string;
  showButton: boolean;
}

const Hero: React.FC<HeroProps> = ({ title1, title2, buttonText, buttonLink, showButton }) => {
  return (
    <section 
      className="text-white py-20 px-4 relative min-h-[763px]"
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        background: `
          linear-gradient(255.03deg, 
            rgba(228, 15, 119, 0.69) 1.29%, 
            rgba(32, 47, 128, 0.69) 55.12%
          ),
          url(/images/school-image.jpg) 
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white flex items-center justify-center">
      <Image
      src="/images/logo-school.jpg" // Replace with your image URL
      alt="School Logo"
      width={64} // Adjust width as needed
      height={64} // Adjust height as needed
    />
        
        {/* <Image 
          src="public/images/logo-school.jpg" 
          alt="School Logo" 
          width={64} // Adjust width as needed
          height={64} // Adjust height as needed
        /> */}




      </div>
         <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              {title1}
            </h1>
            <h2 className="text-5xl font-bold mb-8">
              {title2}
            </h2>
            {showButton && (
              <div className="mt-8">
                <Link href={buttonLink} passHref>
                  <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-2xl font-bold hover:bg-pink-500 transition-colors">
                    {buttonText}
                  </button>
                </Link>
              </div>
            )}
        </div>
    </section>
  );
};

export default Hero;
