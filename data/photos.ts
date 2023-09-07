const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128]

const link = (width: number, height: number, src: string) =>
  `${src}?w=${width}&h=${height}&fit=crop`

const unsplashPhotos = [
  {
    src: 'images/gallery/devi-fonti-1.jpg',
    width: 1100,
    height: 1650,
  },
  {
    src: 'images/gallery/devi-fonti-2.jpg',
    width: 1100,
    height: 1650,
  },
  {
    src: 'images/gallery/devi-fonti-3.jpg',
    width: 1100,
    height: 1650,
  },
  {
    src: 'images/gallery/devi-fonti-4.jpg',
    width: 1100,
    height: 1650,
  },
  {
    src: 'images/gallery/devi-fonti-5.jpg',
    width: 1650,
    height: 1150,
  },
  {
    src: 'images/gallery/devi-fonti-6.jpg',
    width: 1650,
    height: 1150,
  },
  {
    src: 'images/gallery/devi-fonti-7.jpg',
    width: 1650,
    height: 1150,
  },
  {
    src: 'images/gallery/devi-fonti-8.jpg',
    width: 1100,
    height: 1650,
  },
]

const photos = unsplashPhotos.map((photo, index) => {
  const width = photo.width
  const height = photo.height
  return {
    src: link(width, height, photo.src),
    key: `${index}`,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint)
      return {
        src: link(breakpoint, breakpointHeight, photo.src),
        width: breakpoint,
        height: breakpointHeight,
      }
    }),
  }
})

export default photos
