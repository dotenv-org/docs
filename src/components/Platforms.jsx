import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

import { DigitalOceanIcon } from '@/components/icons/DigitalOceanIcon'
import { DockerIcon } from '@/components/icons/DockerIcon'
import { FlyIcon } from '@/components/icons/FlyIcon'
import { SupabaseIcon } from '@/components/icons/SupabaseIcon'
import { HerokuIcon } from '@/components/icons/HerokuIcon'
import { NetlifyIcon } from '@/components/icons/NetlifyIcon'
import { RailwayIcon } from '@/components/icons/RailwayIcon'
import { RenderIcon } from '@/components/icons/RenderIcon'
import { VercelIcon } from '@/components/icons/VercelIcon'
import { EdgioIcon } from '@/components/icons/EdgioIcon'
import { Cloud66Icon } from '@/components/icons/Cloud66Icon'
import { NorthflankIcon } from '@/components/icons/NorthflankIcon'
import { AwsIcon } from '@/components/icons/AwsIcon'
import { GatsbyIcon } from '@/components/icons/GatsbyIcon'

export function Platforms() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="platforms">
        Platforms
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="digital-ocean" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Digital Ocean
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Digital Ocean</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/digital-ocean" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <DigitalOceanIcon className="h-9 w-9 text-[#0080FF]"/>
        </div>
        <div key="docker" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Docker
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App with Docker</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/docker" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <DockerIcon className="h-9 w-9 text-[#2496ED]"/>
        </div>
        <div key="fly" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Fly
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Fly.io</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/fly" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <FlyIcon className="h-9 w-9 text-[#7B3BE2]"/>
        </div>
        <div key="heroku" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Heroku
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Heroku</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/heroku" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <HerokuIcon className="h-9 w-9 text-[#430098]"/>
        </div>
        <div key="netlify" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Netlify
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Next.js App to Netlify</p>
            <p className="mt-4"><Button href="/docs/frameworks/nextjs/netlify" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <NetlifyIcon className="h-9 w-9 text-[#00C7B7]"/>
        </div>
        <div key="railway" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Railway
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Railway</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/railway" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <RailwayIcon className="h-9 w-9 text-[#0B0D0E] dark:invert"/>
        </div>
        <div key="render" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Render
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Render</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/render" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <RenderIcon className="h-9 w-9 text-[#46E3B7]"/>
        </div>
        <div key="vercel" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Vercel
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Vercel</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/vercel" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <VercelIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="gatsby-edge" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Gatsby Edge Network
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Gatsby.js App to Gatsby Edge Network</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/vercel" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <GatsbyIcon className="h-9 w-9 text-[#663399]"/>
        </div>
        <div key="aws-lambda" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              AWS Lambda
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to AWS Lambda</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/aws-lambda" variant="text" arrow="right">Read more</Button></p>
          </div>
          <AwsIcon className="h-9 w-9 text-[#FF9900]"/>
        </div>
        <div key="cloud66" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Cloud66
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Cloud66</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/cloud66" variant="text" arrow="right">Read more</Button></p>
          </div>
          <Cloud66Icon className="h-9 w-9 text-[#3C72B9]"/>
        </div>
        <div key="northflank" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Northflank
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Next.js App to Northflank</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/northflank" variant="text" arrow="right">Read more</Button></p>
          </div>
          <NorthflankIcon className="h-9 w-9 text-[#01E3C5]"/>
        </div>
        <div key="edgio" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Edge.io
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Next.js App to Edgio</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/edgio" variant="text" arrow="right">Read more</Button></p>
          </div>
          <EdgioIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="supabase" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Supabase
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Node.js App to Supabase</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/supabase" variant="text" arrow="right">Read more</Button></p>
          </div>
          <SupabaseIcon className="h-9 w-9 text-[#3FCF8E]"/>
        </div>
      </div>
    </div>
  )
}
