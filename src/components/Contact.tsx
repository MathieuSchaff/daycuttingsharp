import { FcCellPhone } from 'react-icons/fc';
const Contact = () => {
  return (
    <div id="contact" className="py-20  border-t border-t-browney ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h2 className="uppercase  text-2xl text-center sm:text-3xl font-bold ">Contact</h2>
          <p className="text-white mt-4 p-10 w-full sm:w-3/4 md:w-1/2 leading-10">
            👉 Ne négligez pas l&apos;importance d&apos;avoir des couteaux bien affûtés.
            <br />
            <FcCellPhone className='inline-block' size={20} />Envoyez-moi un message  au  <span className="font-bold whitespace-nowrap">06 76 30 65 82</span>
            <br />
            Je serai ravi de discuter de vos besoins spécifiques et de vous fournir des conseils d&apos;expert en matière d&apos;entretien des couteaux.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
