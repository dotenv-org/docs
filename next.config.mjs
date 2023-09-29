import nextMDX from '@next/mdx'
import withSearch from './src/mdx/search.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { recmaPlugins } from './src/mdx/recma.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  images: {
    unoptimized: true, // https://stackoverflow.com/questions/75785972/nextjs-export-folder-out-doesnt-have-index-html
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    scrollRestoration: true,
  },
  exportPathMap: function () {
    return {
      '/docs/integrations/github-actions/nextjs.html': { page: '/docs/integrations/github-actions/nextjs' },
      '/docs/integrations/supabase/nodejs.html': { page: '/docs/integrations/supabase/nodejs' },
      '/docs/integrations/gitlab/ci-quickstart.html': { page: '/docs/integrations/gitlab/ci-quickstart' },
      '/docs/integrations/vercel/vite.html': { page: '/docs/integrations/vercel/vite' },
      '/docs/libraries': { page: '/docs' },
      '/docs-old/tutorials/sync.html': { page: '/docs/tutorials/sync' },
      '/docs-old/security/env-vault.html': { page: '/docs/security/env-vault' },
      '/docs-old/security/env-me.html': { page: '/docs/security/env-me' },
      '/docs-old/languages/nodejs/docker.html': { page: '/docs/languages/nodejs/docker' },
      '/docs-old/languages/nodejs/docker.html': { page: '/docs/languages/nodejs/docker' },
      '/docs-old/languages/python.html': { page: '/docs/languages/python' },
    };
  },
}

export default withSearch(withMDX(nextConfig))
