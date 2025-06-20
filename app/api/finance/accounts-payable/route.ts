
import { NextRequest, NextResponse } from 'next/server'

const payables = [
  {
    id: "AP-001",
    supplierName: "Punjab Farmers Cooperative",
    billNumber: "BILL-2024-001",
    billDate: "2024-03-15",
    dueDate: "2024-04-14",
    totalAmount: 12500000,
    paidAmount: 0,
    pendingAmount: 12500000,
    daysOverdue: 0,
    status: "Pending",
    paymentTerms: "30 days",
    category: "Raw Material Purchase",
    contactPerson: "Rajesh Kumar",
    lastPayment: null,
    nextPaymentDue: "2024-04-14"
  },
  {
    id: "AP-002",
    supplierName: "Transport Solutions Ltd",
    billNumber: "BILL-2024-002",
    billDate: "2024-03-18",
    dueDate: "2024-04-02",
    totalAmount: 250000,
    paidAmount: 100000,
    pendingAmount: 150000,
    daysOverdue: 0,
    status: "Partial",
    paymentTerms: "15 days",
    category: "Transportation",
    contactPerson: "Amit Singh",
    lastPayment: "2024-03-20",
    nextPaymentDue: "2024-04-02"
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: payables,
      totalPayables: payables.reduce((sum, item) => sum + item.pendingAmount, 0),
      overdueAmount: payables.filter(item => item.daysOverdue > 0).reduce((sum, item) => sum + item.pendingAmount, 0)
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch accounts payable' },
      { status: 500 }
    )
  }
}
