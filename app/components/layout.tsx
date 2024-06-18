import { Outlet } from '@remix-run/react';
import Navbar from './navbar';
export function LayoutUI() {
  return (
    <div className='sm:custom-grid h-full min-h-screen w-full sm:grid'>
      <Navbar />
      <main className='container mx-auto flex flex-1 flex-col gap-4 p-4 pt-0 lg:gap-6 lg:p-6 lg:pt-0'>
        <Outlet />
      </main>
    </div>
  );
}
