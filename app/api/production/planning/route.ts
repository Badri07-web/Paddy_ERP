
import { NextRequest, NextResponse } from 'next/server'

const productionPlans = [
  {
    id: "PP-001",
    planNumber: "PLAN-2024-001",
    planDate: "2024-03-20",
    targetDate: "2024-03-25",
    inputMaterial: "Basmati Paddy 1121",
    inputQuantity: 1000,
    expectedOutput: 680,
    expectedYield: 68.0,
    productType: "Basmati Rice Premium",
    priority: "High",
    status: "Scheduled",
    millOperator: "Ravi Kumar",
    qualityTarget: "A+",
    shift: "Day Shift",
    machineAllocated: "Mill Unit 1",
    remarks: "Priority order for government contract",
    salesOrder: "SO-001"
  },
  {
    id: "PP-002",
    planNumber: "PLAN-2024-002",
    planDate: "2024-03-21",
    targetDate: "2024-03-26",
    inputMaterial: "Basmati Paddy 1509",
    inputQuantity: 800,
    expectedOutput: 544,
    expectedYield: 68.0,
    productType: "Basmati Rice Standard",
    priority: "Medium",
    status: "In Progress",
    millOperator: "Suresh Singh",
    qualityTarget: "A",
    shift: "Night Shift",
    machineAllocated: "Mill Unit 2",
    remarks: "Export order - monitor quality closely",
    salesOrder: "SO-002"
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: productionPlans,
      totalPlans: productionPlans.length,
      scheduledPlans: productionPlans.filter(plan => plan.status === "Scheduled").length,
      inProgressPlans: productionPlans.filter(plan => plan.status === "In Progress").length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch production plans' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newPlan = {
      id: `PP-${String(Date.now()).slice(-3)}`,
      planNumber: `PLAN-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      ...data,
      planDate: new Date().toISOString().split('T')[0],
      status: "Scheduled",
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newPlan,
      message: 'Production plan created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create production plan' },
      { status: 500 }
    )
  }
}
