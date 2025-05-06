"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Upload, 
  Filter, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  FileSymlink, 
  CalendarDays,
  Activity
} from "lucide-react";

// Sample equipment data
const equipmentData = [
  {
    id: "EQ-1001",
    name: "MRI Scanner",
    model: "Siemens Magnetom Vida",
    status: "Active",
    lastMaintenance: "2023-07-15",
    nextMaintenance: "2023-10-15",
    department: "Radiology",
    location: "Room 301",
  },
  {
    id: "EQ-1002",
    name: "Surgical Robot",
    model: "Da Vinci Xi",
    status: "Maintenance",
    lastMaintenance: "2023-08-02",
    nextMaintenance: "2023-08-10",
    department: "Surgery",
    location: "OR 5",
  },
  {
    id: "EQ-1003",
    name: "Ventilator",
    model: "Philips Respironics V680",
    status: "Active",
    lastMaintenance: "2023-07-20",
    nextMaintenance: "2023-10-20",
    department: "ICU",
    location: "ICU Bay 3",
  },
  {
    id: "EQ-1004",
    name: "Ultrasound Machine",
    model: "GE Voluson E10",
    status: "Active",
    lastMaintenance: "2023-06-10",
    nextMaintenance: "2023-09-10",
    department: "Obstetrics",
    location: "Room 205",
  },
  {
    id: "EQ-1005",
    name: "Anesthesia Machine",
    model: "Drager Perseus A500",
    status: "Inactive",
    lastMaintenance: "2023-05-15",
    nextMaintenance: "2023-08-15",
    department: "Anesthesiology",
    location: "Storage",
  },
];

// Sample operation/procedure data
const operationData = [
  {
    id: "OP-2001",
    name: "Appendectomy",
    patient: "John Smith",
    doctor: "Dr. Emily Johnson",
    date: "2023-08-15",
    equipment: ["EQ-1002", "EQ-1005"],
    status: "Completed",
  },
  {
    id: "OP-2002",
    name: "MRI Scan - Brain",
    patient: "Sarah Williams",
    doctor: "Dr. Michael Chen",
    date: "2023-08-16",
    equipment: ["EQ-1001"],
    status: "Scheduled",
  },
  {
    id: "OP-2003",
    name: "Cesarean Section",
    patient: "Jessica Brown",
    doctor: "Dr. Lisa Patel",
    date: "2023-08-14",
    equipment: ["EQ-1004", "EQ-1005"],
    status: "Completed",
  }
];

