import Link from "next/link";


const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
          The Journal
        </Link>
        <a
          href="#subscribe"
          className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase"
        >
          Subscribe
        </a>
      </div>
    </nav>
  );
};

export default Nav;
