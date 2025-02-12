import { PageSeo } from '~/components/SEO'
import { siteMetadata } from '~/data/siteMetadata'
import { ListLayout } from '~/layouts/ListLayout'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import type { BlogListProps } from '~/types'

export function getStaticProps() {
  const posts = getAllFilesFrontMatter('posts')

  return { props: { posts } }
}

export default function Blog({ posts }: BlogListProps) {
  return (
    <>
      <PageSeo
        title={`全部文章 - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ListLayout posts={posts} title="全部文章" />
    </>
  )
}
