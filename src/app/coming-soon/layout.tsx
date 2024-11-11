import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coming Soon Features at Open Source By Workforwin',
  description: 'Coming Soon Features at Open Source By Workforwin, projects work, packages, modules, UI, components.',
  keywords: ['metadata', 'logging', 'API', 'database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'SQLite', 'Cassandra', 'Neo4j', 'MariaDB', 'Redis', 'Oracle'],
  authors: [{ name: 'Workforwin' }],
  openGraph: {
    title: 'Coming Soon Features at Open Source By Workforwin',
    description: 'Flexible metadata logging for API calls across multiple databases.',
    url: 'https://opensource.workforwin.com/packages/build-my-meta',
    images: [
      {
        url: 'https://opensource.workforwin.com/assets/images/home/social_banner.svg',
        width: 1200,
        height: 630,
        alt: 'Coming Soon Features at Open Source By Workforwin',
      },
    ],
  },
  twitter: {
    title: 'Coming Soon Features at Open Source By Workforwin',
    description: 'Flexible metadata logging for API calls across multiple databases.',
    site: '@workforwin',
    creator: '@workforwin',
    images: ['https://opensource.workforwin.com/assets/images/home/social_banner.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getImageUrl = (images: string | URL | { url: string | URL } | Array<string | URL | { url: string | URL }>) => {
    if (Array.isArray(images)) {
      const firstImage = images[0];
      if (typeof firstImage === 'string') {
        return firstImage;
      } else if (firstImage instanceof URL) {
        return firstImage.toString();
      } else if (firstImage?.url) {
        return firstImage.url instanceof URL ? firstImage.url.toString() : firstImage.url;
      }
    } else if (typeof images === 'string') {
      return images;
    } else if (images instanceof URL) {
      return images.toString();
    } else if (images?.url) {
      return images.url instanceof URL ? images.url.toString() : images.url;
    }
    return undefined;
  };

  const ogImageUrl = metadata.openGraph?.images ? getImageUrl(metadata.openGraph.images) : undefined;
  const twitterImageUrl = metadata.twitter?.images ? getImageUrl(metadata.twitter.images) : undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={(metadata.keywords as string[]).join(', ')} />
        <meta name="license" content="MIT" />
        <meta property="og:title" content={metadata.openGraph?.title as string} />
        <meta property="og:description" content={metadata.openGraph?.description as string} />
        <meta property="og:url" content={metadata.openGraph?.url as string} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:title" content={metadata.twitter?.title as string} />
        <meta name="twitter:description" content={metadata.twitter?.description as string} />
        <meta name="twitter:image" content={twitterImageUrl} />
        <meta name="twitter:site" content={metadata.twitter?.site as string} />
        <meta name="twitter:creator" content={metadata.twitter?.creator as string} />
        <link rel="canonical" href={metadata.openGraph?.url as string} />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}









// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from '../context/ThemeContext';
// import '../styles/globals.css';
// import '../styles/scroll.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'BuildMyMeta Documentation',
//   description: 'BuildMyMeta - Metadata Logger Documentation',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
//         <ThemeProvider>{children}</ThemeProvider>
//       </body>
//     </html>
//   );
// }