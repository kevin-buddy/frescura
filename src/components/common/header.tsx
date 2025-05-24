'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
// import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'
import { useState } from 'react'

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    // {
    //   href: 'https://map.sistilli.dev/public/coding/SaaS+Boilerplate',
    //   title: 'Book a demo',
    //   openInNewTab: true
    // },
    {
      href: '/',
      title: 'Home',
      openInNewTab: false
    },
    {
      href: '/about',
      title: 'About Us',
      openInNewTab: false
    },
    {
      href: '/products',
      title: 'Products',
      openInNewTab: false
    },
    {
      href: '/contact',
      title: 'Contact',
      openInNewTab: false
    }
    // { href: '#pricing', title: 'Features' },
    // {
    //   href: 'mailto:myemail@.com',
    //   title: 'Contact Us'
    // }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <img src="/logo-header.png" className="mr-3" />
      {/* <Typography className="!text-base font-medium">
        Frescura
      </Typography> */}
    </Link>
  )

  // const getAuthButtons = () => (
  //   <div className="flex gap-3 items-center">
  //     <Link
  //       href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
  //       target="_blank"
  //     >
  //       <Typography variant="p">Login</Typography>
  //     </Link>
  //     <Link
  //       href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
  //       target="_blank"
  //     >
  //       <Button size="tiny" color="ghost">
  //         <Typography variant="p" className="text-black">
  //           Sign Up
  //         </Typography>
  //       </Button>
  //     </Link>
  //   </div>
  // )

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
              onClick={() => {setIsMenuOpen(false)}}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-md:justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {getLogo()}
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-8 space-x-10">
            {getHeaderItems()}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex gap-x-4 items-center">
            {/* {getAuthButtons()} */}
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen} direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  )
}
