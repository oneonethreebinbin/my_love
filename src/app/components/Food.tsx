import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Star, Calendar, Heart } from "lucide-react";

interface FoodCard {
  id: number;
  restaurant: string;
  cuisine: string;
  location: string;
  date: string;
  rating: number;
  image: string;
  description: string;
  dishes: string[];
}

const foodCards: FoodCard[] = [
  {
    id: 1,
    restaurant: "La Petite Maison",
    cuisine: "法式料理",
    location: "巴黎",
    date: "2024.03.15",
    rating: 5,
    image: "https://images.unsplash.com/photo-1575390960549-1fb36d0c6665?w=800",
    description: "在浪漫的巴黎，我们品尝了最正宗的法式大餐",
    dishes: ["鹅肝", "蜗牛", "马卡龙"],
  },
  {
    id: 2,
    restaurant: "Sushi Saito",
    cuisine: "日式料理",
    location: "东京",
    date: "2024.04.20",
    rating: 5,
    image: "https://images.unsplash.com/photo-1685040235380-a42a129ade4e?w=800",
    description: "寿司之神的料理，让我们感受到匠人精神",
    dishes: ["金枪鱼寿司", "海胆", "和牛"],
  },
  {
    id: 3,
    restaurant: "Taverna Blue",
    cuisine: "地中海料理",
    location: "圣托里尼",
    date: "2024.06.10",
    rating: 5,
    image: "https://images.unsplash.com/photo-1727952846696-b09074df46bd?w=800",
    description: "面朝大海，品尝最新鲜的海鲜",
    dishes: ["烤章鱼", "希腊沙拉", "羊排"],
  },
  {
    id: 4,
    restaurant: "Eleven Madison Park",
    cuisine: "现代美式",
    location: "纽约",
    date: "2024.09.05",
    rating: 5,
    image: "https://images.unsplash.com/photo-1727952875533-b8341a0e74b7?w=800",
    description: "米其林三星的完美体验",
    dishes: ["鸭胸", "龙虾", "巧克力舒芙蕾"],
  },
  {
    id: 5,
    restaurant: "Café Imperial",
    cuisine: "捷克传统",
    location: "布拉格",
    date: "2024.10.12",
    rating: 4,
    image: "https://images.unsplash.com/photo-1776614277456-0fcbc6712eb6?w=800",
    description: "华丽的装饰，传统的味道",
    dishes: ["烤猪肘", "啤酒", "苹果派"],
  },
  {
    id: 6,
    restaurant: "Osteria Francescana",
    cuisine: "意大利料理",
    location: "摩德纳",
    date: "2024.08.18",
    rating: 5,
    image: "https://images.unsplash.com/photo-1673081752959-addbc864f678?w=800",
    description: "世界最佳餐厅的魅力",
    dishes: ["意面", "提拉米苏", "意式浓缩"],
  },
];

export function Food() {
  const [selectedCard, setSelectedCard] = useState<FoodCard | null>(null);
  const [filter, setFilter] = useState<"all" | 5 | 4>("all");

  const filteredCards = filter === "all"
    ? foodCards
    : foodCards.filter(card => card.rating === filter);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl mb-4">美食打卡</h1>
          <p className="text-muted-foreground text-lg">品味我们一起分享的美味时光</p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card text-muted-foreground border border-border hover:border-primary"
            }`}
          >
            全部
          </button>
          <button
            onClick={() => setFilter(5)}
            className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
              filter === 5
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card text-muted-foreground border border-border hover:border-primary"
            }`}
          >
            <Star className="w-4 h-4 fill-current" />5 星
          </button>
          <button
            onClick={() => setFilter(4)}
            className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
              filter === 4
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card text-muted-foreground border border-border hover:border-primary"
            }`}
          >
            <Star className="w-4 h-4 fill-current" />4 星
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCard(card)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.restaurant}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm">{card.rating}.0</span>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl mb-2">{card.restaurant}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{card.cuisine}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.dishes.slice(0, 3).map((dish) => (
                      <span
                        key={dish}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{card.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{card.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCard(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-3xl overflow-hidden max-w-2xl w-full border border-border shadow-2xl"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={selectedCard.image}
                alt={selectedCard.restaurant}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span>{selectedCard.rating}.0</span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl mb-2">{selectedCard.restaurant}</h2>
                <p className="text-lg text-muted-foreground mb-3">{selectedCard.cuisine}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedCard.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedCard.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedCard.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm mb-3 text-muted-foreground">推荐菜品</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCard.dishes.map((dish) => (
                    <span
                      key={dish}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-xl"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCard(null)}
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
