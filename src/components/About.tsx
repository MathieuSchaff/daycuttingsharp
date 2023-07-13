import Image from "next/image"
import profil from '../../public/profil.jpg'
import tarifs from '../../public/tarifs.jpg'
import car from '../../public/car.jpg'
const About = () => {
  return (<div id="about" className="border-browney border-2 pt-10 pb-10">
    <h2 className='whitespace-nowrap text-2xl text-center sm:text-3xl md:text-4xl uppercase font-bold'>
      Qui suis-je ?
    </h2>
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 p-5">
      <div className="sm:w-3/4 md:w-1/2 ">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">PASSIONNÉS PAR L&apos;ART DE LA PRÉCISION</h3>
        <p className="leading-8">
          Moi, c&apos;est Jeff.
          <br />
          Avec une passion pour l&apos;affûtage des couteaux, j&apos;ai développé mes compétences au fil des années pour offrir un service de qualité supérieure. Ayant acquis une expérience précieuse dans l&apos;art de l&apos;affûtage après avoir perfectionné mes techniques auprès de maîtres affûteurs, je suis prêt à mettre mon savoir-faire au service de votre cuisine ou de votre établissement.
        </p>
      </div>
      <Image
        src={profil}
        alt="Jeff"
        width={400}
        height={300}
        className="rounded-lg"
        objectFit="cover"
      />
    </section>
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 mt-12 p-5">
      <Image
        src={car}
        alt="mon equipement"
        width={400}
        height={300}
        className="rounded-lg"
        objectFit="cover"
      />
      <div className="sm:w-3/4 md:w-1/2 ">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Mobilité & Déplacements</h3>
        <p className="leading-8">
          Ma voiture me permet de me déplacer auprès de vous et m&apos;adapter à vos besoins. Comme vous pouvez le constater, j&apos;ai moi-même aménager ma voiture pour qu&apos;elle corresponde à mes besoins d&apos;entrepreneur!
        </p>
      </div>

    </section>
    <section className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 p-5">
      <div className="sm:w-3/4 md:w-1/2 ">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Mes tarifs</h3>
        <p className="leading-8">
          Je facture ma journée de travail 200 euros. Cela dépend de la distance parcourue pour venir chez vous, ainsi que du type d&apos;affûtage et du nombre de couteaux à travailler.
        </p>
      </div>
      <Image
        src={tarifs}
        alt="equipement couteau"
        width={400}
        height={300}
        className="rounded-lg"
        objectFit="cover"
      />
    </section>
  </div>
  )
}
export default About
