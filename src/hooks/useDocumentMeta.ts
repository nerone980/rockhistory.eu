import { useEffect } from 'react'

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    setMetaTag('description', description)
    setMetaTag('og:title', title, 'property')
    setMetaTag('og:description', description, 'property')
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setCanonical(`https://www.rockhistory.eu${window.location.pathname}`)
  }, [title, description])
}
