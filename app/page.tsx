import Link from "next/link"

export default function HeroPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-screen max-w-xl space-y-5 mx-5">
        <div className="relative isolate overflow-hidden bg-neutral-50 p-2 rounded-lg">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <h1 className="text-2xl font-light text-neutral-800 tracking-widest">
            Menoú
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Link href='/home' className="p-5 ring-1 ring-neutral-200 ring-inset rounded-lg">
            <h2 className="font-semibold text-neutral-700">Cá nhân</h2>
            <p className="text-sm text-neutral-600">Tạo lưu các món ăn của riêng bạn.</p>
          </Link>
          <Link href='/community' className="p-5 shadow-md shadow-neutral-200 rounded-lg">
            <h2 className="font-semibold text-neutral-700">Cộng đồng</h2>
            <p className="text-sm text-neutral-600">Khám phá các công thức và món ăn mới.</p>
          </Link>
        </div>
        <p className="text-sm font-medium text-neutral-400">
          <i>hoặc</i>
        </p>
        <div>
          <Link href='/signin'>
            <button className="text-sm font-bold text-neutral-800">
              Đăng nhập <span aria-hidden="true">&rarr;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}