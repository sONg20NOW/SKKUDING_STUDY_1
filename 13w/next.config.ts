import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://data1.pokemonkorea.co.kr/**')],
  },
}

export default nextConfig;
