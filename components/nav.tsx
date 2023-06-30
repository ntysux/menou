import NavMobile from "./nav.mobile"
import PersonalPopover from "./personal.popover"

export default function Nav() {
  return (
    <header className="bg-white sticky top-0 z-10">
      <nav className="flex justify-between items-center mx-auto py-5 px-3 xl:px-0 w-screen max-w-5xl">
        <h1 className="text-xl text-neutral-800 tracking-widest">
          Menoú
        </h1>
        <div className="space-x-9 hidden sm:flex">
          <PersonalPopover />
          <button className="font-medium text-neutral-800 text-sm">
            Cộng đồng
          </button>
        </div>
        <div className="flex sm:hidden">
          <NavMobile />
        </div>
      </nav>
    </header>
  )
}