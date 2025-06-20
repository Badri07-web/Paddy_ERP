
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Truck, Route, Clock, IndianRupee, TrendingUp, TrendingDown, MapPin, Fuel } from "lucide-react"

const monthlyData = [
  { month: 'Jan', trips: 120, cost: 580000, fuel: 45000, distance: 15600 },
  { month: 'Feb', trips: 135, cost: 620000, fuel: 48000, distance: 17200 },
  { month: 'Mar', trips: 150, cost: 680000, fuel: 52000, distance: 19100 },
  { month: 'Apr', trips: 140, cost: 640000, fuel: 49000, distance: 17800 },
  { month: 'May', trips: 165, cost: 750000, fuel: 56000, distance: 20500 },
  { month: 'Jun', trips: 155, cost: 710000, fuel: 54000, distance: 19800 }
]

const routeData = [
  { route: 'City Route A', percentage: 35, cost: 250000, trips: 45 },
  { route: 'City Route B', percentage: 25, cost: 180000, trips: 32 },
  { route: 'Highway Route', percentage: 20, cost: 220000, trips: 28 },
  { route: 'Rural Route', percentage: 15, cost: 120000, trips: 18 },
  { route: 'Express Route', percentage: 5, cost: 80000, trips: 8 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function TransportationAnalytics() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Transportation Analytics</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Export Report
          </Button>
          <Button size="sm">Generate Analysis</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">865</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transportation Cost</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹3,98,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.3%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fuel Consumption</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,450L</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.1%
              </span>
              efficiency improved
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Trip Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 hrs</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -15 mins
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="routes">Route Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="costs">Cost Breakdown</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Transportation Trends</CardTitle>
                <CardDescription>Trips, costs, and fuel consumption over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="trips" fill="#8884d8" name="Trips" />
                    <Bar dataKey="cost" fill="#82ca9d" name="Cost (₹)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Route Distribution</CardTitle>
                <CardDescription>Transportation volume by route type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={routeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ route, percentage }) => `${route}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentage"
                    >
                      {routeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="routes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Route Performance Analysis</CardTitle>
              <CardDescription>Detailed breakdown of each transportation route</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {routeData.map((route, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <div>
                        <h4 className="font-medium">{route.route}</h4>
                        <p className="text-sm text-muted-foreground">{route.trips} trips this month</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">₹{route.cost.toLocaleString()}</div>
                      <Badge variant="outline">{route.percentage}% of total</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fuel Efficiency Trends</CardTitle>
              <CardDescription>Fuel consumption and efficiency metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="fuel" stroke="#8884d8" name="Fuel (L)" />
                  <Line type="monotone" dataKey="distance" stroke="#82ca9d" name="Distance (km)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costs" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
                <CardDescription>Transportation cost components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Fuel Costs</span>
                  <span className="font-medium">₹2,45,000 (61.5%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Driver Wages</span>
                  <span className="font-medium">₹1,20,000 (30.2%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Vehicle Maintenance</span>
                  <span className="font-medium">₹25,000 (6.3%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance & Others</span>
                  <span className="font-medium">₹8,000 (2.0%)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost per Trip Analysis</CardTitle>
                <CardDescription>Average cost metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Average Cost per Trip</span>
                  <span className="font-medium">₹460</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost per Kilometer</span>
                  <span className="font-medium">₹20.15</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost per Liter Fuel</span>
                  <span className="font-medium">₹31.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Fuel Efficiency</span>
                  <span className="font-medium">15.8 km/L</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
