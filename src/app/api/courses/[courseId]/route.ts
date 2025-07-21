import { NextResponse } from 'next/server';
import { getCourseStructure } from '@/lib/course-loader';

export async function GET(
  _request: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const course = await getCourseStructure(params.courseId);
    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }
    return NextResponse.json(course);
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
