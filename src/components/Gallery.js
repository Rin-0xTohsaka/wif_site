import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/images/gallery/brian_wif.jpg',
      alt: 'Brian WIF',
    },
    {
      id: 2,
      src: '/images/gallery/cobie.jpg',
      alt: 'Cobie',
    },
    {
      id: 3,
      src: '/images/gallery/paulcoinbase_wif.jpg',
      alt: 'Paul Coinbase WIF',
    },
    {
      id: 4,
      src: '/images/gallery/solanawif.jpeg',
      alt: 'Solana WIF',
    },
    {
      id: 5,
      src: '/images/gallery/art_bessel.jpg',
      alt: 'Art Bessel',
    },
    {
      id: 6,
      src: '/images/gallery/three_arrows_capital.jpg',
      alt: 'Three Arrows Capital',
    },
    {
      id: 7,
      src: '/images/gallery/certified_munch.jpg',
      alt: 'Certified Munch',
    },
    {
      id: 8,
      src: '/images/gallery/robinhood_ceo.jpg',
      alt: 'Robinhood CEO',
    },
    {
      id: 9,
      src: '/images/gallery/bestfrens.jpg',
      alt: 'Best Friends',
    },
    {
      id: 10,
      src: '/images/gallery/robinhood_ceo_2.jpg',
      alt: 'Robinhood CEO 2',
    },
    {
      id: 11,
      src: '/images/gallery/bullIwif_2.jpg',
      alt: 'Bull WIF 2',
    },
    {
      id: 12,
      src: '/images/gallery/wif_jfk.jpg',
      alt: 'WIF JFK',
    },
    {
      id: 13,
      src: '/images/gallery/statue_girl_wif.jpg',
      alt: 'Statue Girl WIF',
    },
    {
      id: 14,
      src: '/images/gallery/dog_wif_japan.jpg',
      alt: 'Dog WIF Japan',
    },
    {
      id: 15,
      src: '/images/gallery/wif_space.jpg',
      alt: 'WIF Space',
    },
    {
      id: 16,
      src: '/images/gallery/bullwifhat.png',
      alt: 'Bull WIF Hat',
    },
  ];

  return (
    <section className="py-16 bg-background-secondary" id="gallery">
      <div className="container">
        <h2 className="mb-12 text-4xl font-bold text-center">WIF in the Wild</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-opacity duration-300 bg-black/50 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;