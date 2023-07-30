import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'

import { NextIcon } from '@/components/icons/NextIcon'
import { GatsbyIcon } from '@/components/icons/GatsbyIcon'
import { ExpressIcon } from '@/components/icons/ExpressIcon'
import { RailsIcon } from '@/components/icons/RailsIcon'
import { NuxtIcon } from '@/components/icons/NuxtIcon'
import { FlaskIcon } from '@/components/icons/FlaskIcon'
import { SinatraIcon } from '@/components/icons/SinatraIcon'
import { AstroIcon } from '@/components/icons/AstroIcon'
import { ServerlessIcon } from '@/components/icons/ServerlessIcon'
import { AngularIcon } from '@/components/icons/AngularIcon'
import { RemixIcon } from '@/components/icons/RemixIcon'
import { ViteIcon } from '@/components/icons/ViteIcon'

export function Frameworks() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="frameworks">
        Frameworks
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        <div key="github-actions" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Next.js
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Next.js</p>
            <p className="mt-4 flex gap-x-2">
              <Button href="/docs/frameworks/nextjs" variant="text" arrow="right">Next.js Guides</Button>
            </p>
          </div>
          <NextIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="gatsby" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Gatsby.js
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Gatsby.js</p>
            <p className="mt-4"><Button href="/docs/frameworks/gatsby" variant="text" arrow="right">Gatsby Guides</Button></p>
          </div>
          <GatsbyIcon className="h-9 w-9 text-[#663399]"/>
        </div>
        <div key="express" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Express.js
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Express.js</p>
            <p className="mt-4"><Button href="/docs/frameworks/express" variant="text" arrow="right">Express Guides</Button></p>
          </div>
          <ExpressIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="remix" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Remix
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Remix</p>
            <p className="mt-4"><Button href="/docs/frameworks/remix" variant="text" arrow="right">Remix Guides</Button></p>
          </div>
          <RemixIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="serverless" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Serverless
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Deploy a Serverless App to AWS Lambda</p>
            <p className="mt-4"><Button href="/docs/frameworks/serverless/aws-lambda" variant="text" arrow="right">Read guide</Button></p>
          </div>
          <ServerlessIcon className="h-9 w-9 text-[#FD5750]"/>
        </div>
        <div key="rails" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Ruby on Rails
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Ruby on Rails</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/rails" variant="text" arrow="right">Start</Button></p>
          </div>
          <RailsIcon className="h-9 w-9 text-[#CC0000]"/>
        </div>
        <div key="nuxt" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Nuxt.js
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Nuxt.js</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/nuxtjs" variant="text" arrow="right">Start</Button></p>
          </div>
          <NuxtIcon className="h-9 w-9 text-[#00DC82]"/>
        </div>
        <div key="flask" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Flask
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Flask</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/flask" variant="text" arrow="right">Start</Button></p>
          </div>
          <FlaskIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="sinatra" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Sinatra
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Sinatra</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/sinatra" variant="text" arrow="right">Start</Button></p>
          </div>
          <SinatraIcon className="h-9 w-9 text-[#000000] dark:invert"/>
        </div>
        <div key="astro" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Astro
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Astro.js</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/astro" variant="text" arrow="right">Start</Button></p>
          </div>
          <AstroIcon className="h-9 w-9 text-[#FF5D01]"/>
        </div>
        <div key="angular" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Angular
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Angular</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/angular" variant="text" arrow="right">Start</Button></p>
          </div>
          <AngularIcon className="h-9 w-9 text-[#DD0031]"/>
        </div>
        <div key="vite" className="flex flex-row-reverse gap-6">
          <div className="flex-auto">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Vite
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Use .env.vault with Vite</p>
            <p className="mt-4"><Button href="/docs/languages/nodejs/vite" variant="text" arrow="right">Start</Button></p>
          </div>
          <ViteIcon className="h-9 w-9 text-[#646CFF]"/>
        </div>

      </div>
    </div>
  )
}
