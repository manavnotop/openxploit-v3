"use client"

import { AppSidebar } from "./app-sidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 overflow-hidden">
          <div className="flex items-center h-16 px-4 border-b">
            <SidebarTrigger />
          </div>
        </SidebarInset>
        {children}
      </div>
    </SidebarProvider>
  )
}

