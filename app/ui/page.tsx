// pages/pages.tsx
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>Testing Next.js Routing</h1>
      <p>Welcome to the test page!</p>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div>About</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;
