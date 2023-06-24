export default function Nav() {
  return (
    <header className="bg-white sticky top-0">
      <nav className="flex justify-between items-center mx-auto py-5 px-3 xl:px-0 w-screen max-w-5xl">
        <h1 className="text-xl text-neutral-800 tracking-widest">
          Menoú
        </h1>
        <div className="space-x-9">
          <button className="font-medium text-neutral-800 text-sm">
            Cá nhân
          </button>
          <button className="font-medium text-neutral-800 text-sm">
            Cộng đồng
          </button>
        </div>
      </nav>
    </header>
  )
}