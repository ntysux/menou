import { IconCircleCheck, IconDiscountCheckFilled } from "@tabler/icons-react";

export default function BannerUser() {
  return (
    <div className="flex items-center justify-between p-5 rounded-lg shadow shadow-neutral-200 mx-3 sm:max-w-5xl sm:mx-auto">
      <div className="flex items-center gap-x-1">
        {/* <IconDiscountCheckFilled size='18px' className="text-sky-400" /> */}
        <IconCircleCheck size='18px' className="check-infinity" />
        <p className="text-neutral-800 text-sm font-semibold tracking-wide">
          Ntysux
        </p>
      </div>
      <button className="text-sm text-neutral-500 font-medium">
        Đăng xuất
      </button>
    </div>  
  )
}