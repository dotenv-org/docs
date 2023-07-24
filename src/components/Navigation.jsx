import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-yellow-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  )

  let isActiveGroup =
    group.links.findIndex((link) => link.href === router.pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Overview',
    links: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quickstart', href: '/docs/quickstart' },
      { title: 'CLI', href: '/docs/dotenv-vault' },
      { title: 'Languages', href: '/docs/languages' },
      { title: 'VSCode', href: 'https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode' },
    ],
  },
  {
    title: 'Sync',
    links: [
      { title: 'Quickstart', href: '/docs/sync/quickstart' },
    ],
  },
  {
    title: 'Language Guides',
    links: [
      { title: 'Go', href: '/docs/languages/go' },
      { title: 'Kotlin', href: '/docs/languages/kotlin' },
      { title: 'Node.js', href: '/docs/languages/nodejs' },
      { title: 'PHP', href: '/docs/languages/php' },
      { title: 'Python', href: '/docs/languages/python' },
      { title: 'Ruby', href: '/docs/languages/ruby' },
    ],
  },
  {
    title: 'Node.js Guides',
    links: [
      { title: 'Overview', href: '/docs/languages/nodejs' },
      { title: 'Digital Ocean', href: '/docs/languages/nodejs/digital-ocean' },
      { title: 'Docker', href: '/docs/languages/nodejs/docker' },
      { title: 'Fly.io', href: '/docs/languages/nodejs/fly' },
      { title: 'GitHub Actions', href: '/docs/languages/nodejs/github-actions' },
      { title: 'Heroku', href: '/docs/languages/nodejs/heroku' },
      { title: 'Netlify', href: '/docs/languages/nodejs/netlify' },
      { title: 'Railway', href: '/docs/languages/nodejs/railway' },
      { title: 'Render', href: '/docs/languages/nodejs/render' },
      { title: 'Vercel', href: '/docs/languages/nodejs/vercel' },
    ],
  },
  {
    title: 'CLI',
    links: [
      { title: 'Overview', href: '/docs/dotenv-vault' },
      { title: 'new', href: '/docs/dotenv-vault/new' },
      { title: 'login', href: '/docs/dotenv-vault/login' },
      { title: 'logout', href: '/docs/dotenv-vault/logout' },
      { title: 'open', href: '/docs/dotenv-vault/open' },
      { title: 'push', href: '/docs/dotenv-vault/push' },
      { title: 'pull', href: '/docs/dotenv-vault/pull' },
      { title: 'build', href: '/docs/dotenv-vault/build' },
      { title: 'keys', href: '/docs/dotenv-vault/keys' },
      { title: 'rotatekey', href: '/docs/dotenv-vault/rotatekey' },
      { title: 'versions', href: '/docs/dotenv-vault/versions' },
      { title: 'whoami', href: '/docs/dotenv-vault/whoami' },
      { title: 'status', href: '/docs/dotenv-vault/status' },
      { title: 'help', href: '/docs/dotenv-vault/help' },
    ],
  },
  {
    title: 'Add-ons',
    links: [
      { title: 'External Share', href: '/docs/addons/external' },
      { title: 'GitHub Build', href: '/docs/addons/github' },
      { title: 'Slack Notifications', href: '/docs/addons/slack' },
      { title: 'Sync to AWS Parameter Store', href: '/docs/addons/aws-parameter-store' },
      { title: 'Sync to AWS Secrets', href: '/docs/addons/aws-secrets' },
      { title: 'Sync to Heroku', href: '/docs/addons/heroku' },
      { title: 'Sync to Vercel', href: '/docs/addons/vercel' },
    ],
  },


]

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/support">Support</TopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 && 'md:mt-0'}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="https://vault.dotenv.org" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
