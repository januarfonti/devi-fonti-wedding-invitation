import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface AudioPlayerProps {
  src: string
  isOpened: boolean
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, isOpened }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Check if the user agent is not a mobile browser
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        )
        if (!isMobile) {
          audioRef.current.play()
        } else {
          // For mobile browsers, use muted audio to enable autoplay
          audioRef.current.muted = true
          audioRef.current.play()
          audioRef.current.muted = false
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {isOpened && (
        <div className='fixed bottom-4 left-4 z-50'>
          <audio ref={audioRef} src={src} autoPlay loop controls style={{ display: 'none' }} />
          <button
            onClick={togglePlay}
            className='rounded bg-lime-900 p-1 font-bold text-white hover:bg-lime-600'
          >
            {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      )}
    </>
  )
}

export default AudioPlayer
