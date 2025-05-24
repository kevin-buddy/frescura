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
        <div>Give us a try, try ordering one</div>
        <Link
          href="https://wa.me/085233385888"
          target="_blank"
        >
          <Button size="tiny" variant="default">
            {`Order now`}
          </Button>
        </Link>
      </div>
    </div>
  )
}
