

"use client";

import React from 'react';
import Hero from '@/components/Hero';
import RegistrationForm from '@/components/RegistrationForm';
// import Footer from '@/components/Footer';

interface EnrollPageProps {
  heroProps: {
    title1: string;
    title2: string;
    showButton: boolean;
  };
}

const EnrollPage: React.FC<EnrollPageProps> = ({ heroProps }) => {
  return (
    <div>
      <Hero
        title1={heroProps.title1}
        title2={heroProps.title2}
        showButton = {heroProps.showButton}
        buttonText=""
        buttonLink=""
      />
    <div className="min-h-screen bg-gray-100 py-8">
      <RegistrationForm />
    </div>
      {/* <Footer /> */}
    </div>
  );
};

// Example usage
const EnrollPageWrapper = () => {
    const heroProps = {
        title1: "No queues, no delays.",
        title2: "Register your child in minutes.",
        buttonText: "Enroll Now",
        buttonLink: "/enroll",
        showButton: false,
    };

    return <EnrollPage heroProps={heroProps} />
}

export default EnrollPageWrapper;