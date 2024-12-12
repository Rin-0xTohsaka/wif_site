import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/images/gallery/brian_wif.jpg',
      alt: 'brian wif',
    },
    {
      id: 2,
      src: '/images/gallery/cobie.jpg',
      alt: 'cobie',
    },
    {
      id: 3,
      src: '/images/gallery/paulcoinbase_wif.jpg',
      alt: 'paul coinbase wif',
    },
    {
      id: 4,
      src: '/images/gallery/solanawif.jpeg',
      alt: 'solana wif',
    },
    {
      id: 5,
      src: '/images/gallery/art_bessel.jpg',
      alt: 'art bessel',
    },
    {
      id: 6,
      src: '/images/gallery/three_arrows_capital.jpg',
      alt: 'three arrows capital',
    },
    {
      id: 7,
      src: '/images/gallery/certified_munch.jpg',
      alt: 'certified munch',
    },
    {
      id: 8,
      src: '/images/gallery/robinhood_ceo.jpg',
      alt: 'robinhood ceo',
    },
    {
      id: 9,
      src: '/images/gallery/bestfrens.jpg',
      alt: 'best frens',
    },
    {
      id: 10,
      src: '/images/gallery/robinhood_ceo_2.jpg',
      alt: 'robinhood ceo 2',
    },
    {
      id: 11,
      src: '/images/gallery/bullIwif_2.jpg',
      alt: 'bull wif 2',
    },
    {
      id: 12,
      src: '/images/gallery/wif_jfk.jpg',
      alt: 'wif jfk',
    },
    {
      id: 13,
      src: '/images/gallery/statue_girl_wif.jpg',
      alt: 'statue girl wif',
    },
    {
      id: 14,
      src: '/images/gallery/dog_wif_japan.jpg',
      alt: 'dog wif japan',
    },
    {
      id: 15,
      src: '/images/gallery/wif_space.jpg',
      alt: 'wif space',
    },
    {
      id: 16,
      src: '/images/gallery/bullwifhat.png',
      alt: 'bull wif hat',
    },
  ];

  return (
    <section className="py-20 bg-background" id="gallery">
      <div className="container">
        <h2 className="mb-16 text-5xl font-display text-center">
          <span className="text-blue-300">spotted in</span>{' '}
          <span className="text-yellow-400">the wild</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl aspect-square group shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xl font-display text-white">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;