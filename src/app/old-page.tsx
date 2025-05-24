import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import Article from './article'
import { MilkOffIcon, SaladIcon, WheatIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <Article
        element={
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            🌱 Eat Clean. Feel Alive.
          </Typography>
          <Typography className="max-w-2xl" variant="h5">
            Discover the taste of real food—minimally processed, never deep-fried, and made to nourish.
          </Typography>
          <Link
            href="/products"
            target=""
          >
            <Button size="tiny" variant="default" className='bg-green-400'>
              {`Explore Our Menu`}
            </Button>
          </Link>
        </div>
      }>
      </Article>
      <Image
          width={1024}
          height={632}
          alt="Frescura Home image"
          src="/frescura/opengraph-image.jpg"
      />
      <Article
      element={
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Why Choose Frescura?
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<WheatIcon size={24} />}
              headline="Real Ingredients"
              description="We use whole, unprocessed ingredients sourced with care."
            />
            <Feature
              icon={<MilkOffIcon size={24} />}
              headline="No Deep Frying"
              description="Healthier cooking methods like baking, steaming, and grilling."
            />
            <Feature
              icon={<SaladIcon size={24} />}
              headline="Balanced Meals"
              description="Built for energy, focus, and wellness, not just calories."
            />
          </div>
        </div>
      }>
      </Article>
    </div>
  )
}
