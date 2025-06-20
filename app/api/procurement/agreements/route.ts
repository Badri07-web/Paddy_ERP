
import { NextResponse } from 'next/server'

const agreements = [
  {
    id: 'AGR-2024-001',
    farmerName: 'Rajesh Kumar',
    location: 'Punjab',
    variety: 'Basmati 1121',
    quantity: 500,
    rate: 3200,
    totalValue: 1600000,
    advancePaid: 320000,
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-06-15'
  },
  {
    id: 'AGR-2024-002',
    farmerName: 'Suresh Patel',
    location: 'Haryana',
    variety: 'PR-106',
    quantity: 750,
    rate: 2800,
    totalValue: 2100000,
    advancePaid: 420000,
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-07-01'
  }
]

export async function GET() {
  return NextResponse.json(agreements)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newAgreement = {
      id: `AGR-2024-${String(agreements.length + 1).padStart(3, '0')}`,
      ...data,
      status: 'active'
    }
    agreements.push(newAgreement)
    return NextResponse.json(newAgreement, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create agreement' },
      { status: 500 }
    )
  }
}
