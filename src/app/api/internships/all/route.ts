import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface Internship {
  id: string;
  week?: number;
  title?: string;
  company?: string;
  description?: string;
  duration?: string;
  stipend?: string;
  location?: string;
  color?: string;
  logo?: string;
  rating?: number;
  type?: string;
  skills?: string[];
  applicants?: number;
  deadline?: string;
  requirements?: string[];
  weeks?: Internship[];
  progress?: number;
  weeksPassed?: number;
  totalWeeks?: number;
  tasksCompleted?: number;
  totalTasks?: number;
  nextTask?: string;
  status?: string;
  mentor?: string;
}

export async function GET() {
  try {
    const internshipsPath = path.join(process.cwd(), 'internships');
    const internshipFolders = await fs.readdir(internshipsPath, { withFileTypes: true });

    const processedInternships: Internship[] = [];
    for (const dirent of internshipFolders) {
      if (dirent.isDirectory()) {
        const internshipId = dirent.name;
        const internshipPath = path.join(internshipsPath, internshipId);
        try {
          const metadataPath = path.join(internshipPath, 'metadata.json');
          const metadataContent = await fs.readFile(metadataPath, 'utf8');
          const metadata: Internship = JSON.parse(metadataContent);

          const weeksPath = path.join(internshipPath, 'internship.json');
          const weeksContent = await fs.readFile(weeksPath, 'utf8');
          const weeks: Internship[] = JSON.parse(weeksContent);

          processedInternships.push({
            ...metadata,
            weeks: weeks.sort((a, b) => (a.week ?? 0) - (b.week ?? 0)),
          });
        } catch {
          // ignore folders that don't contain metadata.json and internship.json
        }
      }
    }

    return NextResponse.json(processedInternships);
  } catch (error) {
    console.error('Failed to get internships:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
