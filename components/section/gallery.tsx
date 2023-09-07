import photos from '@/data/photos'
import { slides } from '@/data/slides'
import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

function Gallery() {
  const [index, setIndex] = useState(-1)

  return (
    <section className='z-10 bg-[#010101] p-4 md:px-10 md:py-10'>
      <h1 className='-z-0 text-lg font-bold uppercase tracking-tighter text-gray-300 md:text-3xl lg:text-4xl'>
        Our Photos Gallery
      </h1>
      <p className='mb-4 text-xs text-gray-300 md:text-2xl lg:text-3xl lg:font-extralight'>
        Smiling, laughing, and loving in pictures
      </p>
      <PhotoAlbum
        layout='rows'
        photos={photos}
        targetRowHeight={(containerWidth) => {
          if (containerWidth < 768) return 100
          return 500
        }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={slides} />
    </section>
  )
}

export default Gallery
