import { useEffect, useState } from 'react'

import { IconArrow } from '@/assets/IconArrow'
import { IconDownload } from '@/assets/IconDownload'
import { SearchInput } from '@/components/SearchInput/SearchInput'

import { Container } from '../components/Container/Container'

const App = () => {
  const [fonts, setFonts] = useState<string[]>([])
  const [filteredFonts, setFilteredFonts] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch the fonts list from the static JSON file
    const loadFonts = async () => {
      try {
        const response = await fetch('/fonts.json')
        const data = await response.json()
        setFonts(data.fonts)
        setFilteredFonts(data.fonts)
      } catch (error) {
        console.error('Error loading fonts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadFonts()
  }, [])

  // Filter fonts based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFonts(fonts)
    } else {
      const filtered = fonts.filter((font) =>
        font.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredFonts(filtered)
    }
  }, [searchTerm, fonts])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <Container className="flex flex-col gap-4 px-4 pb-[200px] pt-8">
      <header>
        <img src="/logo.svg" />
      </header>
      <p>
        FONTS.GE საიტზე 898 ფონტიდან ~411-ს <b>(~46%!)</b> აქვს ლათინური
        კოდირება.
      </p>
      <h2 className="text-2xl font-semibold">
        რა განსხვავებაა ფონტის ლათინურ და (UTF-8) კოდირებას შორის?
      </h2>
      <p>
        ლათინური კოდირებით შექმინილი ფონტი არ შეცვლის ქართული ასოებით დაწერილ
        ტექსტის სტილს. იმისთვის რომ ფონტი გამოჩნდეს, ტექსტი უნდა დაიწეროს
        ლათინური ასოებით.
      </p>
      <p>
        ტექსტთან მუშაობის დროს სასურველია გამოვიყენოთ შესატყვისი უნიკოდი
        (utf-8). ქართული ტექსტის შემთხვევაში, უმჯობესია გამოვიყენოთ ქართული
        ასოები და შევცვალოთ მათი ფონტი. ეს უზრუნველყოფს ისეთ შემთხვევებს,
        როდესაც ფონტი არ იტვირთება (მაგ. ინტერნეტის პრობლემების შემთხვევაში,
        კომპიუტერზე ფონტის არ არსებობის შემთხვევაში და ა.შ.)
      </p>
      <p>
        ლათინური კოდირების ფონტის მაგალითი. ტექსტი ინახება ლათინური ასოებით.
      </p>
      <div className="flex items-center justify-between gap-2 max-md:flex-col">
        <blockquote className="text-sm">
          <p>Shigan asre gaverie, gnolis jogsa viTa qori,</p>
          <p>kaci kacsa Semostyorci, cxen-kacisa davdgi gori;</p>
          <p>kaci, Cemgan ganatyorci, brunavs viTa tanajori,</p>
          <p>erTob srulad amovwyvide wina kerZi razmi ori.</p>
        </blockquote>
        <span className="shrink-0 max-md:rotate-90">
          <IconArrow />
        </span>
        <blockquote className="custom-font">
          <p>შიგან ასრე გავერივე, გნოლის ჯოგსა ვითა ქორი,</p>
          <p>კაცი კაცსა შემოვსტყორცი, ცხენ-კაცისა დავდგი გორი;</p>
          <p>კაცი, ჩემგან განატყორცი, ბრუნავს ვითა ტანაჯორი,</p>
          <p>ერთობ სრულად ამოვწყვიდე წინა კერძი რაზმი ორი.</p>
        </blockquote>
      </div>
      <p>სასურველი შემთხვევა. ტექსტი ინახება ქართული ასოებით.</p>
      <div className="flex items-center justify-between gap-2 max-md:flex-col">
        <blockquote className="text-sm">
          <p>შიგან ასრე გავერივე, გნოლის ჯოგსა ვითა ქორი,</p>
          <p>კაცი კაცსა შემოვსტყორცი, ცხენ-კაცისა დავდგი გორი;</p>
          <p>კაცი, ჩემგან განატყორცი, ბრუნავს ვითა ტანაჯორი,</p>
          <p>ერთობ სრულად ამოვწყვიდე წინა კერძი რაზმი ორი.</p>
        </blockquote>
        <span className="shrink-0 max-md:rotate-90">
          <IconArrow />
        </span>
        <blockquote className="custom-font">
          <p>შიგან ასრე გავერივე, გნოლის ჯოგსა ვითა ქორი,</p>
          <p>კაცი კაცსა შემოვსტყორცი, ცხენ-კაცისა დავდგი გორი;</p>
          <p>კაცი, ჩემგან განატყორცი, ბრუნავს ვითა ტანაჯორი,</p>
          <p>ერთობ სრულად ამოვწყვიდე წინა კერძი რაზმი ორი.</p>
        </blockquote>
      </div>
      <p>
        ეს საიტი კონკრეტულად ამ პრობლემის გადასაჭრელად შეიქმნა. FONTS.GE-ზე
        არსებული თითქმის ყველა ლათინური კოდირების ფონტი გადაკეთებულია
        სტანდარტული უნიკოდის სტილის ფონტად, რათა თქვენს პროექტში (საიტზე,
        დოკუმენტში, ა.შ.) ტექსტი შენახული იყოს ქართული ასოებით.
      </p>
      <a
        href="mailto:vasili2000@outlook.com"
        className="w-fit font-semibold text-[#1E40AF] underline"
      >
        დამიკავშირდით
      </a>
      <div className="sticky top-0 bg-white py-4">
        <SearchInput onSearch={handleSearch} />
      </div>

      {/* FONT CONTAINER */}
      <div className="flex flex-col gap-2">
        {isLoading ? (
          <div className="py-4 text-center">იტვირთება...</div>
        ) : filteredFonts.length > 0 ? (
          filteredFonts.map((font, index) => (
            <a
              key={index}
              className="flex cursor-pointer items-center justify-between rounded-[8px] bg-[#eee] px-4 py-3"
              href={`/fonts/${font}`}
              download
              aria-label={`Download ${font}`}
            >
              {/* name */}
              <span className="text-[24px] font-semibold max-sm:text-[16px]">
                {font}
              </span>
              {/* download button */}
              <IconDownload />
            </a>
          ))
        ) : (
          <div className="py-4 text-center">
            ფონტი ვერ მოიძებნა {searchTerm}
          </div>
        )}
      </div>
    </Container>
  )
}

export default App
