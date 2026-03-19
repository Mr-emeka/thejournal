const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 The Journal. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">RSS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
