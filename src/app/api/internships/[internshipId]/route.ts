import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface Week {
  week: number;
  title: string;
  description: string;
  tasks: {
    id: string;
    title: string;
    description: string;
  }[];
}

export async function GET(
  request: NextRequest,
) {
  const { pathname } = new URL(request.url);
  const internshipId = pathname.split('/').pop();

  if (!internshipId) {
    return new NextResponse('Internship ID is missing', { status: 400 });
  }
  
  const filePath = path.join(process.cwd(), 'internships', internshipId, 'internship.json');

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const internshipData: Week[] = JSON.parse(fileContents);
    const weeks = internshipData.map((week) => ({
      ...week,
      internshipId,
    }));
    const internship = {
      id: internshipId,
      title: 'Full-Stack Web Development Internship',
      weeks,
    };
    return NextResponse.json(internship);
  } catch {
    return NextResponse.json({ error: 'Internship not found' }, { status: 404 });
  }
}
