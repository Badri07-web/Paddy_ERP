
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const rawMaterials = [
      {
        id: "RM-001",
        itemCode: "PADDY-BASMATI-1121",
        itemName: "Basmati Paddy - 1121",
        variety: "Basmati 1121",
        currentStock: 2450,
        unit: "MT",
        location: "Warehouse A - Section 1",
        reorderLevel: 500,
        maxLevel: 3000,
        avgCost: 2500,
        totalValue: 6125000,
        lastReceived: "2024-03-15",
        supplier: "Punjab Farmers Cooperative",
        expiryDate: "2025-03-15",
        qualityGrade: "A+",
        moistureContent: 12.5,
        foreignMatter: 0.8,
        damagedGrains: 1.2,
        status: "In Stock",
        batchNumber: "BATCH-2024-001",
        receiptNumber: "GRN-2024-042"
      },
      {
        id: "RM-002", 
        itemCode: "PADDY-BASMATI-1509",
        itemName: "Basmati Paddy - 1509",
        variety: "Basmati 1509",
        currentStock: 1850,
        unit: "MT",
        location: "Warehouse A - Section 2",
        reorderLevel: 400,
        maxLevel: 2500,
        avgCost: 2200,
        totalValue: 4070000,
        lastReceived: "2024-03-12",
        supplier: "Haryana State Board",
        expiryDate: "2025-01-30",
        qualityGrade: "A",
        moistureContent: 13.2,
        foreignMatter: 1.1,
        damagedGrains: 1.8,
        status: "Low Stock",
        batchNumber: "BATCH-2024-002",
        receiptNumber: "GRN-2024-040"
      }
    ]

    return NextResponse.json({
      success: true,
      data: rawMaterials,
      totalItems: rawMaterials.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch raw materials' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Simulate adding new raw material entry
    const newEntry = {
      id: `RM-${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newEntry,
      message: 'Raw material entry created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create raw material entry' },
      { status: 500 }
    )
  }
}
