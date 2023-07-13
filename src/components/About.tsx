import Image from "next/image"
import profil from '../../public/profil.jpg'
import meleuse from '../../public/meleuse1.jpg'
import car from '../../public/car.jpg'
import jardinage from '../../public/jardinage.jpg'
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
    <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 mt-14 p-5">
      <div className="sm:w-3/4 md:w-1/2 ">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Affûtage</h3>
        <p className="leading-8">
          Je&apos;affûte tous types de couteaux, de ciseaux et d&apos;outils de jardinage. Je peux également affûter vos outils de cuisine, vos outils de boucherie, vos outils de jardinage, vos outils de pêche, vos outils de chasse, etc. Je suis un professionnel de l&apos;affûtage et j&apos;utilise des techniques modernes pour redonner à vos outils leur tranchant d&apos;origine.
        </p>
      </div>
      <Image
        src={jardinage}
        alt="equipement couteau"
        width={400}
        height={300}
        className="rounded-lg"
        objectFit="cover"
      />
    </section>

    <section className="flex flex-col md:flex-row items-center justify-center gap-6 mt-14 p-5">
      <div className="sm:w-3/4 md:w-1/2 ">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Mobilité & Déplacements</h3>
        <p className="leading-8">
          Ma voiture me permet de me déplacer auprès de vous et m&apos;adapter à vos besoins. Comme vous pouvez le constater, j&apos;ai moi-même aménager ma voiture pour qu&apos;elle corresponde à mes besoins d&apos;entrepreneur!
        </p>
      </div>
      <Image
        src={car}
        alt="mon equipement"
        width={400}
        height={300}
        className="rounded-lg"
        objectFit="cover"
      />
    </section>
    <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 mt-14 p-5" id="tarifs">
      <div className="sm:w-3/4 md:w-1/2 flex flex-col items-center" >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Mes tarifs</h3>
        <ul className="list-disc list-inside">
          <li>Couteau moins de 10cm - 4,50€</li>
          <li>Couteau plus de 10cm - devis</li>
          <li>Couteau boucher - 8,50€</li>
          <li>Couteau à dents - 10,00€</li>
          <li>Couteau Céramique - devis</li>
          <li>Couteau haut de fanne - devis</li>
          <li>Ciseaux classiques - 7,00€</li>
          <li>Ciseaux Pro - 14,50€</li>
          <li>Ciseaux à bois (selon largeur) - 6,00€</li>
          <li>Fer à cabot - 9,00€</li>
          <li>Goufe - 7,50€</li>
          <li>Réparation pointe cassée + affûtage - 8,50€</li>
        </ul>
        <p>Les tarifs peuvent varier selon l&apos;état.</p>
      </div>
      <Image
        src={meleuse}
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
