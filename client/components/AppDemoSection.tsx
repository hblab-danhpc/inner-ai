export default function AppDemoSection() {
  const chatMessages = [
    { type: "user", text: "Tôi cảm thấy rất áp lực từ công việc" },
    { type: "ai", text: "Tôi hiểu điều đó. Áp lực là cảm xúc tự nhiên. Hãy kể cho tôi thêm về những gì làm bạn cảm thấy như vậy." },
    { type: "user", text: "Tôi không biết liệu tôi có đúng hướng không" },
    { type: "ai", text: "Đó là một câu hỏi rất quan trọng. Hãy cùng nhau khám phá những gì thực sự quan trọng với bạn..." },
  ];

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-secondary to-primary/10 overflow-hidden">
      {/* Floating glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-40 delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Trò chuyện cùng mentor ảo
          </h2>
          <p className="text-muted-foreground">
            Trải nghiệm cuộc hội thoại thân thiện và có ý nghĩa
          </p>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center animate-fade-in-up hover:scale-105 transition-transform duration-500">
          <div className="relative w-full max-w-sm">
            {/* Phone frame */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-primary/40 overflow-hidden border-8 border-gray-900 aspect-[9/16]">
              {/* Status bar */}
              <div className="bg-gradient-to-r from-primary to-accent h-8 flex items-center justify-between px-4">
                <span className="text-white text-xs font-semibold">9:41</span>
                <span className="text-white text-xs">●●●●●</span>
              </div>

              {/* Chat content */}
              <div className="h-full bg-gradient-to-b from-primary/5 to-secondary p-4 flex flex-col">
                {/* Header */}
                <div className="bg-primary rounded-2xl p-4 mb-4 text-center">
                  <div className="text-sm font-semibold text-white mb-1">INNER.AI</div>
                  <div className="text-xs text-primary/80">Mentor của bạn</div>
                  <div className="text-xs text-primary/70 mt-1 flex items-center justify-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow"></span>
                    AI đang lắng nghe bạn…
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl text-sm transition-all duration-300 hover:shadow-md ${
                          msg.type === "user"
                            ? "bg-accent text-white hover:shadow-accent/50"
                            : "bg-white text-foreground border border-primary/20 hover:border-primary/50 hover:shadow-primary/20"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input area */}
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Nói với tôi…"
                    className="flex-1 bg-white rounded-full px-4 py-2 text-sm border border-primary/20 focus:border-primary focus:outline-none"
                  />
                  <button className="bg-accent rounded-full p-2 text-white hover:bg-accent/90 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
