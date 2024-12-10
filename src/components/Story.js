import React from 'react';

const Story = () => {
  return (
    <section className="py-16 bg-background-secondary" id="about">
      <div className="container">
        <h2 className="mb-12 text-4xl font-bold text-center">The WIF Story</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-center text-gray-300">
          <p>
            Abandoned by the original dev, embraced by the community. What started
            as a simple dog with a hat became a symbol of community-driven
            innovation on Solana.
          </p>
          <p>
            No venture capital, no private investors - just a passionate community
            united by one simple truth: anything looks better WIF a hat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;