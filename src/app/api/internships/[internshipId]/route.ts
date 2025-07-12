import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { internshipId: string } }
) {
  const { internshipId } = await params;
  const filePath = path.join(process.cwd(), 'internships', internshipId, 'internship.json');
  console.log('File path:', filePath);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const internshipData = JSON.parse(fileContents);
    const weeks = internshipData.map((week: any) => ({
      ...week,
      internshipId,
    }));
    const internship = {
      id: internshipId,
      title: 'Full-Stack Web Development Internship',
      weeks,
    };
    return NextResponse.json(internship);
  } catch (error) {
    return NextResponse.json({ error: 'Internship not found' }, { status: 404 });
  }
}
