export default function QuoteSection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-secondary to-primary/5 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-foreground leading-relaxed animate-fade-in">
          "Hành trình hiểu mình bắt đầu từ một cuộc trò chuyện."
        </p>
      </div>
    </section>
  );
}
