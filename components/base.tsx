export default function Base({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="max-w-5xl my-3 mx-3 grid grid-cols-1 gap-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:mx-auto">
        {children}
      </div>
    </>
  )
}