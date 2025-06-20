
import { NextRequest, NextResponse } from 'next/server'

const receivables = [
  {
    id: "AR-001",
    customerName: "Government Food Corp",
    invoiceNumber: "INV-2024-001",
    invoiceDate: "2024-03-15",
    dueDate: "2024-04-14",
    totalAmount: 42500000,
    paidAmount: 10000000,
    pendingAmount: 32500000,
    daysOverdue: 0,
    status: "Pending",
    paymentTerms: "30 days",
    contactPerson: "Mr. Sharma",
    lastFollowUp: "2024-03-18",
    nextFollowUp: "2024-03-25"
  },
  {
    id: "AR-002",
    customerName: "Premium Export Ltd",
    invoiceNumber: "INV-2024-002",
    invoiceDate: "2024-03-10",
    dueDate: "2024-03-25",
    totalAmount: 23400000,
    paidAmount: 5000000,
    pendingAmount: 18400000,
    daysOverdue: 0,
    status: "Partial",
    paymentTerms: "15 days",
    contactPerson: "Ms. Priya",
    lastFollowUp: "2024-03-20",
    nextFollowUp: "2024-03-24"
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: receivables,
      totalReceivables: receivables.reduce((sum, item) => sum + item.pendingAmount, 0),
      overdueAmount: receivables.filter(item => item.daysOverdue > 0).reduce((sum, item) => sum + item.pendingAmount, 0)
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch accounts receivable' },
      { status: 500 }
    )
  }
}
