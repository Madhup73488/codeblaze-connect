import { NextResponse } from 'next/server';

export async function GET() {
  // In a real application, you would fetch this from a database
  const userProgress = {
    completedLessons: [
      "html5-mastery-module-1-html-fundamentals-lesson-1-html-structure-and-elements",
    ],
  };
  return NextResponse.json(userProgress);
}
