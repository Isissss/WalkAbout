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
              <div>
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={(props) => {
                      return `flex items-center gap-3 border-b-[#90B1B8] px-4 py-2 text-2xl [&:not(:last-child)]:border-b-2 ${
                        props.isActive
                          ? 'font-bold text-[#FF7729]'
                          : 'font-normal text-background'
                      }`;
                    }}
                  >
                    {link.icon || ''}
                    {link.title}
                  </NavLink>
                ))}
              </div>
              <div>
                <NavLink
                  to='/profiel'
                  className='flex h-20 items-center gap-3 border-t-2 border-t-[#90B1B8] px-4 py-2 text-2xl font-normal text-background transition-all'
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
                  href='#'
                  className='flex items-center gap-2 text-lg font-semibold'
                >
                  <Package2 className='h-6 w-6' />
                  <span className='sr-only'>Acme Inc</span>
                </Link>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
                  >
                    {link.icon || ''}
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        {/* End Phone Nav */}
      </div>
    </>
  );
}
