function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} CodeJIT. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
