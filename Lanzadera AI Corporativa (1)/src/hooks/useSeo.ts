/**
 * @file useSeo hook to configure basic SEO meta tags for the current page.
 */

import { useEffect } from 'react'

/**
 * Options for configuring the SEO meta tags.
 */
export interface SeoOptions {
  /** Document title to set in the browser. */
  title: string
  /** Meta description for search engines. */
  description: string
}

/**
 * React hook that sets the document title and meta description.
 *
 * It manipulates the `document.head` to ensure a description meta tag exists
 * and keeps the values in sync with the provided options.
 */
export function useSeo(options: SeoOptions): void {
  const { title, description } = options

  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')

      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }

      meta.content = description
    }
  }, [title, description])
}
