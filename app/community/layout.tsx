export default function CommunityLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="mx-3 sm:w-screen sm:max-w-5xl sm:mx-auto">
        {children}
      </div>
    </>
  )
}
