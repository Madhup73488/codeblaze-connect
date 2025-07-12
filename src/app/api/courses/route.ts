import { getAllCourses } from '@/lib/course-loader';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const courses = await getAllCourses();
    return NextResponse.json(courses);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
