import LogoImage from "./LogoImage";

export default function FooterSection() {
  const socialLinks = [
    { icon: "📱", name: "Instagram", url: "#" },
    { icon: "🎵", name: "TikTok", url: "#" },
    { icon: "💼", name: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-t from-primary/20 to-primary/5 border-t border-primary/20">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main content */}
        <div className="text-center mb-12 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <LogoImage size="medium" />
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-3xl hover:scale-110 transition-transform duration-300 hover:animate-float"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright text */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            © 2025 INNER.AI — Made with 💜 for those who seek peace within.
          </p>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            Trên hành trình tìm kiếm sự hiểu biết và bình yên nội tâm
          </p>
        </div>
      </div>
    </footer>
  );
}
