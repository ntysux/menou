import Card from "@/components/card"

export interface Data {
  name: string,
  author: string,
  materials?: string[],
  required?: string[],
  steps?: string[] 
}

const data: Data[] = [
  {
    name: 'Cá kho', 
    author: 'ntysux', 
    materials: ['Cá ngừ', 'kẹo đắng', 'dầu ăn', 'tương'], 
    required: ['Nồi', 'Đũa', 'Dao'],
    steps: ['Cho tất cả vào nồi', 'Bắc ra rồi thưởng thức']
  },
  {name: 'Trứng chiên', author: 'ntysux'},
  {name: 'Thịt nguội', author: 'ntysux'},
  {name: 'Cơm cháy', author: 'ntysux'},
  {name: 'Thịt rang', author: 'ntysux'}
]

export default function MenuPage() {
  return (
    <>
      <div className="max-w-5xl my-3 mx-3 grid grid-cols-1 gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:mx-auto">
        {data.map((food, key) =>
          <Card key={key} food={food} />
        )}
      </div>
    </>
  )
}