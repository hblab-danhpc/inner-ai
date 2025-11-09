# INNER.AI — Landing Page (Coming Soon)

> "AI hiểu bạn – để bạn hiểu chính mình."

Landing page dự án INNER.AI được xây dựng trên nền tảng Fusion Starter - một template React full-stack production-ready với Express server tích hợp, React Router 6, TypeScript, và các công nghệ hiện đại.

## ✨ Công nghệ sử dụng

- **Package Manager**: PNPM
- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite
- **Styling**: TailwindCSS 3 + Radix UI
- **Backend**: Express server tích hợp với Vite dev server
- **Testing**: Vitest
- **Icons**: Lucide React
- **Form**: React Hook Form + Zod validation
- **Deployment**: Netlify

## 📁 Cấu trúc dự án

```
client/                   # React SPA frontend
├── pages/                # Các component route
│   ├── Index.tsx         # Trang chủ
│   └── NotFound.tsx      # Trang 404
├── components/           # Các component
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── AppDemoSection.tsx
│   ├── ComingSoonSection.tsx
│   ├── QuoteSection.tsx
│   ├── FooterSection.tsx
│   └── ui/               # Thư viện UI components
├── App.tsx               # Entry point và routing setup
└── global.css            # TailwindCSS theming

server/                   # Express API backend
├── index.ts              # Server setup
└── routes/               # API handlers

shared/                   # Types dùng chung
└── api.ts                # Shared API interfaces

netlify/                  # Netlify serverless functions
└── functions/
    └── api.ts
```

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- Node.js 18+
- PNPM (khuyến nghị)

### Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd flare-world

# Cài đặt dependencies
pnpm install
```

### Development

```bash
# Chạy dev server (client + server trên cùng port 8080)
pnpm dev

# Kiểm tra TypeScript
pnpm typecheck

# Chạy tests
pnpm test

# Format code
pnpm format.fix
```

Server sẽ chạy tại: `http://localhost:8080`

## 🏗️ Build & Deployment

### Build cho production

```bash
# Build cả client và server
pnpm build

# Hoặc build riêng
pnpm build:client  # Build client
pnpm build:server  # Build server

# Chạy production server
pnpm start
```

### Deploy lên Netlify

Dự án đã được cấu hình sẵn để deploy lên Netlify:

1. Push code lên GitHub/GitLab
2. Kết nối repository với Netlify
3. Netlify sẽ tự động build và deploy

**Hoặc** sử dụng Netlify CLI:

```bash
netlify deploy --prod
```

## 🎨 Tùy chỉnh giao diện

### Theme & Colors

Cấu hình theme trong `client/global.css` và `tailwind.config.ts`:

```css
/* client/global.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* Thêm màu sắc của bạn */
}
```

### UI Components

Sử dụng các components có sẵn từ `client/components/ui/`:

```typescript
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

<Button variant="default">Click me</Button>
```

### Utility Class

Sử dụng hàm `cn()` để kết hợp classes:

```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className
)}
```

## 🔌 API Routes

### Thêm API endpoint mới

1. **Tạo shared interface** (tùy chọn) trong `shared/api.ts`:

```typescript
export interface MyResponse {
  message: string;
}
```

2. **Tạo route handler** trong `server/routes/my-route.ts`:

```typescript
import { RequestHandler } from "express";
import { MyResponse } from "@shared/api";

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyResponse = {
    message: 'Hello!'
  };
  res.json(response);
};
```

3. **Đăng ký route** trong `server/index.ts`:

```typescript
import { handleMyRoute } from "./routes/my-route";

app.get("/api/my-endpoint", handleMyRoute);
```

4. **Sử dụng trong React**:

```typescript
const response = await fetch('/api/my-endpoint');
const data: MyResponse = await response.json();
```

### API endpoints có sẵn

- `GET /api/ping` - Ping endpoint
- `GET /api/demo` - Demo endpoint

## 🛣️ Routing

Routing được quản lý bởi React Router 6 trong `client/App.tsx`:

### Thêm route mới

1. Tạo component trong `client/pages/MyPage.tsx`
2. Thêm route trong `client/App.tsx`:

```typescript
<Route path="/my-page" element={<MyPage />} />
```

**Lưu ý**: Luôn thêm routes custom phía trên route catch-all `*`.

## 📦 Path Aliases

- `@/*` - Client folder
- `@shared/*` - Shared folder

## 🧪 Testing

```bash
# Chạy tests
pnpm test

# Watch mode
pnpm test -- --watch
```

## 📝 Scripts

```bash
pnpm dev           # Dev server với hot reload
pnpm build         # Production build
pnpm start         # Chạy production server
pnpm typecheck     # TypeScript validation
pnpm test          # Chạy tests
pnpm format.fix    # Format code với Prettier
```

## 🌟 Features

- ✅ Single-port development (port 8080)
- ✅ Hot reload cho cả client và server
- ✅ TypeScript type-safety toàn bộ project
- ✅ UI component library đầy đủ (Radix UI)
- ✅ TailwindCSS 3 với theming system
- ✅ Form validation với React Hook Form + Zod
- ✅ API type-safe với shared interfaces
- ✅ Production-ready với Netlify deployment
- ✅ Vitest testing setup

## 📄 License

[Thêm license của bạn]

## 👥 Contributors

[Thêm thông tin contributors]

---

Built with ❤️ using Fusion Starter
