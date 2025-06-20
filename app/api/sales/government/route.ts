
import { NextRequest, NextResponse } from 'next/server'

const governmentSales = [
  {
    id: "GS-001",
    orderNumber: "GOVT-2024-001",
    department: "Food Corporation of India",
    scheme: "Public Distribution System",
    variety: "Basmati 1121",
    quantity: 5000,
    ratePerMT: 85000,
    totalValue: 425000000,
    orderDate: "2024-03-10",
    deliveryDate: "2024-03-30",
    status: "Approved",
    approvalNumber: "FCI/PDS/2024/001",
    contactOfficer: "Mr. Rajesh Kumar",
    contactNumber: "+91-98765-11111",
    deliveryLocation: "FCI Godown, Chandigarh",
    dispatchStatus: "Partial",
    dispatchedQuantity: 2000,
    pendingQuantity: 3000,
    qualitySpecs: "Grade A+, Moisture < 11%",
    paymentTerms: "30 days from delivery",
    advanceReceived: 100000000,
    balanceAmount: 325000000
  },
  {
    id: "GS-002",
    orderNumber: "GOVT-2024-002",
    department: "State Civil Supplies Corporation",
    scheme: "Antyodaya Anna Yojana",
    variety: "Non-Basmati Rice",
    quantity: 8000,
    ratePerMT: 45000,
    totalValue: 360000000,
    orderDate: "2024-03-15",
    deliveryDate: "2024-04-10",
    status: "In Progress",
    approvalNumber: "SCSC/AAY/2024/002",
    contactOfficer: "Ms. Priya Sharma",
    contactNumber: "+91-98765-22222",
    deliveryLocation: "State Warehouses - Multiple Locations",
    dispatchStatus: "Not Started",
    dispatchedQuantity: 0,
    pendingQuantity: 8000,
    qualitySpecs: "Grade A, Moisture < 12%",
    paymentTerms: "45 days from delivery",
    advanceReceived: 72000000,
    balanceAmount: 288000000
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: governmentSales,
      totalOrders: governmentSales.length,
      totalValue: governmentSales.reduce((sum, order) => sum + order.totalValue, 0),
      pendingOrders: governmentSales.filter(order => order.status !== "Completed").length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch government sales' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newOrder = {
      id: `GS-${String(Date.now()).slice(-3)}`,
      orderNumber: `GOVT-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      ...data,
      orderDate: new Date().toISOString().split('T')[0],
      status: "Pending Approval",
      dispatchStatus: "Not Started",
      dispatchedQuantity: 0,
      pendingQuantity: data.quantity || 0,
      advanceReceived: 0,
      balanceAmount: data.totalValue || 0,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newOrder,
      message: 'Government sales order created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create government sales order' },
      { status: 500 }
    )
  }
}
