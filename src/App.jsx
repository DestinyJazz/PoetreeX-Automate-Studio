import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LangProvider } from './i18n'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Works from './pages/Works'

export default function App(){
  return (
    <LangProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </main>
        <footer className="bg-white border-t py-6 mt-8">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} PoetreeX Automate Studio &mdash; <a href="https://www.poetreex.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">www.poetreex.com</a>
          </div>
        </footer>
      </div>
    </LangProvider>
  )
}