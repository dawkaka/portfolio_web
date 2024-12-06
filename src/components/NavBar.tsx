export function NavBar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-100 shadow-sm">
      <div className="c-container flex justify-between items-center h-16">
        <h3 className="font-bold text-lg">Dawkaka</h3>
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-10 text-sm font-semibold">
          <li>
            <a href="#">.about</a>
          </li>
          <li>
            <a href="#work">.work</a>
          </li>
          <li>
            <a href="#projects">.projects</a>
          </li>
          <li>
            <a href="#skills">.skills</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
