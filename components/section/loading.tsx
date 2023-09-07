import Image from 'next/image'
type Props = {}

function Loading({}: Props) {
  return (
    <section className='relative flex h-screen items-center justify-center text-gray-500'>
      <Image
        src='/images/loading-bg.jpg'
        alt='Loading'
        fill
        className='absolute inset-0 object-cover object-center'
        quality={100}
        priority
        placeholder='blur'
        blurDataURL='base64:R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        sizes='100vw'
      />
      <span className='z-10 animate-bounce'>opening</span>
    </section>
  )
}

export default Loading
