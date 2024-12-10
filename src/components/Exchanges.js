import React from 'react';

const Exchanges = () => {
  const exchanges = [
    { name: 'Exchange 1', logo: '/images/exchanges/kraken.png' },
    { name: 'Exchange 2', logo: '/images/exchanges/robinhood.png' },
    { name: 'Exchange 3', logo: '/images/exchanges/coinbase.png' },
    { name: 'Exchange 4', logo: '/images/exchanges/binance.png' },
    { name: 'Exchange 5', logo: '/images/exchanges/upbit.png' },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-4xl font-bold text-center">Frens WIF Hat</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {exchanges.map((exchange, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 transition-transform rounded-lg bg-background-secondary hover:scale-105"
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
    </section>
  );
};

export default Exchanges;