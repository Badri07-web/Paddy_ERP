
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Truck, MapPin, Clock, Fuel, TrendingUp, TrendingDown, BarChart3, Calendar } from 'lucide-react'

const monthlyTransportData = [
  { month: 'Jan', deliveries: 245, fuel: 15200, cost: 125000, distance: 45600 },
  { month: 'Feb', deliveries: 280, fuel: 17800, cost: 142000, distance: 52400 },
  { month: 'Mar', deliveries: 320, fuel: 20100, cost: 168000, distance: 59200 },
  { month: 'Apr', deliveries: 295, fuel: 18500, cost: 155000, distance: 54800 },
  { month: 'May', deliveries: 340, fuel: 21600, cost: 178000, distance: 63200 },
  { month: 'Jun', deliveries: 310, fuel: 19800, cost: 162000, distance: 57600 }
]

const routeAnalysis = [
  { route: 'Mill to Delhi', trips: 45, avgTime: 8.5, fuelEff: 6.2, cost: 45000 },
  { route: 'Mill to Mumbai', trips: 32, avgTime: 14.2, fuelEff: 5.8, cost: 65000 },
  { route: 'Mill to Kolkata', trips: 28, avgTime: 12.8, fuelEff: 6.0, cost: 52000 },
  { route: 'Mill to Chennai', trips: 22, avgTime: 16.5, fuelEff: 5.5, cost: 68000 },
  { route: 'Local Distribution', trips: 156, avgTime: 3.2, fuelEff: 8.5, cost: 78000 }
]

const vehiclePerformance = [
  { name: 'Fuel Efficiency', value: 85, color: '#10B981' },
  { name: 'On-Time Delivery', value: 92, color: '#3B82F6' },
  { name: 'Vehicle Utilization', value: 78, color: '#F59E0B' },
  { name: 'Maintenance Score', value: 88, color: '#8B5CF6' }
]

export default function TransportationAnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Transportation Analytics</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 6 Months
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,790</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Delivery Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7 hrs</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+0.3 hrs</span> from last period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fuel Efficiency</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8 km/l</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.2 km/l</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">332.8K km</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18.2%</span> from last period
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="routes">Route Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Delivery Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyTransportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="deliveries" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transportation Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyTransportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="cost" stroke="#3B82F6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="routes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Route Performance Analysis</CardTitle>
              <CardDescription>Performance metrics for different delivery routes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {routeAnalysis.map((route, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{route.route}</p>
                      <p className="text-sm text-muted-foreground">
                        {route.trips} trips completed
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex space-x-4 text-sm">
                        <span>Avg Time: {route.avgTime}h</span>
                        <span>Fuel: {route.fuelEff} km/l</span>
                      </div>
                      <p className="text-sm font-medium">₹{route.cost.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {vehiclePerformance.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{metric.name}</span>
                      <span className="text-sm text-muted-foreground">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fuel Consumption Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={monthlyTransportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="fuel" stroke="#F59E0B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="costs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cost Breakdown Analysis</CardTitle>
              <CardDescription>Detailed breakdown of transportation costs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Fuel Costs</h4>
                  <div className="text-2xl font-bold text-red-600">₹8.2L</div>
                  <p className="text-xs text-muted-foreground">65% of total costs</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Driver Costs</h4>
                  <div className="text-2xl font-bold text-blue-600">₹2.8L</div>
                  <p className="text-xs text-muted-foreground">22% of total costs</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Maintenance</h4>
                  <div className="text-2xl font-bold text-green-600">₹1.6L</div>
                  <p className="text-xs text-muted-foreground">13% of total costs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
