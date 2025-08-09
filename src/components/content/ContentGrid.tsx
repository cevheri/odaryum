"use client";

import * as React from "react";
import microContents from "@data/micro-contents.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb } from "lucide-react";

type Micro = { title: string; text: string };

export function ContentGrid() {
  // Simulate async loading for presentation
  const [items, setItems] = React.useState<Micro[] | null>(null);
  React.useEffect(() => {
    const id = setTimeout(() => setItems(microContents.sort(() => 0.5 - Math.random()).slice(0, 6)), 600);
    return () => clearTimeout(id);
  }, []);

  if (!items) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m, idx) => (
        <Card key={`${m.title}-${idx}`} className="h-full">
          <CardHeader className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            <CardTitle>{m.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{m.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


