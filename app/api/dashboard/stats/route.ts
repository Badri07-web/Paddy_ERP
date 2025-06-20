
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Simulate dashboard statistics
    const stats = {
      production: {
        dailyRiceProduction: 325,
        yieldPercentage: 68.5,
        activeDOs: 142,
        monthlyRevenue: 24500000
      },
      inventory: {
        rawMaterials: { stock: 2450, status: 'normal' },
        finishedGoods: { stock: 1850, status: 'low' },
        byproducts: { stock: 680, status: 'normal' }
      },
      finance: {
        outstandingReceivables: 12000000,
        pendingPayments: 8500000,
        cashFlow: 4500000,
        profitMargin: 18.5
      },
      operations: {
        qualityScore: 94.2,
        staffAttendance: 86,
        machineEfficiency: 92.1,
        activeTransportation: 12
      }
    }

    return NextResponse.json({
      success: true,
      data: stats
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch dashboard stats' },
      { status: 500 }
    )
  }
}
