import ProfileActions from "./actions";
import FollowOA from "./follow-oa";
import Subscription from "./Subscription";


export default function ProfilePage() {
  return (
    <div className="min-h-full bg-section p-4 space-y-2.5">
      <Subscription title="Đăng ký thành viên" description="Tích điểm đổi thưởng, mở rộng tiện ích" />
      <ProfileActions />
      <FollowOA />
    </div>
  );
}
