import { DashboardHeader } from "./DashboardHeader";
import { LeftNav } from "./LeftNav";
import { CenterStage } from "./CenterStage";
import { RightSidebar } from "./RightSidebar";

export default function DashboardLayout() {
    return (
        <div className="h-screen w-screen bg-dash-bg text-dash-text flex flex-col overflow-hidden font-sans">
            {/* Header — Full Width */}
            <DashboardHeader />

            {/* Main Body — Left Nav | Center Stage | Right Sidebar */}
            <div className="flex flex-1 min-h-0">
                <LeftNav />
                <CenterStage />
                <RightSidebar />
            </div>
        </div>
    );
}
