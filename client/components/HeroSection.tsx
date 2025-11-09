import { useState } from "react";
import LogoImage from "./LogoImage";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/30 to-secondary z-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-slow opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
        {/* Floating illustration */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-96 h-96 sm:w-full sm:h-full max-w-md max-h-md bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative">
              <LogoImage size="xlarge" showAnimation={true} />
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          AI hiểu bạn – để bạn hiểu chính mình.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Ứng dụng mentor ảo giúp bạn thấu hiểu cảm xúc, chữa lành và phát triển bản thân.
        </p>

        {/* CTA Form */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-3 rounded-lg bg-white text-foreground placeholder-muted-foreground border-2 border-primary/30 focus:border-primary focus:outline-none transition-all w-full sm:w-64 focus:shadow-xl focus:shadow-primary/50 hover:shadow-lg hover:shadow-primary/30"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-accent/60 active:scale-95 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Confirmation message */}
        {submitted && (
          <div className="text-center text-accent font-poppins text-lg animate-fade-in">
            ✨ Cảm ơn bạn! INNER.AI sẽ sớm liên hệ khi ra mắt 🌷
          </div>
        )}

        {/* Secondary CTA */}
        <button className="mt-8 px-6 py-3 border-2 border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5 font-semibold rounded-lg transition-all duration-300 animate-fade-in hover:scale-105 active:scale-95" style={{ animationDelay: "0.7s" }}>
          Khám phá ý tưởng
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
