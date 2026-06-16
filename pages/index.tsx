import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Ankitha Karyam | Backend Engineer | Java | Spring Boot</title>
        <meta
          name="description"
          content="Backend Java Developer specializing in Spring Boot, Microservices, and REST APIs. Explore my projects and experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Ankitha Karyam | Backend Engineer" />
        <meta
          property="og:description"
          content="Backend software engineer with expertise in Java, Spring Boot, and cloud technologies."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Scroll progress bar with gradient */}
      <div
        className="fixed top-20 md:top-16 left-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink z-40 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navigation />
      <main className="pt-20 md:pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
