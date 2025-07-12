import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const internshipsPath = path.join(process.cwd(), 'internships');
    const internshipFiles = await fs.readdir(internshipsPath);

    const allItems = [];
    for (const file of internshipFiles) {
      if (file.endsWith('.json')) {
        const filePath = path.join(internshipsPath, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);
        if (Array.isArray(jsonData)) {
          allItems.push(...jsonData);
        } else {
          allItems.push(jsonData);
        }
      }
    }

    const groupedById: Record<string, any[]> = {};
    for (const item of allItems) {
      if (item && item.id) {
        if (!groupedById[item.id]) {
          groupedById[item.id] = [];
        }
        groupedById[item.id].push(item);
      }
    }

    const processedInternships = [];
    for (const id in groupedById) {
      const items = groupedById[id];
      const isMultiWeek = items.length > 1 && items.every(item => typeof item.week === 'number');

      if (isMultiWeek) {
        const sortedWeeks = items.sort((a, b) => a.week - b.week);
        processedInternships.push({
          id: items[0].id,
          title: 'Full-Stack Web Development Internship',
          company: 'CodeBlaze Academy',
          description: 'A comprehensive 12-week internship to master the MERN stack.',
          duration: '12 weeks',
          stipend: 'Performance-based',
          location: 'Remote',
          color: 'from-blue-500 to-cyan-500',
          logo: '🚀',
          rating: 4.9,
          type: 'Project-based',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
          applicants: 500,
          deadline: '2025-08-01',
          requirements: ['Basic programming knowledge', 'Strong desire to learn'],
          weeks: sortedWeeks,
          progress: 50,
          weeksPassed: 6,
          totalWeeks: 12,
          tasksCompleted: 30,
          totalTasks: 60,
          nextTask: "Complete the 'Interactive Tip Calculator' project.",
          status: 'In Progress',
          mentor: 'John Doe',
        });
      } else {
        processedInternships.push(items[0]);
      }
    }

    return NextResponse.json(processedInternships);
  } catch (error) {
    console.error('Failed to get internships:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