export default function EquipmentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("inventory");

  // Filter equipment based on search term
  const filteredEquipment = equipmentData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Equipment Management</h1>
          <p className="text-blue-200 mt-1">Track and manage medical equipment for operations and treatments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
            <Upload className="mr-2 h-4 w-4" /> Export
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="mr-2 h-4 w-4" /> Add Equipment
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-blue-900 border-blue-800 text-white">
              <DialogHeader>
                <DialogTitle>Add New Equipment</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-blue-200">Equipment Name</label>
                    <Input id="name" placeholder="Enter equipment name" className="bg-blue-800 border-blue-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="model" className="text-sm text-blue-200">Model</label>
                    <Input id="model" placeholder="Enter model number" className="bg-blue-800 border-blue-700 text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm text-blue-200">Department</label>
                    <Input id="department" placeholder="Department" className="bg-blue-800 border-blue-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm text-blue-200">Location</label>
                    <Input id="location" placeholder="Equipment location" className="bg-blue-800 border-blue-700 text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="purchase-date" className="text-sm text-blue-200">Purchase Date</label>
                    <Input id="purchase-date" type="date" className="bg-blue-800 border-blue-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="next-maintenance" className="text-sm text-blue-200">Next Maintenance</label>
                    <Input id="next-maintenance" type="date" className="bg-blue-800 border-blue-700 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm text-blue-200">Additional Notes</label>
                  <textarea 
                    id="notes" 
                    placeholder="Enter any additional information" 
                    className="w-full h-20 rounded-md bg-blue-800 border border-blue-700 text-white p-2"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Save Equipment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4" />
          <Input
            placeholder="Search equipment..."
            className="pl-10 bg-blue-900 border-blue-800 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
            <CalendarDays className="mr-2 h-4 w-4" /> Maintenance Schedule
          </Button>
        </div>
      </div>

      <Tabs defaultValue="inventory" onValueChange={setSelectedTab}>
        <TabsList className="bg-blue-900 border-blue-800">
          <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-800">Inventory</TabsTrigger>
          <TabsTrigger value="operations" className="data-[state=active]:bg-blue-800">Operations</TabsTrigger>
          <TabsTrigger value="maintenance" className="data-[state=active]:bg-blue-800">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-6 mt-6">
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Equipment Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-blue-200">
                  <thead className="text-xs uppercase text-blue-300 border-b border-blue-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">ID</th>
                      <th scope="col" className="px-6 py-3">Equipment</th>
                      <th scope="col" className="px-6 py-3">Model</th>
                      <th scope="col" className="px-6 py-3">Department</th>
                      <th scope="col" className="px-6 py-3">Location</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Last Maintenance</th>
                      <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEquipment.map((equipment) => (
                      <tr key={equipment.id} className="border-b border-blue-800 hover:bg-blue-800/50">
                        <td className="px-6 py-4 font-medium text-white">{equipment.id}</td>
                        <td className="px-6 py-4">{equipment.name}</td>
                        <td className="px-6 py-4">{equipment.model}</td>
                        <td className="px-6 py-4">{equipment.department}</td>
                        <td className="px-6 py-4">{equipment.location}</td>
                        <td className="px-6 py-4">
                          <Badge className={`
                            ${equipment.status === 'Active' ? 'bg-green-900 text-green-300 hover:bg-green-800' : 
                              equipment.status === 'Maintenance' ? 'bg-orange-900 text-orange-300 hover:bg-orange-800' : 
                              'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                          `}>
                            {equipment.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">{equipment.lastMaintenance}</td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm" className="text-blue-300 hover:text-white hover:bg-blue-800">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Total Equipment", value: "54", icon: <Activity className="h-8 w-8 text-blue-400" /> },
              { title: "Active Equipment", value: "47", icon: <CheckCircle className="h-8 w-8 text-green-400" /> },
              { title: "Maintenance Required", value: "7", icon: <AlertCircle className="h-8 w-8 text-orange-400" /> }
            ].map((stat, index) => (
              <Card key={index} className="bg-blue-900 border-blue-800">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <p className="text-blue-200">{stat.title}</p>
                    <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className="bg-blue-800 p-4 rounded-full">
                    {stat.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-6 mt-6">
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Operations & Treatment Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-blue-200">
                  <thead className="text-xs uppercase text-blue-300 border-b border-blue-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">Operation ID</th>
                      <th scope="col" className="px-6 py-3">Procedure</th>
                      <th scope="col" className="px-6 py-3">Patient</th>
                      <th scope="col" className="px-6 py-3">Doctor</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Equipment Used</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {operationData.map((operation) => (
                      <tr key={operation.id} className="border-b border-blue-800 hover:bg-blue-800/50">
                        <td className="px-6 py-4 font-medium text-white">{operation.id}</td>
                        <td className="px-6 py-4">{operation.name}</td>
                        <td className="px-6 py-4">{operation.patient}</td>
                        <td className="px-6 py-4">{operation.doctor}</td>
                        <td className="px-6 py-4">{operation.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {operation.equipment.map((eqId) => (
                              <Badge key={eqId} className="bg-blue-800 hover:bg-blue-700">
                                {eqId}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge className={`
                            ${operation.status === 'Completed' ? 'bg-green-900 text-green-300 hover:bg-green-800' : 
                              operation.status === 'Scheduled' ? 'bg-blue-800 text-blue-300 hover:bg-blue-700' : 
                              'bg-orange-900 text-orange-300 hover:bg-orange-800'}
                          `}>
                            {operation.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm" className="text-blue-300 hover:text-white hover:bg-blue-800">
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-900 border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Most Used Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Surgical Robot (Da Vinci Xi)", count: 24, percentage: 85 },
                    { name: "Anesthesia Machine (Drager Perseus A500)", count: 18, percentage: 70 },
                    { name: "MRI Scanner (Siemens Magnetom Vida)", count: 15, percentage: 55 },
                    { name: "Ultrasound Machine (GE Voluson E10)", count: 12, percentage: 45 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-blue-200">{item.name}</span>
                        <span className="text-blue-300">{item.count} procedures</span>
                      </div>
                      <div className="w-full bg-blue-800 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900 border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Upcoming Procedures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "MRI Scan - Knee", patient: "Michael Davis", date: "Aug 20, 2023", equipment: ["MRI Scanner"] },
                    { name: "Cardiac Surgery", patient: "Robert Wilson", date: "Aug 22, 2023", equipment: ["Heart-Lung Machine", "Surgical Robot"] },
                    { name: "Endoscopy", patient: "Amanda Lee", date: "Aug 23, 2023", equipment: ["Endoscope", "Ultrasound Machine"] },
                    { name: "Cataract Surgery", patient: "David Thompson", date: "Aug 25, 2023", equipment: ["Phacoemulsification System"] },
                  ].map((procedure, index) => (
                    <div key={index} className="bg-blue-800 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">{procedure.name}</h4>
                        <Badge className="bg-blue-700 text-blue-200">{procedure.date}</Badge>
                      </div>
                      <p className="text-blue-300 text-sm">Patient: {procedure.patient}</p>
                      <div className="mt-2 flex gap-1 flex-wrap">
                        {procedure.equipment.map((eq, i) => (
                          <span key={i} className="px-2 py-0.5 bg-blue-900 text-blue-300 rounded-full text-xs">
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6 mt-6">
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <CardTitle className="text-lg text-white">Maintenance Schedule</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-2 md:mt-0">
                      <Plus className="mr-2 h-4 w-4" /> Schedule Maintenance
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-blue-900 border-blue-800 text-white">
                    <DialogHeader>
                      <DialogTitle>Schedule Maintenance</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <label htmlFor="equipment" className="text-sm text-blue-200">Equipment</label>
                        <Input id="equipment" placeholder="Select equipment" className="bg-blue-800 border-blue-700 text-white" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="start-date" className="text-sm text-blue-200">Start Date</label>
                          <Input id="start-date" type="date" className="bg-blue-800 border-blue-700 text-white" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="end-date" className="text-sm text-blue-200">End Date</label>
                          <Input id="end-date" type="date" className="bg-blue-800 border-blue-700 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="technician" className="text-sm text-blue-200">Technician</label>
                        <Input id="technician" placeholder="Assigned technician" className="bg-blue-800 border-blue-700 text-white" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="description" className="text-sm text-blue-200">Description</label>
                        <textarea 
                          id="description" 
                          placeholder="Maintenance details" 
                          className="w-full h-20 rounded-md bg-blue-800 border border-blue-700 text-white p-2"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
                        Cancel
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Schedule
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-blue-200">
                  <thead className="text-xs uppercase text-blue-300 border-b border-blue-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">Equipment ID</th>
                      <th scope="col" className="px-6 py-3">Equipment</th>
                      <th scope="col" className="px-6 py-3">Last Maintenance</th>
                      <th scope="col" className="px-6 py-3">Next Maintenance</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Technician</th>
                      <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEquipment.map((equipment) => (
                      <tr key={equipment.id} className="border-b border-blue-800 hover:bg-blue-800/50">
                        <td className="px-6 py-4 font-medium text-white">{equipment.id}</td>
                        <td className="px-6 py-4">{equipment.name}</td>
                        <td className="px-6 py-4">{equipment.lastMaintenance}</td>
                        <td className="px-6 py-4">{equipment.nextMaintenance}</td>
                        <td className="px-6 py-4">
                          <Badge className={`
                            ${equipment.status === 'Active' ? 'bg-green-900 text-green-300 hover:bg-green-800' : 
                              equipment.status === 'Maintenance' ? 'bg-orange-900 text-orange-300 hover:bg-orange-800' : 
                              'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                          `}>
                            {equipment.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          {equipment.status === 'Maintenance' ? 'Tech. Johnson' : '—'}
                        </td>
                        <td className="px-6 py-4 flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-blue-300 hover:text-white hover:bg-blue-800">
                            View
                          </Button>
                          {equipment.status !== 'Maintenance' && (
                            <Button variant="ghost" size="sm" className="text-orange-300 hover:text-white hover:bg-blue-800">
                              Schedule
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Upcoming Maintenance", 
                icon: <Clock className="h-8 w-8 text-blue-400" />,
                items: [
                  { id: "EQ-1001", name: "MRI Scanner", date: "Oct 15, 2023" },
                  { id: "EQ-1003", name: "Ventilator", date: "Oct 20, 2023" },
                  { id: "EQ-1004", name: "Ultrasound Machine", date: "Sep 10, 2023" },
                ]
              },
              { 
                title: "Currently In Maintenance", 
                icon: <FileSymlink className="h-8 w-8 text-orange-400" />,
                items: [
                  { id: "EQ-1002", name: "Surgical Robot", date: "Aug 2-10, 2023" },
                ]
              },
              { 
                title: "Recently Maintained", 
                icon: <CheckCircle className="h-8 w-8 text-green-400" />,
                items: [
                  { id: "EQ-1005", name: "Anesthesia Machine", date: "May 15, 2023" },
                  { id: "EQ-1003", name: "Ventilator", date: "Jul 20, 2023" },
                  { id: "EQ-1001", name: "MRI Scanner", date: "Jul 15, 2023" },
                ]
              }
            ].map((category, index) => (
              <Card key={index} className="bg-blue-900 border-blue-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="mr-4">{category.icon}</div>
                    <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-2 bg-blue-800 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{item.name}</div>
                          <div className="text-xs text-blue-300">{item.id}</div>
                        </div>
                        <Badge className="bg-blue-700 text-blue-200">{item.date}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}