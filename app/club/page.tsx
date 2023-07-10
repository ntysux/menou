import Link from "next/link"

export default function ClubPage() {
  return (
    <>
      <div className="my-9 space-y-3 text-center sm:max-w-xl sm:mx-auto">
        <h3 className="text-lg text-neutral-600 font-medium">Trang đang phát triển</h3>
        <p className="text-neutral-500 text-sm tracking-wide">
          Nhấn vào <span className="font-semibold hover:underline hover:decoration-1">
            <Link href='/menu'>đây</Link>
          </span> để quay lại menu.
        </p>
      </div>
    </>
  )
}