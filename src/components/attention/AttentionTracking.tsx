"use client";

import * as React from "react";
import appsData from "@data/distraction-apps.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

type AppItem = { id: string; name: string; isTracked: boolean };

export function AttentionTracking() {
  // Local state based on mock data. In a real app, this would come from server/user settings.
  const [apps, setApps] = React.useState<AppItem[]>(appsData);

  function toggleTracking(appId: string): void {
    setApps((prev) => prev.map((a) => (a.id === appId ? { ...a, isTracked: !a.isTracked } : a)));
  }

  function toggleAll(next: boolean): void {
    setApps((prev) => prev.map((a) => ({ ...a, isTracked: next })));
  }

  const trackedCount = apps.filter((a) => a.isTracked).length;

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          <CardTitle>Attention Tracking</CardTitle>
        </div>
        <Badge variant={trackedCount > 0 ? "success" : "neutral"}>{trackedCount} tracked</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">Toggle all</span>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => toggleAll(true)}>
              Track all
            </Button>
            <Button size="sm" variant="outline" onClick={() => toggleAll(false)}>
              Stop all
            </Button>
          </div>
        </div>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {apps.map((app) => (
            <div key={app.id} className="flex items-center justify-between py-3">
              <span>{app.name}</span>
              <Switch checked={app.isTracked} onCheckedChange={() => toggleTracking(app.id)} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


