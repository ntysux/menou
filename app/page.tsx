import { IconArrowNarrowRight, IconBackground, IconVersions } from "@tabler/icons-react"
import Card from "./_ui/card"

export default function Page() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-4 gap-9">
        <div className="border-r border-r-neutral-400 border-dashed p-9 flex flex-col gap-11 divide-y divide-neutral-400 divide-dashed">
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="text-neutral-800 text-xs font-bold tracking-widest">
              MENOÚ
            </h1>
            <div className="flex flex-col items-start gap-3">
              <button className="text-xl text-neutral-800 font-extrabold">
                Trang chủ
              </button>
              <button className="text-xl text-neutral-800 font-extrabold">
                Hỗ trợ
              </button>
              <button className="text-xl text-neutral-800 font-extrabold">
                Đánh giá
              </button>
            </div>
          </div>
          <div className="py-5">
            <p className="text-xs text-neutral-500 font-medium">
              Bản quyền © thuộc về Menoú 
            </p>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 divide-x divide-neutral-400 divide-dashed">
          <div className="py-9 px-3 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <IconVersions className="text-neutral-800" />
              <h2 className="text-sm text-neutral-400 font-medium">
                Danh mục
              </h2>
            </div>
            <div className="flex flex-col items-start divide-y divide-neutral-400 divide-dashed">
              <div className="py-7 w-full">
                <button className="block text-neutral-800 font-extrabold">
                  Ẩm thực đường phố
                </button>
              </div>
              <div className="py-7 w-full">
                <button className="block text-neutral-800 font-extrabold">
                  Đặc sản địa phương
                </button>
              </div>
              <div className="py-7 w-full">
                <button className="block text-neutral-800 font-extrabold">
                  Món ăn gia đình
                </button>
              </div>
              <div className="py-7 w-full">
                <button className="block text-neutral-800 font-extrabold">
                  Kĩ năng nấu nướng
                </button>
              </div>
              <div className="py-7 w-full">
                <button className="block text-neutral-800 font-extrabold">
                  Bí quyết / mẹo
                </button>
              </div>
            </div>
            <div className="text-center">
              <button className="outline-none">
                <IconArrowNarrowRight 
                  size='20px'
                  className="text-neutral-800"
                />
              </button>
            </div>
          </div>

          <div className="py-9 px-3 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <IconBackground className="text-neutral-800" />
              <h2 className="text-sm text-neutral-400 font-medium">
                Được tạo gần đây
              </h2>
            </div>
            <div className="space-y-5">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="text-center">
              <button className="outline-none">
                <IconArrowNarrowRight 
                  size='20px'
                  className="text-neutral-800"
                />
              </button>
            </div>
          </div>

          <div className="p-9 flex flex-col items-start justify-between">
            <div className="text-right">
              <button className="outline-none text-sm text-neutral-800 font-medium hover:underline">
                Đăng nhập
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-neutral-500 font-medium">
                Bạn là người mới ?
                Tạo công thức nấu ăn đầu tiên với hướng dẫn của chúng tôi.
              </p>
              <button className="outline-none flex items-center group">
                <span className="text-xl text-neutral-800 font-bold">
                  Bắt đầu
                </span>
                <IconArrowNarrowRight className="text-neutral-800 transition-transform duration-300 group-hover:translate-x-3" />
              </button>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}