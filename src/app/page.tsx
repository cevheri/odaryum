import { AttentionTracking } from "@/components/attention/AttentionTracking";
import { FocusMode } from "@/components/focus/FocusMode";
import { WarningRecall } from "@/components/recall/WarningRecall";
import { ContentGrid } from "@/components/content/ContentGrid";
import { NotificationBanners } from "@/components/notifications/NotificationBanners";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <NotificationBanners />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
        <AttentionTracking />
        <FocusMode />
        <WarningRecall />
        <div className="lg:col-span-2">
          <ContentGrid />
        </div>
      </div>
    </div>
  );
}
