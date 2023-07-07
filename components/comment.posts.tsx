import { IconDiscountCheckFilled } from "@tabler/icons-react"

interface Props {
  author: string,
  club: string,
  comment: string
}

export default function CommentPosts({author, comment, club}: Props) {
  return (
    <div className="text-left">
      <div className="flex items-center space-x-1">
        <IconDiscountCheckFilled size='18px' className="text-sky-400" />
        <p className="text-sm font-bold text-neutral-800">
          {author} <span className="text-xs text-neutral-300">|{club}|</span>
        </p>
      </div>
      <div className="p-1 px-6 text-neutral-800 text-sm font-medium">
        {comment}
      </div>
    </div>
  )
}