
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const agreements = [
      {
        id: "AGR-001",
        agreementNumber: "AGR-2024-001",
        farmerName: "Punjab Farmers Cooperative",
        cropType: "Basmati Paddy",
        variety: "1121",
        totalQuantity: 5000,
        deliveredQuantity: 3200,
        pendingQuantity: 1800,
        ratePerQuintal: 2500,
        totalValue: 12500000,
        signingDate: "2024-01-15",
        deliveryPeriod: "Jan 2024 - Jun 2024",
        qualityParameters: {
          moisture: "Max 14%",
          foreignMatter: "Max 2%",
          damagedGrains: "Max 3%"
        },
        status: "Active",
        contactPerson: "Rajesh Kumar",
        phone: "+91-98765-12345",
        location: "Punjab"
      },
      {
        id: "AGR-002",
        agreementNumber: "AGR-2024-002", 
        farmerName: "Haryana State Board",
        cropType: "Basmati Paddy",
        variety: "1509",
        totalQuantity: 4000,
        deliveredQuantity: 2800,
        pendingQuantity: 1200,
        ratePerQuintal: 2200,
        totalValue: 8800000,
        signingDate: "2024-02-01",
        deliveryPeriod: "Feb 2024 - Jul 2024",
        qualityParameters: {
          moisture: "Max 14%",
          foreignMatter: "Max 2%", 
          damagedGrains: "Max 3%"
        },
        status: "Active",
        contactPerson: "Suresh Singh",
        phone: "+91-98765-54321",
        location: "Haryana"
      }
    ]

    return NextResponse.json({
      success: true,
      data: agreements,
      totalAgreements: agreements.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch procurement agreements' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newAgreement = {
      id: `AGR-${Date.now()}`,
      agreementNumber: `AGR-2024-${String(Date.now()).slice(-3)}`,
      ...data,
      signingDate: new Date().toISOString().split('T')[0],
      deliveredQuantity: 0,
      pendingQuantity: data.totalQuantity,
      status: "Draft",
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newAgreement,
      message: 'Procurement agreement created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create procurement agreement' },
      { status: 500 }
    )
  }
}
