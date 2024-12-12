import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left side - Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/wif_logo.jpg"
              alt="WIF Dog"
              className="w-72 md:w-[500px] transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left">
            <h1 className="mb-8 text-4xl md:text-7xl font-display font-bold tracking-tight leading-tight">
              <div className="mb-2">
                <span className="text-blue-300">It's</span>
              </div>
              <div className="mb-2">
                <span className="text-blue-300">literally</span>
              </div>
              <div className="mb-2">
                <span className="text-blue-300">just a dog</span>
              </div>
              <div>
                <span className="text-yellow-400 font-black">wif</span>{' '}
                <span className="text-blue-300">a hat</span>
              </div>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 mt-16">
              <a
                href="https://jup.ag/swap/SOL-$WIF_EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                buy wif
              </a>
              <a
                href="https://t.me/dogwifcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                join community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;