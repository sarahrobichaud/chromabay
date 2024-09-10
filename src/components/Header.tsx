// Header.js
export function Header() {
  return (
    <header className="bg-pink-200 py-8">
      <div className="max-w-[90%] mx-auto w-full">
        <div className="flex justify-between items-center">
          <span className="text-3xl flex gap-2 items-center">
            <img src="./assets/vite.svg"></img>
            Dockview Static Preview
          </span>
          <ul className="list-none flex gap-5">
            <li>Services</li>
            <li>About US</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
