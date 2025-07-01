'use client';
import React from 'react';
import { 
  Play,
  Clock,
  Target,
  BookmarkPlus,
  PlayCircle,
  Lock,
  CheckCircle
} from 'lucide-react';
const CurrentLessonPage = () => {
  const currentLessonData = {
    course: 'JavaScript Fundamentals',
    lesson: 'Lesson 9: Async/Await and Promises',
    progress: 75,
    duration: '45 minutes',
    nextLesson: 'Lesson 10: Error Handling',
    chapters: [
      { id: 1, title: 'Introduction to Variables', completed: true, duration: '12 min' },
      { id: 2, title: 'Data Types', completed: true, duration: '15 min' },
      { id: 3, title: 'Functions', completed: true, duration: '20 min' },
      { id: 4, title: 'Objects and Arrays', completed: true, duration: '18 min' },
      { id: 5, title: 'DOM Manipulation', completed: true, duration: '25 min' },
      { id: 6, title: 'Event Handling', completed: true, duration: '22 min' },
      { id: 7, title: 'Fetch API', completed: true, duration: '30 min' },
      { id: 8, title: 'Local Storage', completed: true, duration: '16 min' },
      { id: 9, title: 'Async/Await and Promises', completed: false, current: true, duration: '45 min' },
      { id: 10, title: 'Error Handling', completed: false, duration: '35 min' },
      { id: 11, title: 'Testing Basics', completed: false, duration: '40 min' },
      { id: 12, title: 'Final Project', completed: false, duration: '60 min' }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Current Lesson</h2>
        <p className="text-gray-600">{currentLessonData.course}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-64 flex items-center justify-center">
              <PlayCircle size={64} className="text-white opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentLessonData.lesson}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {currentLessonData.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Target size={16} />
                  {currentLessonData.progress}% Complete
                </span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Play size={16} />
                  Continue Lesson
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <BookmarkPlus size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Lesson Notes</h4>
            <textarea 
              placeholder="Take notes about this lesson..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Notes
            </button>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Progress</h4>
            <div className="space-y-3">
              {currentLessonData.chapters.map((chapter) => (
                <div key={chapter.id} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  chapter.current ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                }`}>
                  <div className={`flex-shrink-0 ${
                    chapter.completed ? 'text-green-600' : 
                    chapter.current ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {chapter.completed ? <CheckCircle size={20} /> : 
                     chapter.current ? <PlayCircle size={20} /> : <Lock size={20} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      chapter.current ? 'text-blue-900' : 'text-gray-900'
                    }`}>
                      {chapter.title}
                    </p>
                    <p className="text-xs text-gray-500">{chapter.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentLessonPage;
