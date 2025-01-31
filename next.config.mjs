/** @type {import('next').NextConfig} */
const nextConfig = {
    async middleware(req) {
      return await import('./middleware').then((mod) => mod.default(req));
    },
  };
  
  export default nextConfig;