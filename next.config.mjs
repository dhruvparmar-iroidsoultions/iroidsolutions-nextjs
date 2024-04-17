/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iroiddev.iroidsolutions.com",
        port: "",
        pathname: "/iroid-website/public/storage/**",
      },
    ],
  },
};

export default nextConfig;
