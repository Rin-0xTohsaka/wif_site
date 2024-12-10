import React from 'react';

const Gallery = () => {
  // Placeholder images - replace with actual community images
  const images = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    src: `/images/gallery/image${index + 1}.jpg`,
    alt: `Community Image ${index + 1}`,
  }));

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