"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  UserPlus, 
  ClipboardCheck, 
  Clock, 
  TrendingUp, 
  Users, 
  FileText,
  Calendar,
  RefreshCw,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";
import Link from "next/link";

// Sample data for charts
const activityData = [
  { name: 'Jan', records: 65 },
  { name: 'Feb', records: 59 },
  { name: 'Mar', records: 80 },
  { name: 'Apr', records: 81 },
  { name: 'May', records: 56 },
  { name: 'Jun', records: 55 },
  { name: 'Jul', records: 40 },
];

const pieData = [
  { name: 'Surgery', value: 35 },
  { name: 'Consultation', value: 45 },
  { name: 'Emergency', value: 20 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

// Recent patient/record data
const recentData = Array.from({ length: 5 }).map((_, i) => ({
  id: `REC-${1000 + i}`,
  patient: `Patient ${i + 1}`,
  doctor: `Dr. Smith ${i + 1}`,
  date: new Date(2023, 7, 20 - i).toLocaleDateString(),
  type: i % 2 === 0 ? 'Consultation' : 'Surgery',
  status: i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'Pending' : 'In Progress'
}));

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Hospital Dashboard</h1>
          <p className="text-blue-200 mt-1">Welcome back, Central Hospital</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
            <RefreshCw className="mr-2 h-4 w-4" /> Sync Data
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <FileText className="mr-2 h-4 w-4" /> New Record
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <TabsList className="bg-blue-900 border-blue-800">
          <TabsTrigger value="overview" className="data-[state=active]:bg-blue-800">Overview</TabsTrigger>
          <TabsTrigger value="patients" className="data-[state=active]:bg-blue-800">Patients</TabsTrigger>
          <TabsTrigger value="records" className="data-[state=active]:bg-blue-800">Records</TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-800">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Patients", value: "2,856", icon: <Users className="h-6 w-6 text-blue-400" />, change: "+12%" },
              { title: "New Records", value: "124", icon: <UserPlus className="h-6 w-6 text-blue-400" />, change: "+18%" },
              { title: "Record Updates", value: "342", icon: <ClipboardCheck className="h-6 w-6 text-blue-400" />, change: "+7%" },
              { title: "Pending Claims", value: "28", icon: <Clock className="h-6 w-6 text-blue-400" />, change: "-5%" }
            ].map((stat, index) => (
              <Card key={index} className="bg-blue-900 border-blue-800">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">{stat.title}</CardTitle>
                  <div className="bg-blue-800 p-2 rounded-full">{stat.icon}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'} flex items-center mt-1`}>
                    {stat.change.startsWith('+') ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingUp className="h-3 w-3 mr-1 transform rotate-180" />}
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-blue-900 border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Medical Records Activity</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={activityData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e3a8a', borderColor: '#1e40af', color: '#ffffff' }} 
                      itemStyle={{ color: '#bfdbfe' }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                    <Bar dataKey="records" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-blue-900 border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Medical Record Types</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={120}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e3a8a', borderColor: '#1e40af', color: '#ffffff' }} 
                      itemStyle={{ color: '#bfdbfe' }}
                      labelStyle={{ color: '#ffffff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-white">Recent Medical Records</CardTitle>
                <Link href="/dashboard/records">
                  <Button variant="ghost" className="text-blue-300 hover:text-white hover:bg-blue-800">
                    View All <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-blue-200">
                  <thead className="text-xs uppercase text-blue-300 border-b border-blue-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">Record ID</th>
                      <th scope="col" className="px-6 py-3">Patient</th>
                      <th scope="col" className="px-6 py-3">Doctor</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Type</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentData.map((record, index) => (
                      <tr key={index} className="border-b border-blue-800 hover:bg-blue-800/50">
                        <td className="px-6 py-4 font-medium text-white">{record.id}</td>
                        <td className="px-6 py-4">{record.patient}</td>
                        <td className="px-6 py-4">{record.doctor}</td>
                        <td className="px-6 py-4">{record.date}</td>
                        <td className="px-6 py-4">{record.type}</td>
                        <td className="px-6 py-4">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              record.status === 'Completed' ? 'bg-green-900 text-green-300' : 
                              record.status === 'Pending' ? 'bg-orange-900 text-orange-300' : 
                              'bg-blue-800 text-blue-300'
                            }`}
                          >
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Blockchain Status Card */}
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Blockchain Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Network Status</span>
                    <span className="text-green-400">Active</span>
                  </div>
                  <Progress value={100} className="h-2 bg-blue-800" indicatorClassName="bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Sync Status</span>
                    <span className="text-blue-300">98%</span>
                  </div>
                  <Progress value={98} className="h-2 bg-blue-800" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Smart Contract</span>
                    <span className="text-green-400">Verified</span>
                  </div>
                  <Progress value={100} className="h-2 bg-blue-800" indicatorClassName="bg-green-500" />
                </div>
              </div>
              
              <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Latest Transactions</h4>
                  <div className="space-y-2">
                    {["0x3a2d...8fc4", "0x7bc1...2a37", "0x9f2e...6d12"].map((tx, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-blue-300">{tx}</span>
                        <span className="text-blue-300">{Math.floor(Math.random() * 10) + 1} min ago</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Contract Address</h4>
                  <div className="text-blue-300 break-all">0x721F89D5eB1ae8A0988c4c7df2a79BE8f114a0b7</div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <span className="text-blue-300">Gas Price</span>
                      <span className="text-blue-300">32 Gwei</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patients" className="mt-6">
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Patient Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-blue-200 py-8 text-center">
                <Activity className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Patient Management Panel</h3>
                <p className="max-w-md mx-auto">
                  View and manage all patients, their medical history, and insurance claims in one place.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="records" className="mt-6">
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Medical Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-blue-200 py-8 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Medical Records Dashboard</h3>
                <p className="max-w-md mx-auto">
                  Create, search, and manage all medical records secured by blockchain technology.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card className="bg-blue-900 border-blue-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Analytics &amp; Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-blue-200 py-8 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                <p className="max-w-md mx-auto">
                  View detailed analytics and generate reports on patient care, insurance claims, and hospital operations.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}