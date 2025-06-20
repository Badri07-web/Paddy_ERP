
import { NextRequest, NextResponse } from 'next/server'

const byproducts = [
  {
    id: "BP-001",
    itemCode: "BRAN-RICE-001",
    itemName: "Rice Bran",
    category: "Bran",
    source: "Basmati Processing",
    currentStock: 850,
    unit: "MT",
    location: "Warehouse C - Section 1",
    reorderLevel: 200,
    maxLevel: 1500,
    avgCost: 800,
    totalValue: 680000,
    lastProduced: "2024-03-15",
    expiryDate: "2024-06-30",
    moistureContent: 8.5,
    oilContent: 18.2,
    proteinContent: 12.8,
    status: "In Stock",
    batchNumber: "BRAN-2024-001",
    applications: ["Animal Feed", "Oil Extraction"],
  },
  {
    id: "BP-002",
    itemCode: "BROKEN-RICE-001",
    itemName: "Broken Rice",
    category: "Broken Rice",
    source: "Milling Process",
    currentStock: 1200,
    unit: "MT",
    location: "Warehouse C - Section 2",
    reorderLevel: 300,
    maxLevel: 2000,
    avgCost: 1800,
    totalValue: 2160000,
    lastProduced: "2024-03-14",
    expiryDate: "2025-03-14",
    moistureContent: 11.2,
    oilContent: 0,
    proteinContent: 7.5,
    status: "In Stock",
    batchNumber: "BROKEN-2024-001",
    applications: ["Brewing", "Starch Production", "Animal Feed"],
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: byproducts,
      totalItems: byproducts.length,
      totalValue: byproducts.reduce((sum, item) => sum + item.totalValue, 0)
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch byproducts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newByproduct = {
      id: `BP-${String(Date.now()).slice(-3)}`,
      itemCode: `${data.category?.toUpperCase()}-${data.itemName?.toUpperCase().replace(/\s+/g, '-')}-001`,
      ...data,
      lastProduced: new Date().toISOString().split('T')[0],
      status: "In Stock",
      totalValue: (data.currentStock || 0) * (data.avgCost || 0),
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newByproduct,
      message: 'Byproduct added successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to add byproduct' },
      { status: 500 }
    )
  }
}
