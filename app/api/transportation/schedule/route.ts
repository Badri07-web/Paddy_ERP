
import { NextRequest, NextResponse } from 'next/server'

const transportationData = [
  {
    id: "TRIP-001",
    truckNumber: "PB-10-AB-1234",
    driverName: "Ravi Kumar",
    route: "Punjab Collection Route",
    doIds: ["DO-2024-001", "DO-2024-003"],
    status: "In Transit",
    startTime: "2024-03-20T06:00:00Z",
    estimatedEndTime: "2024-03-20T18:00:00Z",
    actualEndTime: null,
    totalDistance: 120,
    fuelCost: 8500,
    driverPayment: 2000,
    tollCharges: 1200,
    totalCost: 11700,
    currentLocation: "En route to Village Khushpur"
  },
  {
    id: "TRIP-002",
    truckNumber: "HR-12-XY-5678", 
    driverName: "Suresh Singh",
    route: "Haryana Collection Route",
    doIds: ["DO-2024-002"],
    status: "Completed",
    startTime: "2024-03-19T05:30:00Z",
    estimatedEndTime: "2024-03-19T16:00:00Z",
    actualEndTime: "2024-03-19T15:45:00Z",
    totalDistance: 95,
    fuelCost: 6800,
    driverPayment: 1800,
    tollCharges: 900,
    totalCost: 9500,
    currentLocation: "Returned to mill"
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: transportationData,
      totalTrips: transportationData.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch transportation schedules' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newTrip = {
      id: `TRIP-${String(Date.now()).slice(-3)}`,
      ...data,
      status: "Scheduled",
      startTime: data.startTime || new Date().toISOString(),
      actualEndTime: null,
      currentLocation: "At mill - ready to depart",
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newTrip,
      message: 'Transportation scheduled successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to schedule transportation' },
      { status: 500 }
    )
  }
}
