import { Metadata } from "next"
import { CardCompanyItem } from "@/app/components/card/CardCompanyItem"

export const metadata: Metadata = {
  title: "Danh sách công ty",
  description: "Mô tả trang danh sách công ty...",
}

const dummyCompanies = [
  {
    id: "1",
    logo: "/assets/images/demo-cong-ty-1.png",
    companyName: "LG Electronics Development Vietnam (LGEDV)",
    cityName: "Ho Chi Minh",
    totalJob: 5
  },
  {
    id: "2",
    logo: "/assets/images/demo-cong-ty-1.png",
    companyName: "Samsung Electronics Vietnam",
    cityName: "Ha Noi",
    totalJob: 8
  },
  {
    id: "3",
    logo: "/assets/images/demo-cong-ty-1.png",
    companyName: "Apple Vietnam",
    cityName: "Da Nang",
    totalJob: 3
  }
]

export default function CompanyListPage() {
  return (
    <>
      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Nhà tuyển dụng hàng đầu
          </h2>
          {/* Wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Item */}
            {dummyCompanies.map(company => (
              <CardCompanyItem key={company.id} item={company} />
            ))}
          </div>

          <div className="mt-[30px]">
            <select name="" className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042] outline-none">
              <option value="">Trang 1</option>
              <option value="">Trang 2</option>
              <option value="">Trang 3</option>
            </select>
          </div>

        </div>
      </div>
      {/* End Section 2 */}
    </>
  )
}