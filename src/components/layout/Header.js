export default function Header() {
    return (
        <header className="flex items-center justify-between mb-15">
        <nav className="flex gap-8 font-semibold">
        <a className=" font-bold text-2xl" href="/">Papa Joe's Pizza</a>
          <a href="/">Home</a>
          <a href="">Menü</a>
          <a href="">Über Uns</a>
          <a href="">Kontakt</a>
          
        </nav>
        <nav className="flex gap-4 items-center font-semibold">
          <a href="/login">Login</a>
          <a href="/register" className="bg-purple-800 text-white px-4 py-2 rounded-full">Registrieren</a>
        </nav>
      </header>
    );
}