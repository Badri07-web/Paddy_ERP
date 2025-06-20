
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    // Simulate authentication logic
    const validCredentials = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'manager', password: 'manager123', role: 'manager' },
      { username: 'operator', password: 'operator123', role: 'operator' },
      { username: 'accounts', password: 'accounts123', role: 'accounts' }
    ]
    
    const user = validCredentials.find(
      u => u.username === username && u.password === password
    )
    
    if (user) {
      return NextResponse.json({
        success: true,
        user: {
          username: user.username,
          role: user.role,
          token: `token_${user.username}_${Date.now()}`
        }
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
