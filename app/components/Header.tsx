const Header = () => {
  return (
    <div className="">
      <nav className="relative flex flex-row justify-items-start space-x-4 items-start px-0 pb-0 mb-10 antialiased">
        <a
          className="flex text-white hover:underline decoration-neutral-400 decoration-2 underline-offset-4"
          href="/"
        >
          home
        </a>
        {/* <a
          className="flex text-white hover:underline decoration-neutral-400 decoration-2 underline-offset-4"
          href="/projects"
        >
          projects
        </a> */}
        <a
          className="flex text-white hover:underline decoration-neutral-400 decoration-2 underline-offset-4"
          href="/blogs"
        >
          blogs
        </a>
      </nav>
    </div>
  );
};
export default Header;
