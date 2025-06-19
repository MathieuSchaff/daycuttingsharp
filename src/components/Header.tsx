import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">
                D
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                Day Cutting Sharp
              </h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Affûteur professionnel à Sète
              </p>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
