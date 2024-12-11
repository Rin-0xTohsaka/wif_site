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
    <section className="py-16 overflow-hidden">
      <div className="container">
        <h2 className="mb-12 text-4xl font-bold text-center">Listed On</h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {scrollingExchanges.map((exchange, index) => (
              <div
                key={`${exchange.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 p-6 mx-4 transition-transform rounded-lg bg-background-secondary hover:scale-105"
                style={{ minWidth: '200px' }}
              >
                <img
                  src={exchange.logo}
                  alt={exchange.name}
                  className="w-full max-w-[120px] h-auto opacity-80 hover:opacity-100 transition-opacity"
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