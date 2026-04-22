import { motion } from "motion/react";
import { Calendar, Heart, Image as ImageIcon } from "lucide-react";

interface DiaryEntry {
  id: number;
  date: string;
  title: string;
  content: string;
  mood: string;
  image?: string;
  tags: string[];
}

const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: "2024.01.01",
    title: "新的开始",
    content: "今天是我们在一起的第一天，一切都是那么美好。我们约定要一起走过人生的每一个四季，记录下每一个值得纪念的瞬间。",
    mood: "💕",
    image: "https://images.unsplash.com/photo-1620455970942-5fca5840d5ee?w=800",
    tags: ["纪念日", "开始"],
  },
  {
    id: 2,
    date: "2024.02.14",
    title: "情人节快乐",
    content: "第一个情人节，你准备了惊喜，我收到了你精心挑选的礼物。那一刻，我知道，你就是我要找的人。",
    mood: "❤️",
    image: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?w=800",
    tags: ["情人节", "惊喜"],
  },
  {
    id: 3,
    date: "2024.03.20",
    title: "巴黎之旅",
    content: "我们来到了梦想中的巴黎，在埃菲尔铁塔下许下永恒的诺言。这座浪漫之都见证了我们的爱情。",
    mood: "🗼",
    image: "https://images.unsplash.com/photo-1641849460106-c7b413a622c7?w=800",
    tags: ["旅行", "巴黎"],
  },
  {
    id: 4,
    date: "2024.04.15",
    title: "樱花季的京都",
    content: "漫步在樱花树下，粉色的花瓣随风飘落。我们在古都的街道上，感受着岁月的静谧和美好。",
    mood: "🌸",
    image: "https://images.unsplash.com/photo-1715614177635-8d1f3917671d?w=800",
    tags: ["旅行", "樱花"],
  },
  {
    id: 5,
    date: "2024.06.20",
    title: "爱琴海的日落",
    content: "在圣托里尼，我们看到了最美的日落。天空被染成了金色和粉色，那一刻，时间仿佛静止了。",
    mood: "🌅",
    tags: ["旅行", "日落"],
  },
  {
    id: 6,
    date: "2024.09.10",
    title: "纽约的秋天",
    content: "繁华的都市，我们手牵手走过中央公园。落叶纷飞，秋意渐浓，但有你在身边，一切都是温暖的。",
    mood: "🍂",
    tags: ["旅行", "秋天"],
  },
  {
    id: 7,
    date: "2024.10.20",
    title: "童话般的布拉格",
    content: "走在石板路上，仿佛穿越到了中世纪。这座城市像童话一样美丽，而我们的爱情，也像童话一样浪漫。",
    mood: "🏰",
    tags: ["旅行", "童话"],
  },
  {
    id: 8,
    date: "2024.12.25",
    title: "圣诞快乐",
    content: "第一个圣诞节，我们一起装饰圣诞树，交换礼物，在温馨的氛围中度过。期待未来的每一个节日都能与你相伴。",
    mood: "🎄",
    tags: ["节日", "圣诞"],
  },
];

export function Diary() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl mb-4">时光日记</h1>
          <p className="text-muted-foreground text-lg">书写属于我们的故事</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted hidden sm:block" />

          <div className="space-y-12">
            {diaryEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden sm:block" />

                <div className="sm:ml-20">
                  <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {entry.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{entry.mood}</span>
                          <div>
                            <h3 className="text-2xl mb-1">{entry.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{entry.date}</span>
                            </div>
                          </div>
                        </div>
                        <Heart className="w-5 h-5 text-primary fill-primary" />
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {entry.content}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-muted/10 rounded-2xl border border-border">
            <p className="text-muted-foreground">
              未完待续... 我们的故事还在继续 ✨
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
