import { NextResponse } from 'next/server';
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
  _request: Request,
  { params }: { params: { internshipId: string } }
) {
  const { internshipId } = await params;
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
