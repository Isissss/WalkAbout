import { Menu, Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, NavLink } from '@remix-run/react';
import { NAV_LINKS } from '~/lib/const';
import { BsPerson } from 'react-icons/bs';

export default function Navbar() {
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
                  className={({ isActive }) => `transition-all' flex h-20 items-center gap-3 border-t border-t-[#90B1B8] px-4 py-2 text-2xl font-normal text-background ${ 
                      isActive
                      ? 'bg-[#E76217] text-white'
                      : 'text-background hover:bg-[#29295a]'
                  }`}
                >
                  <BsPerson className='h-6 w-6' />
                  {/* TODO: when logged in show username */}
                  Profiel
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Phone nav */}
      <div className='flex flex-col sm:hidden'>
        <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='shrink-0 md:hidden'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col bg-[#373776]'>
              <nav className='grid gap-2 text-lg font-medium'>
                <Link
                    to='/'
                    className='flex items-center gap-2 text-lg font-semibold'
                >
                  <img
                      src='/favicon.ico'
                      alt=''
                      className='aspect-square h-auto w-8'
                  />
                </Link>
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className='flex items-center text-white gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
                  >
                      {link.iconImg && (
                          <img
                              src={'/icons' + link.iconImg}
                              alt=''
                              className='aspect-square h-auto w-8'
                          />
                      )}
                    {link.title}
                  </Link>
                ))}
                <Link
                    key='/profiel'
                    to='/profiel'
                    className='flex items-center text-white gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
                >
                  <BsPerson className='h-auto w-8' />
                  Profiel
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        {/* End Phone Nav */}
      </div>
    </>
  );
}
