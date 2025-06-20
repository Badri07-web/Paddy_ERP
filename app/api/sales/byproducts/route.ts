
import { NextRequest, NextResponse } from 'next/server'

const byproductSales = [
  {
    id: "BS-001",
    orderNumber: "BP-SALE-2024-001",
    customerName: "Cattle Feed Industries Ltd",
    customerType: "Commercial",
    productType: "Rice Bran",
    quantity: 200,
    ratePerMT: 18000,
    totalValue: 3600000,
    orderDate: "2024-03-15",
    deliveryDate: "2024-03-22",
    status: "Dispatched",
    contactPerson: "Mr. Amit Singh",
    contactNumber: "+91-98765-33333",
    deliveryAddress: "Industrial Area, Ludhiana",
    invoiceNumber: "INV-BP-2024-001",
    dispatchedQuantity: 200,
    pendingQuantity: 0,
    qualitySpecs: "Oil Content: 18-20%, Protein: 12-14%",
    paymentStatus: "Paid",
    paidAmount: 3600000,
    balanceAmount: 0
  },
  {
    id: "BS-002",
    orderNumber: "BP-SALE-2024-002",
    customerName: "Brewery Solutions Pvt Ltd",
    customerType: "Commercial",
    productType: "Broken Rice",
    quantity: 150,
    ratePerMT: 25000,
    totalValue: 3750000,
    orderDate: "2024-03-18",
    deliveryDate: "2024-03-25",
    status: "Confirmed",
    contactPerson: "Ms. Ritu Sharma",
    contactNumber: "+91-98765-44444",
    deliveryAddress: "Brewery Complex, Gurgaon",
    invoiceNumber: null,
    dispatchedQuantity: 0,
    pendingQuantity: 150,
    qualitySpecs: "Broken Grade: 75-80%, Moisture < 12%",
    paymentStatus: "Advance Received",
    paidAmount: 750000,
    balanceAmount: 3000000
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: byproductSales,
      totalOrders: byproductSales.length,
      totalValue: byproductSales.reduce((sum, order) => sum + order.totalValue, 0),
      pendingValue: byproductSales.reduce((sum, order) => sum + order.balanceAmount, 0)
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch byproduct sales' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newOrder = {
      id: `BS-${String(Date.now()).slice(-3)}`,
      orderNumber: `BP-SALE-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      ...data,
      orderDate: new Date().toISOString().split('T')[0],
      status: "Pending",
      invoiceNumber: null,
      dispatchedQuantity: 0,
      pendingQuantity: data.quantity || 0,
      paymentStatus: "Pending",
      paidAmount: 0,
      balanceAmount: data.totalValue || 0,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newOrder,
      message: 'Byproduct sales order created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create byproduct sales order' },
      { status: 500 }
    )
  }
}
