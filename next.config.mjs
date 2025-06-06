import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    assetPrefix: process.env.ENV === "dev" ? "" : "https://docs.tip.dev"
};

export default withMDX(config);
