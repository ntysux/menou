interface Clubs {
  name: string,
  quantity: number,
  founder: string
}

const clubs: Clubs[] = [
  {name: 'Streets cuisine', quantity: 34, founder: 'Ntysux'},
  {name: 'Home', quantity: 12, founder: 'Tom Cook'},
  {name: 'Royal', quantity: 23, founder: 'Obana'},
  {name: 'Meteo', quantity: 23, founder: 'Mark Zog'},
  {name: 'Teslo', quantity: 23, founder: 'Elon Mut'}
] 

export default function AllClubPage() {
  return (
    <>
      <div className="rounded-xl shadow shadow-neutral-200 p-5">
        <table className="table-auto w-full text-left border-separate border-spacing-5">
          <thead>
            <tr className="text-sm text-neutral-800">
              <th>Hội quán</th>
              <th className="hidden sm:block">Thành viên</th>
              <th className="hidden sm:table-cell">Người sáng lập</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map(club =>
              <tr key={club.name} className="text-sm text-neutral-800">
                <td className="font-medium">{club.name}</td>
                <td className="hidden sm:block">{club.quantity}</td>
                <td className="hidden sm:table-cell">{club.founder}</td>
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
    </>
  )
}