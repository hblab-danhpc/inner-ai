export default function AboutSection() {
  const features = [
    {
      icon: "💬",
      title: "Lắng nghe & phản hồi bằng AI",
      description: "Chia sẻ cảm xúc của bạn với mentor ảo thông minh",
    },
    {
      icon: "🧭",
      title: "Định hướng nghề nghiệp & cảm xúc",
      description: "Khám phá con đường phát triển sự nghiệp của bạn",
    },
    {
      icon: "💜",
      title: "Phát triển nội tâm bền vững",
      description: "Xây dựng sự cân bằng và hạnh phúc lâu dài",
    },
  ];

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-secondary via-primary/5 to-secondary overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-5 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-foreground mb-6">
            INNER.AI là gì?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            INNER.AI là mentor ảo đầu tiên tại Việt Nam được tạo ra để lắng nghe, phản hồi, và đồng hành cùng bạn trên hành trình hiểu bản thân.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              className="animate-fade-in-up opacity-0 fill-mode-forwards group"
            >
              <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 h-full">
                <div className="text-5xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:animate-bounce inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-poppins text-foreground mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
