import ClubForeword from "@/components/club.foreword"
import Link from "next/link"

interface Clubs {
  name: string,
  quantity: number
}

const clubs: Clubs[] = [
  {name: 'Streets cuisine', quantity: 34},
  {name: 'Home', quantity: 12},
  {name: 'Royal', quantity: 23}
] 

export default function ClubPage() {
  return (
    <>
      <ClubForeword />
      <div className="space-y-9 my-5">
        <div className="space-y-3">
          <h2 className="text-neutral-400 text-sm font-medium">
            Khám phá
          </h2>
          <div className="p-5 shadow shadow-neutral-200 rounded-xl">
            <table className="table-auto w-full text-left border-separate border-spacing-5">
              <caption className="caption-bottom">
                <Link href='/club/all'>
                  <button className="text-xs text-sky-500 font-medium hover:underline hover:decoration-1">
                    Xem thêm
                  </button>
                </Link>
              </caption>
              <thead>
                <tr className="text-sm text-neutral-800">
                  <th>Hội quán</th>
                  <th className="hidden sm:block">Thành viên</th>
                </tr>
              </thead>
              <tbody>
                {clubs.map(club =>
                  <tr key={club.name} className="text-sm text-neutral-800">
                    <td className="font-medium">{club.name}</td>
                    <td className="hidden sm:block">{club.quantity}</td>
                    <td className="text-right">
                      <button>
                        Tham gia
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-neutral-400 text-sm font-medium">
            Tạo một hội của riêng bạn
          </h2>
          <div>
            <button className="shadow-md shadow-neutral-200 text-neutral-500 text-sm font-bold w-full p-3 rounded-lg">
              Bắt đầu
            </button>
          </div>
        </div>
      </div>
    </>
  )
}