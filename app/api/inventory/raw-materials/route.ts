
import { NextResponse } from 'next/server'

const rawMaterials = [
  {
    id: 'RM-001',
    name: 'Basmati Paddy 1121',
    category: 'Paddy',
    currentStock: 2450,
    unit: 'MT',
    reorderLevel: 500,
    lastPurchasePrice: 3200,
    supplier: 'Punjab Farmers Cooperative',
    expiryDate: '2024-12-31',
    location: 'Warehouse A-1',
    quality: 'Grade A'
  },
  {
    id: 'RM-002',
    name: 'PR-106 Paddy',
    category: 'Paddy',
    currentStock: 1850,
    unit: 'MT',
    reorderLevel: 300,
    lastPurchasePrice: 2800,
    supplier: 'Haryana Agricultural Society',
    expiryDate: '2024-11-30',
    location: 'Warehouse A-2',
    quality: 'Grade A'
  }
]

export async function GET() {
  return NextResponse.json(rawMaterials)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newMaterial = {
      id: `RM-${String(rawMaterials.length + 1).padStart(3, '0')}`,
      ...data
    }
    rawMaterials.push(newMaterial)
    return NextResponse.json(newMaterial, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create raw material entry' },
      { status: 500 }
    )
  }
}
