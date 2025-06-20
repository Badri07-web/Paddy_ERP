
import { NextRequest, NextResponse } from 'next/server'

const reports = [
  {
    id: "RPT-001",
    reportName: "Daily Production Report",
    reportType: "Production",
    generatedDate: "2024-03-20",
    generatedBy: "System Admin",
    status: "Completed",
    fileSize: "2.3 MB",
    downloadCount: 15,
    summary: {
      totalProduction: 125.5,
      targetProduction: 130.0,
      efficiency: 96.5,
      qualityGrade: "A+"
    }
  },
  {
    id: "RPT-002",
    reportName: "Weekly Sales Summary",
    reportType: "Sales",
    generatedDate: "2024-03-18",
    generatedBy: "Sales Manager",
    status: "Completed",
    fileSize: "1.8 MB",
    downloadCount: 8,
    summary: {
      totalSales: 85000000,
      totalOrders: 12,
      avgOrderValue: 7083333,
      topProduct: "Basmati Rice Premium"
    }
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const reportType = searchParams.get('type')
    
    let filteredReports = reports
    if (reportType) {
      filteredReports = reports.filter(report => 
        report.reportType.toLowerCase() === reportType.toLowerCase()
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredReports,
      totalReports: filteredReports.length
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch reports' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const newReport = {
      id: `RPT-${String(Date.now()).slice(-3)}`,
      ...data,
      generatedDate: new Date().toISOString().split('T')[0],
      generatedBy: data.generatedBy || "System User",
      status: "Processing",
      downloadCount: 0,
      createdAt: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: newReport,
      message: 'Report generation started successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to generate report' },
      { status: 500 }
    )
  }
}
