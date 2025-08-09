"use client";

import * as React from "react";
import suggestions from "@data/recall-suggestions.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BellRing } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Suggestion = { id: string; title: string; duration: number; content: string };

export function WarningRecall() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<Suggestion | null>(null);

  function trigger(): void {
    setOpen(true);
    setSelected(null);
  }

  function choose(s: Suggestion): void {
    setSelected(s);
  }

  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <BellRing className="h-5 w-5" />
        <CardTitle>Warning & Recall</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Use this mock trigger to simulate entering a distraction app.
        </p>
        <Button onClick={trigger}>I entered a distraction app</Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            {!selected ? (
              <div>
                <DialogHeader>
                  <DialogTitle>Looks like you’re distracted</DialogTitle>
                  <DialogDescription>Choose an alternative action to get back on track.</DialogDescription>
                </DialogHeader>
                <div className="mt-4 grid gap-2">
                  {suggestions.map((s) => (
                    <Button key={s.id} variant="secondary" onClick={() => choose(s)}>
                      {s.title} ({Math.round(s.duration / 60)} min)
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <DialogHeader>
                  <DialogTitle>{selected.title}</DialogTitle>
                  <DialogDescription>Estimated time: {Math.round(selected.duration / 60)} min</DialogDescription>
                </DialogHeader>
                <div className="mt-3 text-sm leading-relaxed">{selected.content}</div>
                <DialogFooter>
                  <Button onClick={() => setSelected(null)} variant="outline">
                    Back
                  </Button>
                  <Button onClick={() => setOpen(false)}>Done</Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}


