import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'

function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      {...props}
      className={`overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white ${
        props.className || ''
      }`}
    />
  )
}

function TOCInline() {
  return null
}

function BlogNewsletterForm() {
  return null
}

const components: MDXComponents = {
  Image,
  a: CustomLink,
  pre: Pre,
  TOCInline,
  BlogNewsletterForm,
}

export function useMDXComponents(componentsOverride: MDXComponents): MDXComponents {
  return {
    ...components,
    ...componentsOverride,
  }
}