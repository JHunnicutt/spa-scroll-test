import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
  return (
    <Link href={href} className="text-white hover:text-blue-200">
      {children}
    </Link>
  );
}
