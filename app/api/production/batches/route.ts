
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const batches = [
      {
        id: "BATCH-001",
        batchNumber: "BATCH-2024-045",
        productType: "Basmati Rice Premium",
        inputMaterial: "Basmati Paddy 1121",
        inputQuantity: 500,
        outputQuantity: 342.5,
        yieldPercentage: 68.5,
        startDate: "2024-03-18",
        endDate: "2024-03-19",
        status: "Completed",
        qualityGrade: "A+",
        moistureContent: 11.2,
        brokenGrains: 2.1,
        millOperator: "Ravi Kumar",
        qualityInspector: "Suresh Patel",
        remarks: "Excellent quality batch"
      },
      {
        id: "BATCH-002",
        batchNumber: "BATCH-2024-046",
        productType: "Basmati Rice Standard",
        inputMaterial: "Basmati Paddy 1509",
        inputQuantity: 600,
        outputQuantity: 408,
        yieldPercentage: 68.0,
        startDate: "2024-03-19",
        endDate: null,
        status: "In Progress",
        qualityGrade: "Pending",
        moistureContent: 11.5,
        brokenGrains: 2.8,
        millOperator: "Amit Singh",
        qualityInspector: "Pending",
        remarks: "85% complete"
      }
    ]

    return NextResponse.json({
      success: true,
      data: batches,
      totalBatches: batches.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch production batches' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newBatch = {
      id: `BATCH-${Date.now()}`,
      batchNumber: `BATCH-2024-${String(Date.now()).slice(-3)}`,
      ...data,
      startDate: new Date().toISOString().split('T')[0],
      status: "Started",
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newBatch,
      message: 'Production batch created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create production batch' },
      { status: 500 }
    )
  }
}
