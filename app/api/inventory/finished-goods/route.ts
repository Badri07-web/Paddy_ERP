
import { NextRequest, NextResponse } from 'next/server'

const finishedGoods = [
  {
    id: "FG-001",
    itemCode: "RICE-BASMATI-1121-25KG",
    itemName: "Basmati Rice - 1121 (25kg Pack)",
    variety: "Basmati 1121",
    grade: "Premium",
    packSize: "25kg",
    currentStock: 2450,
    unit: "Bags",
    location: "Warehouse B - Section 1",
    reorderLevel: 500,
    maxLevel: 5000,
    avgCost: 1250,
    totalValue: 3062500,
    lastProduced: "2024-03-15",
    expiryDate: "2025-03-15",
    qualityGrade: "A+",
    moistureContent: 10.2,
    brokenGrains: 1.5,
    status: "In Stock",
    batchNumber: "FG-BATCH-2024-001",
    productionOrder: "PROD-2024-012",
  },
  {
    id: "FG-002",
    itemCode: "RICE-BASMATI-1121-10KG",
    itemName: "Basmati Rice - 1121 (10kg Pack)",
    variety: "Basmati 1121",
    grade: "Premium",
    packSize: "10kg",
    currentStock: 1850,
    unit: "Bags",
    location: "Warehouse B - Section 2",
    reorderLevel: 800,
    maxLevel: 8000,
    avgCost: 520,
    totalValue: 962000,
    lastProduced: "2024-03-14",
    expiryDate: "2025-03-14",
    qualityGrade: "A+",
    moistureContent: 10.5,
    brokenGrains: 1.8,
    status: "In Stock",
    batchNumber: "FG-BATCH-2024-002",
    productionOrder: "PROD-2024-011",
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: finishedGoods,
      totalItems: finishedGoods.length,
      totalValue: finishedGoods.reduce((sum, item) => sum + item.totalValue, 0),
      lowStockItems: finishedGoods.filter(item => item.currentStock <= item.reorderLevel).length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch finished goods' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newItem = {
      id: `FG-${String(Date.now()).slice(-3)}`,
      itemCode: `RICE-${data.variety?.toUpperCase().replace(/\s+/g, '-')}-${data.packSize}`,
      ...data,
      lastProduced: new Date().toISOString().split('T')[0],
      status: "In Stock",
      totalValue: (data.currentStock || 0) * (data.avgCost || 0),
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newItem,
      message: 'Finished goods item added successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to add finished goods item' },
      { status: 500 }
    )
  }
}
