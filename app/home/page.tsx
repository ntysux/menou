import Banner from "@/components/banner"
import Base from "@/components/base"
import Card from "@/components/card"
import CardDialog from "@/components/card.dialog"

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

export default function HomePage() {
  return (
    <>
      <Banner />
      <Base>
        {data.map(food =>
          <CardDialog food={food} key={food.name}>
            <Card food={food} />
          </CardDialog>
        )}
      </Base>
    </>
  )
}