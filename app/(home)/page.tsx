import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 py-8 max-w-4xl mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center">Block Any Content on Any Device</h1>
      <p className="mb-8 text-fd-muted-foreground text-center">
        Learn how to restrict devices for yourself or others.
      </p>

      {/* iOS & iPadOS */}
      <section className="mb-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Apple Devices</h2>
        <ul className="flex flex-wrap gap-4">
          <li className="border rounded-lg p-4 flex-1 min-w-[200px]">
            <Link href="/docs/apple/screen-time" className="font-semibold underline">
              Screen Time
            </Link>
            <p className="text-fd-muted-foreground">Parental controls</p>
          </li>
        </ul>
      </section>

      {/* macOS */}
      <section className="mb-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">macOS</h2>
        <ul className="flex flex-wrap gap-4">
          <li className="border rounded-lg p-4 flex-1 min-w-[200px]">
            <Link href="/docs/macos/cold-turkey" className="font-semibold underline">
              Cold Turkey
            </Link>
            <p className="text-fd-muted-foreground">Site + app blocker</p>
          </li>
        </ul>
      </section>

      {/* Other Tools */}
      <section className="mb-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Other Tools</h2>
        <ul className="flex flex-wrap gap-4">
          <li className="border rounded-lg p-4 flex-1 min-w-[200px]">
            <a
              href="https://lockbox.pluckeye.net/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline"
            >
              Plucky Lockbox
            </a>
            <p className="text-fd-muted-foreground">Delay-based text storage</p>
          </li>
          <li className="border rounded-lg p-4 flex-1 min-w-[200px]">
            <span className="font-semibold">Google Search Web Filter</span>
            <p className="text-fd-muted-foreground">
              Text-based search results:{' '}
              <a
                href="https://chromewebstore.google.com/detail/google-search-web-filter/cnailmoibfjlnlnjedbgbjbononifola"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Chrome
              </a>{' '}
              |{' '}
              <a
                href="https://addons.mozilla.org/firefox/addon/google-search-web-filter/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Firefox
              </a>
            </p>
          </li>
          <li className="border rounded-lg p-4 flex-1 min-w-[200px]">
            <a
              href="https://chromewebstore.google.com/detail/grayscaler/lobmgclijfljeodngchmpeafnodanohb"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline"
            >
              Grayscaler
            </a>
            <p className="text-fd-muted-foreground">Grayscale websites</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
