export default function Footer() {
  return (
    <footer className="mt-16 pb-8 pt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center text-sm">
        <div>
          © {new Date().getFullYear()} Obsydian • Made with <span>♥</span> &nbsp;|&nbsp;
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-2 text-xs">
          Strona stworzona w Next.js • Design: liquid glass
        </div>
      </div>
    </footer>
  );
}