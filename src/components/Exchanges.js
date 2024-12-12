import React from 'react';

const Exchanges = () => {
  const exchanges = [
    { name: 'iTrust', logo: '/images/exchanges/itrust.jpg' },
    { name: 'DSCVR', logo: '/images/exchanges/dscvr.jpg' },
    { name: 'LayerZero', logo: '/images/exchanges/layerzero.jpg' },
    { name: 'Upbit', logo: '/images/exchanges/upbit.png' },
    { name: 'Robinhood', logo: '/images/exchanges/robinhood.png' },
    { name: 'Kraken', logo: '/images/exchanges/kraken.png' },
    { name: 'Coinbase', logo: '/images/exchanges/coinbase.png' },
    { name: 'Binance', logo: '/images/exchanges/binance.png' },
  ];

  // Duplicate the exchanges array for seamless infinite scroll
  const scrollingExchanges = [...exchanges, ...exchanges];

  return (
    <section className="py-20 bg-background-secondary/30 overflow-hidden">
      <div className="container">
        <h2 className="mb-16 text-5xl font-display text-center">
          <span className="text-blue-300">find us</span>{' '}
          <span className="text-yellow-400">here</span>
        </h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {scrollingExchanges.map((exchange, index) => (
              <div
                key={`${exchange.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 p-8 mx-6 transition-transform rounded-xl bg-background-secondary/80 backdrop-blur-sm hover:scale-105 shadow-lg"
                style={{ minWidth: '200px' }}
              >
                <img
                  src={exchange.logo}
                  alt={exchange.name}
                  className="w-full max-w-[120px] h-auto opacity-90 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exchanges;