import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Calendar, Heart } from "lucide-react";

interface TravelDestination {
  id: number;
  city: string;
  country: string;
  date: string;
  image: string;
  description: string;
  position: { top: string; left: string };
}

const destinations: TravelDestination[] = [
  {
    id: 1,
    city: "巴黎",
    country: "法国",
    date: "2024.03",
    image: "https://images.unsplash.com/photo-1728985381714-8660eebcf9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "在埃菲尔铁塔下，我们许下永恒的诺言",
    position: { top: "35%", left: "48%" },
  },
  {
    id: 2,
    city: "京都",
    country: "日本",
    date: "2024.04",
    image: "https://images.unsplash.com/photo-1759255746829-3e65a89f2179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "樱花盛开的季节，我们漫步在古老的街道",
    position: { top: "40%", left: "82%" },
  },
  {
    id: 3,
    city: "圣托里尼",
    country: "希腊",
    date: "2024.06",
    image: "https://images.unsplash.com/photo-1762141018794-17f5186d1180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "爱琴海的日落，见证我们的浪漫时光",
    position: { top: "45%", left: "52%" },
  },
  {
    id: 4,
    city: "纽约",
    country: "美国",
    date: "2024.09",
    image: "https://images.unsplash.com/photo-1650526087824-163941841b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "城市的喧嚣中，只有你我相依",
    position: { top: "38%", left: "22%" },
  },
  {
    id: 5,
    city: "布拉格",
    country: "捷克",
    date: "2024.10",
    image: "https://images.unsplash.com/photo-1759722127725-5d9d98752223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    description: "童话般的城市，编织着我们的梦",
    position: { top: "33%", left: "51%" },
  },
];

export function Travel() {
  const [selectedDestination, setSelectedDestination] = useState<TravelDestination | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl mb-4">旅行足迹</h1>
          <p className="text-muted-foreground text-lg">我们一起走过的每一个地方</p>
        </motion.div>

        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto mb-12 bg-gradient-to-br from-muted/30 to-accent/20 rounded-3xl overflow-hidden border border-border shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1557301276-18c1bc4b70be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200')`,
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {destinations.map((dest, index) => (
                <motion.button
                  key={dest.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  onClick={() => setSelectedDestination(dest)}
                  className="absolute group"
                  style={{ top: dest.position.top, left: dest.position.left }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    <div className="w-4 h-4 bg-primary rounded-full shadow-lg" />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-primary rounded-full opacity-30"
                    />
                  </motion.div>

                  <div className="absolute left-1/2 -translate-x-1/2 top-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-card px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-border text-sm">
                      {dest.city}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedDestination(dest)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl mb-1">{dest.city}</h3>
                      <p className="text-sm text-muted-foreground">{dest.country}</p>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <Heart className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {dest.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{dest.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedDestination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedDestination(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-3xl overflow-hidden max-w-2xl w-full border border-border shadow-2xl"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.city}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl mb-2">{selectedDestination.city}</h2>
                  <p className="text-muted-foreground">{selectedDestination.country}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{selectedDestination.date}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedDestination.description}
              </p>

              <button
                onClick={() => setSelectedDestination(null)}
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
              >
                关闭
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
