import React from 'react';
import ImageGallery from 'react-image-gallery'

function Gallery({ items }) {
  return <div>
      <h1>Gallery</h1>
      <ImageGallery items={items} />
  </div>;
}

export default Gallery;
