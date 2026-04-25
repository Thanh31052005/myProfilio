# myProfilio

A personal portfolio website showcasing my projects and work. Built with modern web technologies for fast development and seamless deployment.

---

# 📋 Table of Contents

- [English Version](#english-version)
- [Phiên bản Tiếng Việt](#phiên-bản-tiếng-việt)

---

# English Version

## 🚀 Project Overview

**myProfilio** is a modern personal portfolio website that presents my professional profile and collection of projects. The frontend is built with cutting-edge technologies to ensure optimal performance and developer experience.

### Project Goals
- Clean, scalable, and maintainable code structure
- Fast development workflow with hot reload
- Containerized deployment with Docker
- Easy backend API integration
- Responsive and accessible user interface

---

## 🛠️ Technology Stack

### Frontend Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | ^19.2.5 | Modern UI library with hooks & concurrent features |
| **Vite** | ^8.0.10 | Lightning-fast build tool with instant HMR |
| **Node.js** | 24-slim | Runtime environment (Docker image) |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code quality & linting |
| **React Router** (optional) | Client-side routing & navigation |
| **npm** | Package management |

### Deployment
| Tool | Purpose |
|------|---------|
| **Docker** | Containerization for consistent environments |
| **Docker Compose** | Multi-service orchestration |

### Development Dependencies
- `@vitejs/plugin-react` - React plugin for Vite
- `@types/react` & `@types/react-dom` - TypeScript types
- `eslint` & related plugins - Code linting
- `globals` - Global variable definitions

---

## 📂 Project Structure

```
myProfilio/
├── frontend-react/
│   ├── public/                 # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── assets/             # Images, fonts, static resources
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Page components (future routing)
│   │   ├── App.jsx             # Main application component
│   │   ├── App.css             # Global styles
│   │   └── main.jsx            # React entry point
│   ├── index.html              # HTML template
│   ├── package.json            # Dependencies & scripts
│   ├── vite.config.js          # Vite configuration
│   ├── eslint.config.js        # ESLint rules
│   ├── docker-compose.yml      # Docker Compose services
│   └── .dockerignore           # Excluded files for Docker
├── .git/                       # Git version control
└── README.md                   # This file
```

---

## ⚙️ System Requirements

**Local Development:**
- Node.js >= 16
- npm or yarn
- Git

**Docker Deployment:**
- Docker >= 20.10
- Docker Compose >= 1.29

---

## 🚀 Getting Started

### Option 1: Local Development (npm)

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd myProfilio/frontend-react
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Run Development Server
```bash
npm run dev
```

#### 4. Open in Browser
Navigate to `http://localhost:5173`

---

### Option 2: Docker Compose (Recommended)

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd myProfilio/frontend-react
```

#### 2. Start with Docker Compose
```bash
docker compose up
```

The application will be available at `http://localhost:5173`

#### 3. Stop the Container
```bash
docker compose down
```

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `docker compose up` | Start development environment in Docker |
| `docker compose down` | Stop and remove containers |

---

## 🔌 Environment Configuration

Create a `.env` file in the `frontend-react` directory:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=My Portfolio
```

Access in your React code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

**Important:** Never commit `.env` to version control. Use `.env.example` instead:
```bash
cp .env.example .env
```

---

## 💡 Key Features & Notes

- ⚡ **Hot Module Replacement (HMR)** - See changes instantly without page reload
- 📦 **Optimized Bundle** - Vite produces small, efficient production builds
- 🐳 **Containerized** - Easy deployment across different environments
- 🎨 **Modern React** - Using React 19 with latest features
- 🔧 **Code Quality** - ESLint ensures consistent code style

---

## 📌 Future Development Roadmap

- [ ] Add React Router for multi-page navigation
- [ ] Connect backend API endpoints
- [ ] Implement state management (Zustand or Redux)
- [ ] Add authentication & authorization
- [ ] Create portfolio showcase section
- [ ] Implement contact form
- [ ] Add dark mode support
- [ ] Performance optimizations (lazy loading, code splitting)

---

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
# Linux/Mac
lsof -i :5173

# Windows
netstat -ano | findstr :5173
```

### Docker build issues
```bash
# Clear Docker cache
docker compose down -v

# Rebuild without cache
docker compose up --build
```

### Node modules conflicts
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 👨‍💻 Author

**Phạm Duy Thành**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

# Phiên bản Tiếng Việt

## 🚀 Giới thiệu Dự Án

**myProfilio** là một website portfolio cá nhân để giới thiệu hồ sơ chuyên nghiệp và các dự án của tôi. Frontend được xây dựng bằng các công nghệ hiện đại nhất để đảm bảo hiệu suất cao và trải nghiệm phát triển tuyệt vời.

### Mục Tiêu Dự Án
- Cấu trúc code sạch, có thể mở rộng và dễ bảo trì
- Quy trình phát triển nhanh với hot reload
- Triển khai containerized bằng Docker
- Dễ dàng tích hợp API backend
- Giao diện responsive và dễ tiếp cận

---

## 🛠️ Công Nghệ Sử Dụng

### Framework Frontend
| Công Nghệ | Phiên Bản | Mục Đích |
|-----------|----------|---------|
| **React** | ^19.2.5 | Thư viện UI hiện đại với hooks & tính năng concurrent |
| **Vite** | ^8.0.10 | Công cụ build siêu nhanh với HMR tức thì |
| **Node.js** | 24-slim | Môi trường runtime (Docker image) |

### Công Cụ Phát Triển
| Công Cụ | Mục Đích |
|---------|---------|
| **ESLint** | Kiểm tra chất lượng code & linting |
| **React Router** (tùy chọn) | Routing & navigation phía client |
| **npm** | Quản lý packages |

### Triển Khai
| Công Cụ | Mục Đích |
|---------|---------|
| **Docker** | Containerization cho môi trường nhất quán |
| **Docker Compose** | Orchestration đa dịch vụ |

### Các Dependency Phát Triển
- `@vitejs/plugin-react` - React plugin cho Vite
- `@types/react` & `@types/react-dom` - TypeScript types
- `eslint` & plugins liên quan - Code linting
- `globals` - Định nghĩa biến global

---

## 📂 Cấu Trúc Dự Án

```
myProfilio/
├── frontend-react/
│   ├── public/                 # Các tài nguyên tĩnh (favicon, robots.txt)
│   ├── src/
│   │   ├── assets/             # Hình ảnh, fonts, tài nguyên tĩnh
│   │   ├── components/         # React components tái sử dụng
│   │   ├── pages/              # Các trang (cho routing tương lai)
│   │   ├── App.jsx             # Component ứng dụng chính
│   │   ├── App.css             # Styles toàn cục
│   │   └── main.jsx            # Entry point của React
│   ├── index.html              # HTML template
│   ├── package.json            # Dependencies & scripts
│   ├── vite.config.js          # Cấu hình Vite
│   ├── eslint.config.js        # Quy tắc ESLint
│   ├── docker-compose.yml      # Docker Compose services
│   └── .dockerignore           # Các file loại trừ cho Docker
├── .git/                       # Kiểm soát phiên bản Git
└── README.md                   # File này
```

---

## ⚙️ Yêu Cầu Hệ Thống

**Phát Triển Cục Bộ:**
- Node.js >= 16
- npm hoặc yarn
- Git

**Triển Khai Docker:**
- Docker >= 20.10
- Docker Compose >= 1.29

---

## 🚀 Bắt Đầu

### Tùy Chọn 1: Phát Triển Cục Bộ (npm)

#### 1. Clone Repository
```bash
git clone <repository-url>
cd myProfilio/frontend-react
```

#### 2. Cài Đặt Dependencies
```bash
npm install
```

#### 3. Chạy Development Server
```bash
npm run dev
```

#### 4. Mở trong Trình Duyệt
Truy cập `http://localhost:5173`

---

### Tùy Chọn 2: Docker Compose (Được Khuyến Nghị)

#### 1. Clone Repository
```bash
git clone <repository-url>
cd myProfilio/frontend-react
```

#### 2. Khởi Động với Docker Compose
```bash
docker compose up
```

Ứng dụng sẽ có sẵn tại `http://localhost:5173`

#### 3. Dừng Container
```bash
docker compose down
```

---

## 📝 Các Lệnh Có Sẵn

| Lệnh | Mô Tả |
|------|-------|
| `npm run dev` | Khởi động development server với hot reload |
| `npm run build` | Build production bundle tối ưu |
| `npm run preview` | Xem trước production build cục bộ |
| `npm run lint` | Chạy ESLint để kiểm tra chất lượng code |
| `docker compose up` | Khởi động môi trường phát triển trong Docker |
| `docker compose down` | Dừng và xóa containers |

---

## 🔌 Cấu Hình Môi Trường

Tạo file `.env` trong thư mục `frontend-react`:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=My Portfolio
```

Truy cập trong code React:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

---

## 💡 Các Tính Năng Chính & Ghi Chú

- ⚡ **Hot Module Replacement (HMR)** - Xem thay đổi tức thì mà không cần reload trang
- 📦 **Bundle Tối Ưu** - Vite tạo ra các production builds nhỏ gọn, hiệu quả
- 🐳 **Containerized** - Dễ dàng triển khai trên các môi trường khác nhau
- 🎨 **React Hiện Đại** - Sử dụng React 19 với các tính năng mới nhất
- 🔧 **Kiểm Tra Chất Lượng** - ESLint đảm bảo style code nhất quán

---

## 📌 Lộ Trình Phát Triển Tương Lai

- [ ] Thêm React Router cho điều hướng nhiều trang
- [ ] Kết nối các endpoint API backend
- [ ] Triển khai state management (Zustand hoặc Redux)
- [ ] Thêm authentication & authorization
- [ ] Tạo phần giới thiệu portfolio
- [ ] Triển khai contact form
- [ ] Thêm hỗ trợ dark mode
- [ ] Tối ưu hóa hiệu suất (lazy loading, code splitting)

---

## 🐛 Khắc Phục Sự Cố

### Port 5173 đã được sử dụng
```bash
# Linux/Mac
lsof -i :5173

# Windows
netstat -ano | findstr :5173
```

### Vấn đề build Docker
```bash
# Xóa Docker cache
docker compose down -v

# Rebuild mà không có cache
docker compose up --build
```

### Xung đột node_modules
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 👨‍💻 Tác Giả

**Phạm Duy Thành**

---

## 📄 Giấy Phép
Dự án này được cấp phép theo[MIT License](LICENSE).

---

**Last Updated:** April 24, 2026  
**Status:** Active Development
