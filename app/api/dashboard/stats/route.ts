
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const stats = {
      production: {
        daily: 125.5,
        monthly: 3750,
        yearly: 45000,
        efficiency: 92.3
      },
      inventory: {
        rawMaterials: 2450,
        finishedGoods: 1850,
        byproducts: 560
      },
      financial: {
        revenue: 25500000,
        expenses: 18200000,
        profit: 7300000,
        profitMargin: 28.6
      },
      quality: {
        averageGrade: 'A',
        defectRate: 2.1,
        customerSatisfaction: 96.8
      }
    }
    
    return NextResponse.json(stats)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    )
  }
}
