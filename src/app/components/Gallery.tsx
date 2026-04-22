import { motion } from "motion/react";
import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { X, Heart, Download } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  title: string;
  date: string;
  height: number;
}

const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1620455970942-5fca5840d5ee?w=800",
    title: "日落时分",
    date: "2024.01.15",
    height: 400,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?w=800",
    title: "浪漫黄昏",
    date: "2024.02.14",
    height: 500,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1641849460106-c7b413a622c7?w=800",
    title: "海边漫步",
    date: "2024.03.20",
    height: 600,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1715614177635-8d1f3917671d?w=800",
    title: "山顶之约",
    date: "2024.04.10",
    height: 450,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1620455921172-84380f7333af?w=800",
    title: "云端之吻",
    date: "2024.05.01",
    height: 550,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1728985381714-8660eebcf9b5?w=800",
    title: "旅行印记",
    date: "2024.06.15",
    height: 400,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1650526087824-163941841b52?w=800",
    title: "世界地图",
    date: "2024.07.20",
    height: 480,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1759255746829-3e65a89f2179?w=800",
    title: "远方的梦",
    date: "2024.08.08",
    height: 520,
  },
];

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl mb-4">时光相册</h1>
          <p className="text-muted-foreground text-lg">珍藏我们的每一个美好瞬间</p>
        </motion.div>

        <Masonry columnsCount={3} gutter="1.5rem" className="masonry-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedPhoto(photo)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === photo.id ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6"
              >
                <h3 className="text-white text-xl mb-1">{photo.title}</h3>
                <p className="text-white/80 text-sm">{photo.date}</p>
              </motion.div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <style>{`
          @media (max-width: 768px) {
            .masonry-grid {
              column-count: 2 !important;
            }
          }
          @media (max-width: 480px) {
            .masonry-grid {
              column-count: 1 !important;
            }
          }
        `}</style>
      </div>

      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full"
          >
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                <div className="flex items-end justify-between text-white">
                  <div>
                    <h2 className="text-3xl mb-2">{selectedPhoto.title}</h2>
                    <p className="text-white/80">{selectedPhoto.date}</p>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">下载</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
