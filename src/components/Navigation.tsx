'use client';

import { usePathname } from 'next/navigation';
import { WindsockIcon } from './WindsockIcon';
import Image from 'next/image';

export function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <div className="nav-left">
        <a href="/" className="logo">
          <WindsockIcon className="windsock-svg" />
          {/* <Image
            width={28}
            height={28}
            src="/windsock.svg"
            alt="logo"
            className="mr-2"
          /> */}
          windsock
        </a>


      </div>

      <div className="nav-right">
        <div className="nav-pages">
          <a href="/about" className={`nav-link ${path === '/about' ? 'active' : ''}`}>about</a>
          <a href="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>browse</a>
          <a href="" className={`nav-link soon cursor-wait ${path === '/compare' ? 'active' : ''}`}>compare</a>
        </div>
      </div>
    </nav>
  );
}
