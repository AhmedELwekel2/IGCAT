/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // Allow dev resources (JS/HMR) to load when opening the site from other
  // devices on the local network, e.g. http://192.168.1.x:3000
  allowedDevOrigins: ["192.168.1.27", "192.168.1.0/24"],
};

export default nextConfig;
