import fs from "fs/promises";
import path from "path";

export interface InternshipWeek {
  week: number;
  title: string;
  goal: string;
  concepts: string[];
  dailyPlan: {
    days: string;
    focus: string;
    courseLink?: string;
    task: string;
  }[];
  checklist: string[];
  tips?: string[];
}

export async function getInternshipData(
  internshipId: string,
): Promise<InternshipWeek[]> {
  const filePath = path.join(
    process.cwd(),
    "internships",
    `${internshipId}.json`,
  );
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading internship data for ${internshipId}:`, error);
    return [];
  }
}

export async function getInternshipWeek(
  internshipId: string,
  weekId: number,
): Promise<InternshipWeek | null> {
  const internshipData = await getInternshipData(internshipId);
  const weekData = internshipData.find((week) => week.week === weekId);
  return weekData || null;
}
