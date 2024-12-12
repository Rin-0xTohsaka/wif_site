import React from 'react';

const Story = () => {
  return (
    <section className="py-20 bg-background-secondary/30" id="about">
      <div className="container">
        <h2 className="mb-12 text-5xl font-display text-center">
          <span className="text-blue-300">the</span>{' '}
          <span className="text-yellow-400">story</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-8 text-2xl text-center font-display">
          <p className="text-gray-300 leading-relaxed">
            abandoned by the original dev, embraced by the community. what started
            as a simple dog with a hat became a symbol of community-driven
            innovation on solana.
          </p>
          <p className="text-gray-300 leading-relaxed">
            no venture capital, no private investors - just a passionate community
            united by one simple truth: anything looks better{' '}
            <span className="text-yellow-400 font-black">wif</span> a hat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;