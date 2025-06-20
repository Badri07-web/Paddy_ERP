
import { NextRequest, NextResponse } from 'next/server'

const doData = [
  {
    id: "DO-2024-001",
    agreementId: "AGR-2024-001",
    location: "Village Khushpur, Punjab",
    paddyType: "Basmati 1121",
    allocatedQuantity: 250,
    collectedQuantity: 180,
    pendingQuantity: 70,
    deadline: "2024-03-25",
    status: "Partial",
    farmerContact: "+91-98765-12345",
    truckAssigned: "PB-10-AB-1234",
    driver: "Ravi Kumar",
    estimatedDistance: 45,
    transportCost: 12000,
    qualityGrade: "A+",
    moistureContent: 12.5,
    foreignMatter: 0.8,
    createdDate: "2024-03-15",
    lastUpdated: "2024-03-20"
  },
  {
    id: "DO-2024-002", 
    agreementId: "AGR-2024-001",
    location: "Village Rampura, Punjab",
    paddyType: "Basmati 1121",
    allocatedQuantity: 180,
    collectedQuantity: 180,
    pendingQuantity: 0,
    deadline: "2024-03-22",
    status: "Completed",
    farmerContact: "+91-98765-54321",
    truckAssigned: "PB-11-CD-5678",
    driver: "Suresh Singh",
    estimatedDistance: 38,
    transportCost: 10500,
    qualityGrade: "A",
    moistureContent: 13.1,
    foreignMatter: 1.2,
    createdDate: "2024-03-16",
    lastUpdated: "2024-03-22"
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: doData,
      totalDOs: doData.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch DOs' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newDO = {
      id: `DO-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      ...data,
      collectedQuantity: 0,
      pendingQuantity: data.allocatedQuantity,
      status: "Pending",
      createdDate: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0]
    }

    return NextResponse.json({
      success: true,
      data: newDO,
      message: 'DO created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create DO' },
      { status: 500 }
    )
  }
}
