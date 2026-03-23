import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"

export const HeaderAccount =() => {
    useAuth();
    return (
        <>
        <div className="inline-flex items-center gap-x-[5px] text-white font-[600] sm:text-[16px] text-[12px] relative group/sub-1">
              {/* Chưa đăng nhập */}
              <Link href="#" className="">
                Đăng Nhập
              </Link>
              <span className="">/</span>
              <Link href="#" className="">
                Đăng Ký
              </Link>

              {/* Đã đăng nhập
              <Link href="#" className="">LG Elect...</Link>
              <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#000065] hidden group-hover/sub-1:block z-[999]">
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Thông tin công ty
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Quản lý công việc
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Quản lý CV
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Đăng xuất
                  </Link>
                </li>
              </ul> */}
            </div>
        </>
    )
}