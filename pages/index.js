import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/portfolio">
          <a>portfolio</a>
        </Link>

        </Container>
      </Layout>
    </>
  )
}

