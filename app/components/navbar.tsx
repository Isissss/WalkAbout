import { Menu, Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, NavLink } from '@remix-run/react';
import { NAV_LINKS } from '~/lib/const';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='sticky top-0 hidden h-screen border-r bg-[#373776] sm:block'>
        <div className='flex h-full flex-col gap-2'>
          <div className='flex-1'>
            <nav className='flex h-full flex-col justify-between text-sm font-medium'>
              <div className='space-y-16'>
                <Link
                  to='/'
                  className='flex items-center gap-3 border-b-[#90B1B8] px-4 py-2 text-2xl font-bold text-white [&:not(:last-child)]:border-b'
                >
                  <img
                    src='/favicon.ico'
                    alt=''
                    className='aspect-square h-auto w-8'
                  />
                  Walkabout
                </Link>
                <div className='border-y border-y-[#90B1B8]'>
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      className={({ isActive }) =>
                        `flex items-center gap-3 border-b-[#90B1B8] px-4 py-2 text-2xl font-normal [&:not(:last-child)]:border-b ${
                          isActive
                            ? 'bg-[#E76217] text-white'
                            : 'text-background hover:bg-[#29295a]'
                        }`
                      }
                    >
                      {link.iconImg && (
                        <img
                          src={'/icons' + link.iconImg}
                          alt=''
                          className='aspect-square h-auto w-8'
                        />
                      )}
                      {link.title}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div>
                <NavLink
                  to='/profiel'
                  className={({ isActive }) =>
                    `transition-all' flex h-20 items-center gap-3 border-t border-t-[#90B1B8] px-4 py-2 text-2xl font-normal text-background ${
                      isActive
                        ? 'bg-[#E76217] text-white'
                        : 'text-background hover:bg-[#29295a]'
                    }`
                  }
                >
                  <BsPerson className='h-6 w-6' />
                  Profiel
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Phone nav */}
      <div className='flex flex-col sm:hidden'>
        <header className='flex h-14 items-center gap-4 border-b bg-muted/40 lg:h-[60px]'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant='default'
                className='ml-3 shrink-0 hover:bg-secondary md:hidden'
              >
                <Menu className='mr-3 h-8 w-8' /> Menu
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className='m-0 flex flex-col bg-[#373776] p-0'
            >
              <nav className='grid text-lg font-medium'>
                <Link
                  to='/'
                  className='flex items-center text-lg font-semibold'
                >
                  <img
                    src='/favicon.ico'
                    alt=''
                    className='aspect-square h-auto w-12'
                  />
                </Link>
                {NAV_LINKS.map((link) => (
                  <NavLink
                    to={link.href}
                    key={link.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `transition-all' flex h-20 items-center gap-3 border-t border-t-[#90B1B8] px-4 py-2 text-2xl font-normal text-background ${
                        isActive
                          ? 'bg-[#E76217] text-white'
                          : 'text-background hover:bg-[#29295a]'
                      }`
                    }
                  >
                    {link.iconImg && (
                      <img
                        src={'/icons' + link.iconImg}
                        alt=''
                        className='aspect-square h-auto w-8'
                      />
                    )}
                    {link.title}
                  </NavLink>
                ))}
                <NavLink
                  to='/profiel'
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `transition-all' flex h-20 items-center gap-3 border-t border-t-[#90B1B8] px-4 py-2 text-2xl font-normal text-background ${
                      isActive
                        ? 'bg-[#E76217] text-white'
                        : 'text-background hover:bg-[#29295a]'
                    }`
                  }
                >
                  <BsPerson className='h-6 w-6' />
                  Profiel
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        {/* End Phone Nav */}
      </div>
    </>
  );
}
