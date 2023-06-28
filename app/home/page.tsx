import Banner from "@/components/banner"
import Base from "@/components/base"
import Card from "@/components/card"

export interface Data {
  name: string,
  author: string
}

const data: Data[] = [
  {name: 'Cá kho', author: 'ntysux'},
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
          <Card key={food.name} food={food} />
        )}
      </Base>
    </>
  )
}