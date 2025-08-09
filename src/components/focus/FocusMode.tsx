"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatSeconds } from "@/lib/utils";
import { Timer, Pause, Play, RotateCw } from "lucide-react";

export function FocusMode() {
  // Default duration is 25 minutes (1500 seconds)
  const [duration, setDuration] = React.useState<number>(1500);
  const [remaining, setRemaining] = React.useState<number>(1500);
  const [isActive, setIsActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!isActive) return;
    if (remaining <= 0) {
      setIsActive(false);
      return;
    }
    const id = setInterval(() => setRemaining((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [isActive, remaining]);

  function start(): void {
    setRemaining(duration);
    setIsActive(true);
  }
  function pause(): void {
    setIsActive(false);
  }
  function reset(): void {
    setIsActive(false);
    setRemaining(duration);
  }

  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <Timer className="h-5 w-5" />
        <CardTitle>Focus Mode</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-5xl font-bold tracking-tight">{formatSeconds(remaining)}</div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Stay with one task until the timer ends.</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          {!isActive ? (
            <Button onClick={start} size="lg">
              <Play className="mr-2 h-4 w-4" /> Start
            </Button>
          ) : (
            <Button onClick={pause} size="lg" variant="secondary">
              <Pause className="mr-2 h-4 w-4" /> Pause
            </Button>
          )}
          <Button onClick={reset} size="lg" variant="outline">
            <RotateCw className="mr-2 h-4 w-4" /> Reset
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <span>Preset:</span>
          <Button variant="ghost" onClick={() => setDuration(1500)} className="px-2">
            25m
          </Button>
          <Button variant="ghost" onClick={() => setDuration(3000)} className="px-2">
            50m
          </Button>
          <Button variant="ghost" onClick={() => setDuration(600)} className="px-2">
            10m
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-center text-xs text-neutral-500 dark:text-neutral-400">
        Timer is mock and runs client-side only for demo purposes.
      </CardFooter>
    </Card>
  );
}


