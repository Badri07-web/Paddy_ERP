
import { NextResponse } from 'next/server'

const batches = [
  {
    id: 'B2024-001',
    product: 'Basmati Rice Premium',
    rawMaterial: 'Basmati Paddy 1121',
    quantity: 1000,
    startDate: '2024-03-15',
    endDate: '2024-03-16',
    status: 'completed',
    yield: 72.5,
    quality: 'A',
    supervisor: 'Ram Singh'
  },
  {
    id: 'B2024-002',
    product: 'Non-Basmati Rice',
    rawMaterial: 'PR-106 Paddy',
    quantity: 1500,
    startDate: '2024-03-17',
    endDate: '2024-03-18',
    status: 'in-progress',
    yield: 68.2,
    quality: 'A',
    supervisor: 'Mohan Lal'
  }
]

export async function GET() {
  return NextResponse.json(batches)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newBatch = {
      id: `B2024-${String(batches.length + 1).padStart(3, '0')}`,
      ...data,
      status: 'planned'
    }
    batches.push(newBatch)
    return NextResponse.json(newBatch, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create batch' },
      { status: 500 }
    )
  }
}
