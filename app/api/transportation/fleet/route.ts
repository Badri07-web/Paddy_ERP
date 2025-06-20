
import { NextRequest, NextResponse } from 'next/server'

const fleetData = [
  {
    id: "TRUCK-001",
    truckNumber: "PB-10-AB-1234",
    model: "Tata 407",
    capacity: 5,
    status: "In Transit",
    driverName: "Ravi Kumar",
    driverContact: "+91-98765-12345",
    currentLocation: "Village Khushpur, Punjab",
    lastMaintenance: "2024-02-15",
    nextMaintenance: "2024-05-15",
    fuelLevel: 75,
    avgMileage: 12,
    totalTrips: 45,
    totalKm: 12500,
    registrationExpiry: "2025-03-20",
    insuranceExpiry: "2024-12-15",
    fitnessExpiry: "2024-09-30"
  },
  {
    id: "TRUCK-002",
    truckNumber: "HR-12-XY-5678",
    model: "Mahindra Bolero Pickup",
    capacity: 3,
    status: "Available",
    driverName: "Suresh Singh",
    driverContact: "+91-98765-54321",
    currentLocation: "Mill - Parking Area",
    lastMaintenance: "2024-03-01",
    nextMaintenance: "2024-06-01",
    fuelLevel: 90,
    avgMileage: 15,
    totalTrips: 32,
    totalKm: 8900,
    registrationExpiry: "2025-01-10",
    insuranceExpiry: "2024-11-25",
    fitnessExpiry: "2024-08-15"
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: fleetData,
      totalVehicles: fleetData.length,
      availableVehicles: fleetData.filter(truck => truck.status === "Available").length,
      inTransitVehicles: fleetData.filter(truck => truck.status === "In Transit").length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch fleet data' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newVehicle = {
      id: `TRUCK-${String(Date.now()).slice(-3)}`,
      ...data,
      status: "Available",
      totalTrips: 0,
      totalKm: 0,
      fuelLevel: 100,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newVehicle,
      message: 'Vehicle added to fleet successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to add vehicle to fleet' },
      { status: 500 }
    )
  }
}
