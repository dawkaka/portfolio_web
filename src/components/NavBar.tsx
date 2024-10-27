export function NavBar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-100 shadow-sm">
      <div className="c-container flex justify-between items-center h-16">
        <h3 className="font-bold text-lg">Dawkaka</h3>
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-10 font-medium">
          <li>About</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </div>
    </nav>
  );
}
