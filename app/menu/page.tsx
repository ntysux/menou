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
    name: 'Mỳ không tôm', 
    author: 'ntysux', 
    materials: ['1 gói mỳ', 'rau(nếu có)', '1 quả trứng', 'tương(nếu thích)'], 
    required: ['1 nôì', '1 bát lớn', '1 đôi đũa', '1 cái thìa(nếu có)'],
    steps: ['Đun nước sôi', 'Cho rau và trứng vào trong 5 phút sau đó thả mỳ vào', 'cho vào bát và thưởng thức']
  },
  {name: 'Trứng chiên', author: 'ntysux'},
  {name: 'Thịt nguội', author: 'ntysux'},
  {name: 'Cơm cháy', author: 'ntysux'},
  {name: 'Thịt rang', author: 'ntysux'}
]

export default function MenuPage() {
  return (
    <>
      <div className="my-3 grid grid-cols-1 gap-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {data.map((food, index) =>
          <Card key={index} food={food}/>
        )}
      </div>
    </>
  )
}