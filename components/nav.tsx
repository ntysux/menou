import { usePathname } from "next/navigation"
import Banner from "./banner"
import Dashboard from "./dashboard"
import NavMobile from "./nav.mobile"
import PersonalPopover from "./personal.popover"
import Link from "next/link"

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="bg-white sticky top-0 z-10">
      <nav className="flex justify-between items-center mx-auto py-5 px-3 xl:px-0 w-screen max-w-5xl">
        <h1 className="text-xl text-neutral-800 tracking-widest">
          Menoú
        </h1>
        <div className="space-x-9 hidden sm:flex">
          <PersonalPopover />
          <Link href='/community' className="flex">
            <button className="font-medium text-neutral-800 text-sm">
              Cộng đồng
            </button>
          </Link>
        </div>
        <div className="flex sm:hidden">
          <NavMobile />
        </div>
      </nav>
      {
        pathname === '/menu' &&
        <div className="space-y-3">
          <Banner />
          <Dashboard />
        </div>
      }
    </header>
  )
}