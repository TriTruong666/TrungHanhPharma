import {
  OrderHistoryIcon,
  PackageIcon,
  ProfileIcon,
  VoucherIcon,
  TermsAndPoliciesIcon,
} from "@/components/vectors";
import { usePolicy, useToBeImplemented } from "@/hooks";

export default function ProfileActions() {
  const toBeImplemented = useToBeImplemented();
  const navigateToPolicy = usePolicy();
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4 border-[0.5px] border-black/15">
      {[
        {
          label: "Thông tin tài khoản",
          icon: ProfileIcon,
          onClick: toBeImplemented,
        },
        {
          label: "Ví voucher",
          icon: VoucherIcon,
          onClick: toBeImplemented,
        },
        {
          label: "Theo dõi đơn hàng",
          icon: PackageIcon,
          onClick: toBeImplemented,
        },
        {
          label: "Lịch sử mua hàng",
          icon: OrderHistoryIcon,
          onClick: toBeImplemented,
        },
        {
          label: "Chính sách và điều khoản",
          icon: TermsAndPoliciesIcon,
          onClick: navigateToPolicy,
        },
      ].map((action) => (
        <div
          key={action.label}
          className="flex items-center gap-2 cursor-pointer"
          onClick={action.onClick}
        >
          <div className="w-10 h-10 rounded-full bg-[#EBEFF7] flex items-center justify-center">
            <action.icon active />
          </div>
          <div className="text-sm">{action.label}</div>
        </div>
      ))}
    </div>
  );
}
