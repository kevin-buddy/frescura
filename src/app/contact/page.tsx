import Typography from '@/components/ui/typography'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Get in touch
        </Typography>
        <div>Book a demo, or hop on a call</div>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Book now`}
          </Button>
        </Link>
      </div>
    </div>
  )
}
