import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="absolute bottom-0 flex h-24 w-screen justify-center gap-2 bg-white/30 py-8 text-white backdrop-blur">
      <NavLink href="#home">Home</NavLink> |
      <NavLink href="#about">About</NavLink> |
      <NavLink href="#products">Products</NavLink> |
      <NavLink href="#blog">Blog</NavLink> |
      <NavLink href="#contact">Contact</NavLink>
    </nav>
  );
}
