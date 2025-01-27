import { DashboardContent } from "@/components/dashboard/dashboard-content";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function Test(){
  return(
    <DashboardShell >
      <DashboardContent />
    </DashboardShell>
  );
}