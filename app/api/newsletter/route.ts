import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function POST() {
  return NextResponse.json(
    { message: 'Newsletter is currently disabled.' },
    { status: 200 }
  )
}

export async function GET() {
  return NextResponse.json(
    { message: 'Newsletter endpoint is active, but newsletter is disabled.' },
    { status: 200 }
  )
}