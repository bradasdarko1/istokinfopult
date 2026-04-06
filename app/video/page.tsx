// app/video/page.tsx
import Link from 'next/link'

export default function VideoSekcija() {
  // Lista videa (možeš dodavati koliko želiš)
  const videoLista = [
    {
      id: 'video-1',
      title: 'Svečano otvaranje Istok info pulta u Novom Sadu',
      ytLink: 'https://youtu.be/Mvw77XM8gI4?si=468CM5xS8OtkGYvf',
      thumbnail: 'https://img.youtube.com/vi/Mvw77XM8gI4/maxresdefault.jpg',
    },
    {
      id: 'video-2',
      title: 'Drugi video',
      ytLink: 'https://www.youtube.com/watch?v=YYYYYYYYYYY',
      thumbnail: 'https://img.youtube.com/vi/YYYYYYYYYYY/hqdefault.jpg',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Video sekcija</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLista.map((video) => (
          <a
            key={video.id}
            href={video.ytLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            <div className="w-full aspect-video">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mt-2 px-2">{video.title}</h2>
          </a>
        ))}
      </div>
    </div>
  )
}