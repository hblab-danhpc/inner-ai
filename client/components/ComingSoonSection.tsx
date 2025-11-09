import { useState } from "react";

export default function ComingSoonSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-primary/20 to-primary/10 overflow-hidden">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 text-5xl animate-float">💬</div>
        <div className="absolute bottom-20 right-16 text-6xl animate-float-slow">💡</div>
        <div className="absolute top-1/3 right-10 text-5xl animate-float">💭</div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Main title */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-foreground mb-3">
            Chúng tôi sắp sẵn sàng 💫
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in">
          Đăng ký ngay để trở thành người đầu tiên trải nghiệm INNER.AI khi ra mắt.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 animate-fade-in"
        >
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-4 rounded-lg bg-white text-foreground placeholder-muted-foreground border-2 border-primary/30 focus:border-primary focus:outline-none transition-all w-full sm:w-64 focus:shadow-lg focus:shadow-primary/40"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/50 whitespace-nowrap"
          >
            Notify Me
          </button>
        </form>

        {/* Confirmation message */}
        {submitted && (
          <div className="bg-white/80 backdrop-blur-sm border-2 border-primary/30 rounded-lg p-6 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl mb-2">🌷</div>
              <p className="text-foreground font-semibold text-lg">
                Cảm ơn bạn!
              </p>
              <p className="text-muted-foreground mt-2">
                INNER.AI sẽ sớm liên hệ khi ra mắt
              </p>
            </div>
          </div>
        )}

        {/* Subtext */}
        {!submitted && (
          <p className="text-sm text-muted-foreground animate-fade-in">
            Bạn sẽ nhận được thông báo và ưu đãi đặc biệt khi ứng dụng ra mắt.
          </p>
        )}
      </div>
    </section>
  );
}
