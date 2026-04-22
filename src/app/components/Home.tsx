import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MapPin, Image as ImageIcon, Utensils, BookOpen } from "lucide-react";

export function Home() {
  const startDate = new Date("2024-01-01");
  const [days, setDays] = useState(0);

  useEffect(() => {
    const updateDays = () => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      setDays(diff);
    };
    updateDays();
    const interval = setInterval(updateDays, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "旅行足迹",
      path: "/travel",
      icon: MapPin,
      description: "记录我们走过的每一个地方",
      gradient: "from-[#D4A373]/20 to-[#E8D5C4]/20",
    },
    {
      title: "时光相册",
      path: "/gallery",
      icon: ImageIcon,
      description: "珍藏每一个美好瞬间",
      gradient: "from-[#E8D5C4]/20 to-[#C8B5A0]/20",
    },
    {
      title: "美食打卡",
      path: "/food",
      icon: Utensils,
      description: "品味一起分享的美味时光",
      gradient: "from-[#C8B5A0]/20 to-[#B8A391]/20",
    },
    {
      title: "时光日记",
      path: "/diary",
      icon: BookOpen,
      description: "书写属于我们的故事",
      gradient: "from-[#B8A391]/20 to-[#9B8B7E]/20",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 248, 243, 0.3), rgba(251, 248, 243, 0.5)), url('https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3VwbGUlMjByb21hbnRpYyUyMGxvdmUlMjBzdW5zZXR8ZW58MXx8fHwxNzc2NzYyOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
              <span className="text-4xl">❤️</span>
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl mb-6 text-foreground/90 tracking-wide">
            我们的故事
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl sm:text-3xl text-primary mb-16"
          >
            在一起第 <span className="font-serif text-4xl sm:text-5xl mx-2">{days}</span> 天
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/60 backdrop-blur-sm rounded-full border border-border">
              <span className="text-muted-foreground">向下滚动探索更多</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground/90">探索我们的回忆</h2>
          <p className="text-muted-foreground">每一刻都值得被珍藏</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={feature.path}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-8 sm:p-10 backdrop-blur-sm border border-border group cursor-pointer h-full`}
                  >
                    <div className="relative z-10">
                      <div className="w-14 h-14 mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl mb-3 text-foreground">
                        {feature.title}
                      </h3>

                      <p className="text-muted-foreground mb-6">{feature.description}</p>

                      <div className="inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                        <span>查看更多</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-transparent to-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            "时光荏苒，唯有你我相伴。<br />
            每一个平凡的日子，因为有你，都变得不平凡。最爱的小希希"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
