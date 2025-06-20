'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Truck, MapPin, Clock, Fuel, Route, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"

const activeTrips = [
  {
    id: "TRIP-001",
    vehicle: "PB-01-AB-1234",
    driver: "Rajesh Kumar",
    route: "Punjab → Mill",
    cargo: "Basmati Paddy - 25 MT",
    status: "In Transit",
    progress: 65,
    eta: "2:30 PM",
    distance: 245,
    fuelLevel: 75
  },
  {
    id: "TRIP-002",
    vehicle: "HR-02-CD-5678",
    driver: "Suresh Singh",
    route: "Mill → Delhi",
    cargo: "Premium Rice - 18 MT",
    status: "Loading",
    progress: 15,
    eta: "5:45 PM",
    distance: 320,
    fuelLevel: 90
  },
  {
    id: "TRIP-003",
    vehicle: "UP-03-EF-9012",
    driver: "Vikram Yadav",
    route: "Haryana → Mill",
    cargo: "Regular Paddy - 30 MT",
    status: "Departed",
    progress: 25,
    eta: "6:15 PM",
    distance: 180,
    fuelLevel: 85
  }
]

const fleetStatus = [
  {
    vehicle: "PB-01-AB-1234",
    type: "Heavy Truck",
    capacity: "25 MT",
    status: "Active",
    location: "Highway NH-1",
    fuel: 75,
    lastMaintenance: "2024-02-15",
    nextService: "2024-04-15"
  },
  {
    vehicle: "HR-02-CD-5678",
    type: "Medium Truck",
    capacity: "18 MT",
    status: "Loading",
    location: "Mill Gate 2",
    fuel: 90,
    lastMaintenance: "2024-03-01",
    nextService: "2024-05-01"
  },
  {
    vehicle: "UP-03-EF-9012",
    type: "Heavy Truck",
    capacity: "30 MT",
    status: "Active",
    location: "Haryana Border",
    fuel: 85,
    lastMaintenance: "2024-01-20",
    nextService: "2024-03-20"
  },
  {
    vehicle: "RJ-04-GH-3456",
    type: "Light Truck",
    capacity: "12 MT",
    status: "Maintenance",
    location: "Service Center",
    fuel: 45,
    lastMaintenance: "2024-03-18",
    nextService: "2024-03-25"
  }
]

export default function TransportationPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'In Transit':
      case 'Departed':
        return 'bg-green-100 text-green-800'
      case 'Loading':
        return 'bg-blue-100 text-blue-800'
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getFuelColor = (level: number) => {
    if (level > 70) return 'text-green-600'
    if (level > 30) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Transportation Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Route className="h-4 w-4 mr-2" />
            Plan Route
          </Button>
          <Button size="sm">
            <Truck className="h-4 w-4 mr-2" />
            Schedule Trip
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Trips</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3 from yesterday
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fleet Utilization</CardTitle>
            <Route className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              18 of 23 vehicles active
            </p>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Fuel Efficiency</CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 km/L</div>
            <p className="text-xs text-muted-foreground">
              This month average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On-Time Delivery</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <CheckCircle className="h-3 w-3 mr-1" />
                +2.1% this month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active-trips" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active-trips">Active Trips</TabsTrigger>
          <TabsTrigger value="fleet-status">Fleet Status</TabsTrigger>
          <TabsTrigger value="route-optimization">Route Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="active-trips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Live Trip Tracking</CardTitle>
              <CardDescription>Monitor ongoing transportation activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Trip ID</TableHead>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Cargo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>ETA</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeTrips.map((trip) => (
                    <TableRow key={trip.id}>
                      <TableCell className="font-medium">{trip.id}</TableCell>
                      <TableCell>{trip.vehicle}</TableCell>
                      <TableCell>{trip.driver}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          {trip.route}
                        </div>
                      </TableCell>
                      <TableCell>{trip.cargo}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(trip.status)}>
                          {trip.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={trip.progress} className="w-16" />
                          <span className="text-sm">{trip.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          {trip.eta}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fleet-status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fleet Management</CardTitle>
              <CardDescription>Monitor vehicle status and maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Fuel Level</TableHead>
                    <TableHead>Last Service</TableHead>
                    <TableHead>Next Service</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fleetStatus.map((vehicle) => (
                    <TableRow key={vehicle.vehicle}>
                      <TableCell className="font-medium">{vehicle.vehicle}</TableCell>
                      <TableCell>{vehicle.type}</TableCell>
                      <TableCell>{vehicle.capacity}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(vehicle.status)}>
                          {vehicle.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          {vehicle.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Fuel className={`h-4 w-4 ${getFuelColor(vehicle.fuel)}`} />
                          <span className={getFuelColor(vehicle.fuel)}>{vehicle.fuel}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{vehicle.lastMaintenance}</TableCell>
                      <TableCell>
                        {vehicle.status === 'Maintenance' ? (
                          <Badge variant="outline" className="text-yellow-600">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            In Service
                          </Badge>
                        ) : (
                          vehicle.nextService
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="route-optimization" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Route Efficiency</CardTitle>
                <CardDescription>Most efficient routes based on distance and time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Punjab → Mill (Highway)</span>
                  <div className="text-right">
                    <div className="font-medium">245 km</div>
                    <div className="text-sm text-green-600">3.5 hrs</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Haryana → Mill (Direct)</span>
                  <div className="text-right">
                    <div className="font-medium">180 km</div>
                    <div className="text-sm text-green-600">2.8 hrs</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>UP → Mill (State Highway)</span>
                  <div className="text-right">
                    <div className="font-medium">320 km</div>
                    <div className="text-sm text-yellow-600">4.5 hrs</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Analysis</CardTitle>
                <CardDescription>Transportation cost per route</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Punjab Route</span>
                  <div className="text-right">
                    <div className="font-medium">₹128/MT</div>
                    <div className="text-sm text-green-600">Most economical</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Haryana Route</span>
                  <div className="text-right">
                    <div className="font-medium">₹142/MT</div>
                    <div className="text-sm text-blue-600">Balanced</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>UP Route</span>
                  <div className="text-right">
                    <div className="font-medium">₹158/MT</div>
                    <div className="text-sm text-yellow-600">Premium</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}