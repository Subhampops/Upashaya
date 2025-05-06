"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClipboardList } from "lucide-react";

export default function RecordsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <ClipboardList className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Medical Records</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Medical Records</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            <div className="space-y-4">
              <p className="text-muted-foreground text-center">
                No records found. Medical records will appear here once they are added to the system.
              </p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}