// https://nextjs.org/docs/api-reference/next.config.js/introduction
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'd33wubrfki0l68.cloudfront.net',
      'avatars.githubusercontent.com',
    ],
  },
};

// const withMDX = createMDX({
//   extension: /\.(md|mdx)$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     providerImportSource: '@mdx-js/react',
//   },
// });


module.exports = nextConfig;