"use client"

import { useState } from "react"
import { GitBranch, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EnvVar {
  key: string
  value: string
  id: string
}

interface UrlPath {
  path: string
  id: string
}

export default function DeploymentForm() {
  const [envVars, setEnvVars] = useState<EnvVar[]>([])
  const [urlPaths, setUrlPaths] = useState<UrlPath[]>([])

  const addEnvVar = () => {
    setEnvVars([...envVars, { key: "", value: "", id: Math.random().toString() }])
  }

  const removeEnvVar = (id: string) => {
    setEnvVars(envVars.filter((env) => env.id !== id))
  }

  const updateEnvVar = (id: string, field: "key" | "value", value: string) => {
    setEnvVars(
      envVars.map((env) => {
        if (env.id === id) {
          return { ...env, [field]: value }
        }
        return env
      }),
    )
  }

  const addUrlPath = () => {
    setUrlPaths([...urlPaths, { path: "", id: Math.random().toString() }])
  }

  const removeUrlPath = (id: string) => {
    setUrlPaths(urlPaths.filter((url) => url.id !== id))
  }

  const updateUrlPath = (id: string, value: string) => {
    setUrlPaths(
      urlPaths.map((url) => {
        if (url.id === id) {
          return { ...url, path: value }
        }
        return url
      }),
    )
  }

  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Test Project</CardTitle>
          <CardDescription>Clone your project from a Git repository, and let us handle VA-PT</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="repo">GitHub Repository</Label>
            <div className="relative">
              <GitBranch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="repo" placeholder="https://github.com/username/repo" className="pl-9" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>URL Paths to be Tested</Label>
              <Button variant="outline" size="sm" onClick={addUrlPath} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add URL Path
              </Button>
            </div>
            <div className="space-y-4">
              {urlPaths.map((url) => (
                <div key={url.id} className="flex gap-4">
                  <Input
                    placeholder="/api/users"
                    value={url.path}
                    onChange={(e) => updateUrlPath(url.id, e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeUrlPath(url.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Environment Variables</Label>
              <Button variant="outline" size="sm" onClick={addEnvVar} className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Variable
              </Button>
            </div>
            <div className="space-y-4">
              {envVars.map((env) => (
                <div key={env.id} className="flex gap-4">
                  <Input
                    placeholder="KEY"
                    value={env.key}
                    onChange={(e) => updateEnvVar(env.id, "key", e.target.value)}
                  />
                  <Input
                    placeholder="VALUE"
                    value={env.value}
                    onChange={(e) => updateEnvVar(env.id, "value", e.target.value)}
                  />
                  <Button variant="ghost" size="icon" onClick={() => removeEnvVar(env.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-end gap-4">
          <Button className="w-full">Start Test</Button>
          Test might take some time. Approximately 20-25 minutes.
        </CardFooter>
      </Card>
    </div>
  )
}
