# Mahi's Portfolio Website

##Live Link: https://mahi-s-portfolio.vercel.app/

A modern, responsive portfolio website built with Next.js, showcasing my skills as a Full-Stack Developer.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with dark theme and teal/cyan accents
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Animations**: GSAP-powered animations and smooth transitions
- **Project Showcase**: Detailed project pages with live demos and source code
- **Contact Form**: Functional contact form with EmailJS integration
- **Social Integration**: Links to GitHub, LinkedIn, and Twitter profiles
- **SEO Optimized**: Enhanced metadata, sitemap, and robots.txt
- **Performance Optimized**: Code splitting, lazy loading, and optimized animations
- **Secure**: Environment variables for sensitive data, input validation

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 18, JavaScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: GSAP, Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📱 Sections

1. **Hero Section**: Introduction with professional designation and resume download
2. **About Me**: Personal introduction and programming journey
3. **Skills**: Technical skills with visual representations
4. **Projects**: Featured projects with detailed information
5. **Education**: Academic background and qualifications
6. **Contact**: Contact form and social media links

## 🎯 Projects Featured

### LearnLoop - Learning Management System

- **Tech Stack**: React, Node.js, MongoDB, Express, Firebase
- **Features**: Role-based authentication, course management, payment integration
- **Live Demo**: [https://learn-loop-edcf7.web.app](https://learn-loop-edcf7.web.app)

### Ticket Bari - Ticket Booking Platform

- **Tech Stack**: React, Vite, Firebase, Stripe, TanStack Query
- **Features**: Multi-role system, real-time inventory, payment processing
- **Live Demo**: [https://ticket-bari.web.app](https://ticket-bari.web.app)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mahi8026/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create environment variables:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Configuration

To use the contact form, configure EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name
4. Get your service ID, template ID, and public key
5. Add them to your `.env.local` file

## 🏗️ Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📊 Performance Optimizations

- ✅ Code splitting with dynamic imports
- ✅ Lazy loading of heavy components
- ✅ Optimized animations
- ✅ Image optimization ready
- ✅ Reduced bundle size
- ✅ SEO optimized

## 🔒 Security Features

- ✅ Environment variables for sensitive data
- ✅ Input validation and sanitization
- ✅ XSS protection
- ✅ Email format validation
- ✅ Error boundaries

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Mahi Rahman** - Full-Stack Developer

- GitHub: [@mahi8026](https://github.com/mahi8026)
- LinkedIn: [mahimrahman-dev](https://www.linkedin.com/in/mahimrahman-dev/)
- Email: mahimrahman07@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- GSAP for smooth animations
- Tailwind CSS for utility-first styling
- EmailJS for email service

---

Built with ❤️ using Next.js and modern web technologies.

## 📝 Recent Updates

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes and improvements.
