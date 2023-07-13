import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-start md:items-center py-4 px-8 shadow-md">
      <h1 className="text-1xl sm:text-2xl md:text-4xl lg:text-5xl text-honolulu uppercase tracking-widest">
        Day Cutting Sharp
      </h1>
      <Navbar />
    </header>
  )
}
export default Header;
