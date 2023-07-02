export default function Dashboard() {
  return(
    <>
      <div className="flex gap-x-3 xl:max-w-5xl mx-3 sm:mx-auto">
        <button className="p-3 rounded-lg shadow-md shadow-neutral-200/75 text-sm font-normal hover:shadow-lg">
          Món mới
        </button>
        <button className="p-3 text-sm font-normal hover:font-medium">
          +0 được chọn
        </button>
      </div>
    </>
  )
}