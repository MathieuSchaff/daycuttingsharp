import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (<>
    <div className='min-h-screen'>
      <Header />
      <main className="flex flex-col pt-8 md:pb-24 md:pt-24">
        <h2 className='hidden md:block whitespace-nowrap text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          Artisan affûteur basé à Sète
        </h2>
        <h2 className='mb-6 md:hidden whitespace-nowrap text-center text-4xl md:text-6xl'>
          Artisan affûteur.
          <br />
          Basé à Sète.
        </h2>

        <div>
          <Image
            src='/knife2.png'
            alt='knife'
            width={1200}
            height={500}
            className='mx-auto'
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-16 sm:gap-14 mt-20 md:mt-24 lg:mt-20 mr-6 sm:mr-10 ml-6 sm:ml-10 text-xl md:text-2xl">
          <section className='flex-1'>
            🔪 Êtes-vous un chef de cuisine, un restaurateur ou un passionné de cuisine à la recherche d&apos;un affûteur de couteaux compétent pour répondre à vos besoins ?
          </section>

          <section className='flex-1'>
            🔪 Vos couteaux ont-ils besoin d&apos;une attention particulière pour retrouver leur tranchant et leur efficacité ?🚀
            <br />
            Je suis là pour vous servir.
          </section>
        </div>
      </main>
    </div>
    <About />
    <Contact />
    <Faq />
  </>
  )
}
