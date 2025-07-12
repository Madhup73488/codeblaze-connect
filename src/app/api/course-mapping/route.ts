import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'internships', 'course_mapping.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const courseMapping = JSON.parse(fileContent);
    return NextResponse.json(courseMapping);
  } catch (error) {
    console.error('Failed to load course mapping:', error);
    return NextResponse.json({ error: 'Failed to load course mapping' }, { status: 500 });
  }
}
