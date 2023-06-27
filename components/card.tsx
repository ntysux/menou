import { Data } from "@/app/home/page";

export default function Card({food}: {food: Data}) {
  return (
    <>
      <div className="space-y-3 p-3 rounded-lg hover:ring-1 hover:ring-neutral-200 hover:ring-inset">
        <div className="py-9 bg-neutral-200/50 rounded-lg" />
        <div>
          <p className="text-sm font-bold text-neutral-700">
            {food.name}
          </p>
          <i className="text-xs text-neutral-600">bởi <span className="font-medium">
            {food.author}
          </span></i>
        </div>
      </div>
    </>
  )
}