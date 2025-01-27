import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export function DashboardContent() {
  return (
    <div className="flex-1 w-full h-full p-4 md:p-6 lg:p-8 overflow-y-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vulnerabilities</CardTitle>
            <Shield className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+10 from last scan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Vulnerabilities</CardTitle>
            <AlertTriangle className="w-4 h-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">-2 from last scan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64</div>
            <p className="text-xs text-muted-foreground">+8 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ongoing Pentests</CardTitle>
            <Shield className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 completed this month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 max-w-7xl mx-auto">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Vulnerabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "SQL Injection", severity: "Critical", host: "example.com" },
                { name: "XSS", severity: "High", host: "app.example.com" },
                { name: "CSRF", severity: "Medium", host: "api.example.com" },
              ].map((vuln) => (
                <div key={vuln.name} className="flex items-center">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{vuln.name}</p>
                    <p className="text-sm text-muted-foreground">{vuln.host}</p>
                  </div>
                  <Badge variant={vuln.severity === "Critical" ? "destructive" : "secondary"}>{vuln.severity}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Latest Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert>
                <AlertTriangle className="w-4 h-4" />
                <AlertTitle>New critical vulnerability detected</AlertTitle>
                <AlertDescription>
                  A new critical vulnerability has been found in the main application server.
                </AlertDescription>
              </Alert>
              <Alert>
                <Shield className="w-4 h-4" />
                <AlertTitle>Pentest completed</AlertTitle>
                <AlertDescription>
                  The scheduled penetration test for the payment gateway has been completed.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

