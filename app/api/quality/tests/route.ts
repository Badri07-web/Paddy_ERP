
import { NextRequest, NextResponse } from 'next/server'

const qualityTests = [
  {
    id: "QT-001",
    sampleId: "SAMPLE-2024-045",
    batchNumber: "BATCH-2024-045",
    testDate: "2024-03-20",
    testType: "Incoming Raw Material",
    variety: "Basmati 1121",
    moistureContent: 11.2,
    foreignMatter: 0.8,
    damagedGrains: 1.5,
    chalkiness: 2.1,
    lengthWidth: 6.8,
    gradingResult: "A+",
    testOfficer: "Dr. Rajesh Patel",
    labRemarks: "Excellent quality paddy, meets premium standards",
    certificateIssued: true,
    certificateNumber: "CERT-2024-045",
    status: "Approved"
  },
  {
    id: "QT-002",
    sampleId: "SAMPLE-2024-046",
    batchNumber: "BATCH-2024-046", 
    testDate: "2024-03-21",
    testType: "Finished Product",
    variety: "Basmati 1121",
    moistureContent: 10.8,
    foreignMatter: 0.3,
    damagedGrains: 1.2,
    chalkiness: 1.8,
    lengthWidth: 6.9,
    gradingResult: "A+",
    testOfficer: "Dr. Priya Sharma",
    labRemarks: "Premium quality rice, ready for export",
    certificateIssued: true,
    certificateNumber: "CERT-2024-046",
    status: "Approved"
  }
]

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: qualityTests,
      totalTests: qualityTests.length,
      approvedTests: qualityTests.filter(test => test.status === "Approved").length,
      pendingTests: qualityTests.filter(test => test.status === "Pending").length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch quality tests' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newTest = {
      id: `QT-${String(Date.now()).slice(-3)}`,
      sampleId: `SAMPLE-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      ...data,
      testDate: new Date().toISOString().split('T')[0],
      status: "Pending",
      certificateIssued: false,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newTest,
      message: 'Quality test created successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create quality test' },
      { status: 500 }
    )
  }
}
