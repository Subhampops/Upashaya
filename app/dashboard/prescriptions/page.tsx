"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pill, FileText } from "lucide-react";

export default function PrescriptionsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-6">
        <Pill className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Prescriptions</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Prescriptions</CardTitle>
          <CardDescription>View and manage your current prescriptions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Prescribed Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Amoxicillin</TableCell>
                <TableCell>500mg</TableCell>
                <TableCell>3 times daily</TableCell>
                <TableCell>2024-01-15</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ibuprofen</TableCell>
                <TableCell>400mg</TableCell>
                <TableCell>As needed</TableCell>
                <TableCell>2024-01-10</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Refill Available
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Prescription History</CardTitle>
            <CardDescription>Past prescriptions and refill history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "December 2023",
                  medications: ["Ciprofloxacin 250mg", "Prednisone 10mg"]
                },
                {
                  date: "November 2023",
                  medications: ["Azithromycin 500mg"]
                }
              ].map((period, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-semibold text-gray-900">{period.date}</h3>
                  <ul className="mt-2 space-y-2">
                    {period.medications.map((medication, medIndex) => (
                      <li key={medIndex} className="flex items-center gap-2 text-gray-600">
                        <FileText className="h-4 w-4" />
                        {medication}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}