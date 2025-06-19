import Image from "next/image";
import profil from "../../public/profil.jpg";
import meleuse from "../../public/meleuse1.jpg";
import car from "../../public/car.jpg";
import jardinage from "../../public/jardinage.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="border-browney  border-t border-t-browney pt-10 pb-10"
    >
      <h2 className="whitespace-nowrap text-2xl text-center sm:text-3xl md:text-4xl uppercase font-bold">
        Qui suis-je ?
      </h2>
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 p-5">
        <div className="sm:w-3/4 md:w-1/2 ">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            PASSIONNÉ PAR L&apos;ART DE LA PRÉCISION
          </h3>
          <p className="leading-8">
            Moi, c&apos;est Jeff.
            <br />
            Avec une passion pour l&apos;affûtage des couteaux, j&apos;ai
            développé mes compétences au fil des années pour offrir un service
            de qualité supérieure. Ayant acquis une expérience précieuse dans
            l&apos;art de l&apos;affûtage après avoir perfectionné mes
            techniques, je suis prêt à mettre mon savoir-faire au service de
            votre cuisine ou de votre établissement.
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
            Affûtage
          </h3>
          <p className="leading-8">
            J&apos;affûte tous types de couteaux, de ciseaux et d&apos;outils de
            jardinage. Je peux également affûter vos outils de cuisine, vos
            outils de boucherie, vos outils de jardinage, vos outils de pêche,
            vos outils de chasse, etc. Je suis un professionnel de
            l&apos;affûtage et j&apos;utilise des techniques modernes pour
            redonner à vos outils leur tranchant d&apos;origine.
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
          <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
            Mobilité & Déplacements
          </h3>
          <p className="leading-8">
            Ma voiture me permet de me déplacer auprès de vous et m&apos;adapter
            à vos besoins. Comme vous pouvez le constater, j&apos;ai moi-même
            aménagé ma voiture !
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
      <section
        className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 mt-14 p-5"
        id="tarifs"
      >
        <div className="sm:w-3/4 md:w-1/2 flex flex-col p-5 sm:p-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
            Mes tarifs
          </h3>
          <p>
            Les tarifs peuvent varier selon l&apos;état, le nombre et la
            dimension. (à partir de 4€)
          </p>
          <ul className="list-disc list-inside">
            <li> Couteaux toutes dimensions</li>
            <li> Outillage de jardins</li>
            <li>Lames de tondeuses</li>
            <li>Sécateurs</li>
            <li>Outillages pros sur devis</li>
            <li>Ciseaux pros sur devis</li>
            <li>Outils à bois </li>
            <li>Lames de robots</li>
          </ul>
          <p>
            Tout ce qui est tranchant sera affûté avec précision et passion.
          </p>
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
  );
};
export default About;
