
import { NextRequest, NextResponse } from 'next/server'

const salesOrders = [
  {
    id: "SO-001",
    orderNumber: "ORD-2024-001",
    customerName: "Government Food Corp",
    customerType: "Government",
    productType: "Basmati Rice Premium",
    variety: "1121",
    quantity: 500,
    ratePerMT: 85000,
    totalValue: 42500000,
    orderDate: "2024-03-15",
    deliveryDate: "2024-03-30",
    status: "Confirmed",
    paymentTerms: "30 days",
    deliveryAddress: "FCI Godown, Sector 15, Chandigarh",
    contactPerson: "Mr. Sharma",
    contactNumber: "+91-98765-11111",
    dispatchStatus: "Pending",
    invoiceNumber: null,
    advanceReceived: 10000000,
    balanceAmount: 32500000
  },
  {
    id: "SO-002",
    orderNumber: "ORD-2024-002",
    customerName: "Premium Export Ltd",
    customerType: "Commercial",
    productType: "Basmati Rice Standard",
    variety: "1509",
    quantity: 300,
    ratePerMT: 78000,
    totalValue: 23400000,
    orderDate: "2024-03-18",
    deliveryDate: "2024-04-05",
    status: "In Production",
    paymentTerms: "15 days",
    deliveryAddress: "Export Terminal, JNPT, Mumbai",
    contactPerson: "Ms. Priya",
    contactNumber: "+91-98765-22222",
    dispatchStatus: "Partial",
    invoiceNumber: "INV-2024-002",
    advanceReceived: 5000000,
    balanceAmount: 18400000
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: salesOrders,
      totalOrders: salesOrders.length,
      totalValue: salesOrders.reduce((sum, order) => sum + order.totalValue, 0),
      pendingOrders: salesOrders.filter(order => order.status === "Pending").length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch sales orders' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newOrder = {
      id: `SO-${String(Date.now()).slice(-3)}`,
      orderNumber: `ORD-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      ...data,
      orderDate: new Date().toISOString().split('T')[0],
      status: "Pending",
      dispatchStatus: "Not Started",
      invoiceNumber: null,
      advanceReceived: 0,
      balanceAmount: data.totalValue || 0,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newOrder,
      message: 'Sales order created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create sales order' },
      { status: 500 }
    )
  }
}
