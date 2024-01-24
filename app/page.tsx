import { IconArrowNarrowRight, IconBackground, IconTags } from "@tabler/icons-react"
import Card from "./_ui/card"
import Link from "next/link"
import Theme from "./_ui/theme.control"
import { cookies } from "next/headers"

const routes: string[] = [
  'Trang chủ',
  'Hỗ trợ',
  'Đánh giá'
]

const category: string[] = [
  'Ẩm thực đường phố',
  'Đặc sản địa phương',
  'Món ăn gia đình',
  'Kĩ năng nấu nướng',
  'Bí quyết / mẹo'
]

export default function Page() {
  const cookieThemeValue = cookies().get('theme')?.value
  const darkMode = typeof cookieThemeValue === 'string' && cookieThemeValue === 'dark'

  return (
    <div className="min-h-screen grid grid-cols-4 gap-9">
      {/* col 1 */}
      <article className="p-9 flex flex-col gap-11 border-r border-dashed border-r-neutral-400 divide-y divide-dashed divide-neutral-400 dark:border-neutral-500 dark:divide-neutral-500">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-xs text-neutral-800 font-bold tracking-widest dark:text-white">
            MENOÚ
          </h1>
          <div className="flex flex-col items-start gap-3">
            {routes.map((route, index) =>
              <button 
                key={index} 
                className="outline-none text-xl text-neutral-800 font-extrabold dark:text-white"
              >
                {route}
              </button>
            )}
          </div>
        </div>
        <div className="py-5">
          <p className="text-xs text-neutral-500 font-medium">
            Bản quyền © thuộc về Menoú 
          </p>
        </div>
      </article>
      <div className="col-span-3 grid grid-cols-3 divide-x divide-dashed divide-neutral-400 transition-all duration-200 dark:divide-neutral-600 dark:bg-neutral-800 dark:m-3 dark:rounded-xl">
        {/* col 2 */}
        <article className="py-9 px-3 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <IconTags className="text-neutral-800 dark:text-neutral-500" />
            <h2 className="text-sm text-neutral-400 font-bold dark:text-neutral-300">
              Danh mục
            </h2>
          </div>
          <div className="flex flex-col items-start divide-y divide-dashed divide-neutral-400 dark:divide-neutral-600">
            {category.map((item, index) =>
              <div key={index} className="py-7 w-full">
                <button className="block outline-none text-neutral-800 font-bold dark:text-white">
                  {item}
                </button>
              </div>
            )}
          </div>
          <div className="text-center">
            <button className="outline-none">
              <IconArrowNarrowRight 
                size='20px'
                className="text-neutral-800 dark:text-neutral-300"
              />
            </button>
          </div>
        </article>
        {/* col 3 */}
        <article className="py-9 px-3 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <IconBackground className="text-neutral-800 dark:text-neutral-500" />
            <h2 className="text-sm text-neutral-400 font-bold dark:text-neutral-300">
              Được tạo gần đây
            </h2>
          </div>
          <div className="space-y-5">
            <Card saveBtn />
            <Card goBtn />
            <Card goBtn />
          </div>
          <div className="text-center">
            <button className="outline-none">
              <IconArrowNarrowRight 
                size='20px'
                className="text-neutral-800 dark:text-neutral-300"
              />
            </button>
          </div>
        </article>
        {/* col 4 */}
        <article className="p-9 flex flex-col items-start justify-between">
          <div className="w-full text-right">
            <Link 
              href='/auth' 
              className="outline-none text-sm text-neutral-800 font-medium hover:underline dark:text-white"
            >
              Đăng nhập
            </Link>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-neutral-500 font-medium">
              Bạn là người mới ?
              Khám phá ứng dụng và các tính năng với hướng dẫn của chúng tôi.
            </p>
            <button className="outline-none flex items-center group">
              <span className="text-xl text-neutral-800 font-bold dark:text-white">
                Bắt đầu
              </span>
              <IconArrowNarrowRight className="text-neutral-800 transition-transform duration-300 group-hover:translate-x-3 dark:text-white" />
            </button>
          </div>
          <div className="flex justify-end w-full">
            <Theme mode={Boolean(darkMode)} />
          </div>
        </article>
      </div>
    </div>
  )
}