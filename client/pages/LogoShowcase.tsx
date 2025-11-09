import Logo from "@/components/Logo";

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-primary/5 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-foreground mb-4">
            INNER.AI Logo Variations
          </h1>
          <p className="text-lg text-muted-foreground">
            Three professional, minimalist designs for emotional intelligence
          </p>
        </div>

        {/* Logo variations grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Variation 1: Default - Human head + glowing heart */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-white border-2 border-primary/20 hover:border-primary/50 transition-all">
            <div className="mb-8 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
              <Logo variant="default" size={160} showText={false} />
            </div>
            <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
              Variation 1: Heart & Mind
            </h3>
            <p className="text-muted-foreground text-center text-sm">
              Human silhouette with glowing heart, symbolizing emotional intelligence and mindfulness
            </p>
            <div className="mt-6 pt-6 border-t border-primary/20 w-full">
              <Logo variant="default" size={80} showText={true} />
            </div>
          </div>

          {/* Variation 2: Abstract - Circular AI brain */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-white border-2 border-primary/20 hover:border-primary/50 transition-all">
            <div className="mb-8 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
              <Logo variant="abstract" size={160} showText={false} />
            </div>
            <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
              Variation 2: AI Brain
            </h3>
            <p className="text-muted-foreground text-center text-sm">
              Abstract circular AI brain with soft light core and circuit lines, representing intelligent connection
            </p>
            <div className="mt-6 pt-6 border-t border-primary/20 w-full">
              <Logo variant="abstract" size={80} showText={true} />
            </div>
          </div>

          {/* Variation 3: Infinity - Heart shaped infinity */}
          <div className="flex flex-col items-center p-8 rounded-2xl bg-white border-2 border-primary/20 hover:border-primary/50 transition-all">
            <div className="mb-8 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
              <Logo variant="infinity" size={160} showText={false} />
            </div>
            <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
              Variation 3: Infinity Heart
            </h3>
            <p className="text-muted-foreground text-center text-sm">
              Minimal line-based infinity symbol shaped like a heart, representing eternal healing
            </p>
            <div className="mt-6 pt-6 border-t border-primary/20 w-full">
              <Logo variant="infinity" size={80} showText={true} />
            </div>
          </div>
        </div>

        {/* Size variations showcase */}
        <div className="bg-white rounded-2xl p-12 border-2 border-primary/20">
          <h2 className="text-2xl font-bold font-poppins text-foreground mb-8 text-center">
            Size Variations (Default Style)
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[48, 64, 96, 128, 160].map((sz) => (
              <div key={sz} className="flex flex-col items-center gap-2">
                <div className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                  <Logo variant="default" size={sz} showText={false} />
                </div>
                <span className="text-xs text-muted-foreground font-mono">{sz}px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Color palette info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg mb-3" style={{ backgroundColor: "#B7A6F6" }}></div>
            <span className="font-poppins font-semibold text-foreground">Primary</span>
            <span className="text-sm text-muted-foreground">#B7A6F6</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg mb-3" style={{ backgroundColor: "#7A68B6" }}></div>
            <span className="font-poppins font-semibold text-foreground">Secondary</span>
            <span className="text-sm text-muted-foreground">#7A68B6</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg mb-3" style={{ backgroundColor: "#F7F6FB" }}></div>
            <span className="font-poppins font-semibold text-foreground">Accent</span>
            <span className="text-sm text-muted-foreground">#F7F6FB</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg mb-3" style={{ backgroundColor: "#2E2E2E" }}></div>
            <span className="font-poppins font-semibold text-foreground">Text</span>
            <span className="text-sm text-muted-foreground">#2E2E2E</span>
          </div>
        </div>

        {/* Usage guide */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 border-l-4" style={{ borderColor: "#B7A6F6" }}>
          <h3 className="text-xl font-bold font-poppins text-foreground mb-4">📐 Usage Guide</h3>
          <ul className="space-y-2 text-foreground text-sm">
            <li>• <strong>Hero Section:</strong> Use <code className="bg-white px-2 py-1 rounded">&lt;Logo size={"{200}"} /&gt;</code></li>
            <li>• <strong>Header/Nav:</strong> Use <code className="bg-white px-2 py-1 rounded">&lt;Logo size={"{48}"} /&gt;</code></li>
            <li>• <strong>Footer:</strong> Use <code className="bg-white px-2 py-1 rounded">&lt;Logo size={"{80}"} showText={"{true}"} /&gt;</code></li>
            <li>• <strong>Favicon:</strong> Export symbol without text at 1024x1024px</li>
            <li>• <strong>App Icon:</strong> Use any variant as square icon at 1024x1024px</li>
          </ul>
        </div>

        {/* Back button */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
