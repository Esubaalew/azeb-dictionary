import Dictionary from '@/components/Dictionary'
import { JsonLd } from '@/components/JsonLd'
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-gray-900 dark:text-white transition-colors duration-500">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Azeb's Dictionary",
          "url": "https://azeb.esube.com.et",
          "description": "A comprehensive online dictionary dedicated to exploring the world of words.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://azeb.esube.com.et/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <Dictionary />
      </div>
      <ServiceWorkerRegistration />
    </main>
  )
}

