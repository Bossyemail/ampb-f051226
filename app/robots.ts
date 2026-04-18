import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://aylenmontenegro.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/sign-in/',
          '/sign-up/',
          '/sign-out/',
          '/profile/',
          '/settings/',
          '/test-background/',
          '/clausevault/pay/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/sign-in/',
          '/sign-up/',
          '/sign-out/',
          '/profile/',
          '/settings/',
          '/test-background/',
          '/clausevault/pay/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
