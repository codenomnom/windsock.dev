import Image from "next/image";
import { content } from '@/content';
import { UILibsList } from "@/components/ui-libs-list/UILibsList";
import { MeteoconsWindsockFill } from "@/components/icons/MeteoconsWindsockFill";

// dark:invert
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pt-16 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="intro flex flex-col items-center mb-8">
      {/* -ml-12 sm:-ml-16 */}
        <h1 className="font-black font-[family-name:var(--font-montserrat)] text-7xl sm:text-8xl inline-flex -ml-6 sm:-ml-10">
          {/* <MeteoconsWindsockFill className="mt-2" /> */}

          <span className="pt-5">
            <Image
              width={72}
              height={72}
              src={`./windsock.svg`}
              alt={` logo`}
              className="mr-6"
            />
          </span>
          windsock
        </h1>
        <p>browse, explore and compare tailwind resources</p>
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:max-w-[44rem] w-full">
        <UILibsList items={content.ui} />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
