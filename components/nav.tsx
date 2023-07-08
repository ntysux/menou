import { usePathname } from "next/navigation"
import Banner from "./banner"
import Dashboard from "./dashboard"
import NavRoutes from "./nav.routes"
import NavRoutesMobile from "./nav.routes.mobile"

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="bg-white sticky top-0 z-10">
      <nav className="flex justify-between items-center py-5">
        <h1 className="text-xl text-neutral-800 tracking-widest">
          Menoú
        </h1>
        <NavRoutes />
        <NavRoutesMobile />
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