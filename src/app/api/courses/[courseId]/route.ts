import { NextResponse, NextRequest } from 'next/server';
import { getCourseStructure } from '@/lib/course-loader';

export async function GET(
  request: NextRequest,
) {
  const { pathname } = new URL(request.url);
  const courseId = pathname.split('/').pop();

  if (!courseId) {
    return new NextResponse('Course ID is missing', { status: 400 });
  }

  try {
    const course = await getCourseStructure(courseId);
    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }
    return NextResponse.json(course);
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
