'use client';
import React, { useState, useEffect } from 'react';
import { 
  Filter,
  Search,
  Play,
  Clock,
  Users,
  BookOpen,
  Trophy,
  Star,
  ChevronRight,
  Calendar,
  Target,
  Award,
  TrendingUp,
  MoreHorizontal,
  MapPin,
  Building,
  DollarSign,
  Briefcase,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  ExternalLink,
  FileText,
  Upload
} from 'lucide-react';
import Link from 'next/link';
import apiClient from '@/lib/api';

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase,
  Clock,
  CheckCircle,
  TrendingUp,
};

const MyInternshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('enrolled');
  const [enrolledInternships, setEnrolledInternships] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [totalExperience, setTotalExperience] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get('/api/connect/user/data');
      const data = await response.data;
      setEnrolledInternships(data.enrolledInternships);
      setAchievements(data.achievements);
      
      const transformedStats = data.stats.map((stat: any) => ({
        ...stat,
        icon: iconMap[stat.icon] || MoreHorizontal,
      }));
      setStats(transformedStats);

      const hoursStat = data.stats.find((stat: any) => stat.label === 'Hours Completed');
      if (hoursStat) {
        setTotalExperience(hoursStat.value);
      }
    };

    fetchData();
  }, []);

  const availableInternships = [
    {
      id: 'mobile-dev-internship',
      title: 'Mobile App Developer Internship',
      company: 'AppVenture Labs',
      description: 'Develop cross-platform mobile applications using Flutter',
      duration: '4 months',
      stipend: '$1300/month',
      location: 'Remote',
      color: 'from-indigo-500 to-purple-600',
      logo: '📱',
      rating: 4.6,
      type: 'Paid',
      skills: ['Flutter', 'Dart', 'Firebase', 'Mobile UI'],
      applicants: 245,
      deadline: '2025-07-15',
      requirements: ['Flutter basics', 'Git knowledge', 'Portfolio required']
    },
    {
      id: 'data-analytics-internship',
      title: 'Data Analytics Internship',
      company: 'Analytics Hub',
      description: 'Analyze large datasets and create business insights',
      duration: '3 months',
      stipend: '$1100/month',
      location: 'Boston, MA',
      color: 'from-orange-500 to-red-500',
      logo: '📊',
      rating: 4.8,
      type: 'Paid',
      skills: ['Python', 'SQL', 'Tableau', 'Statistics'],
      applicants: 189,
      deadline: '2025-07-20',
      requirements: ['Python proficiency', 'Statistics knowledge', 'Resume required']
    },
    {
      id: 'devops-internship',
      title: 'DevOps Engineering Internship',
      company: 'CloudTech Systems',
      description: 'Learn infrastructure automation and CI/CD processes',
      duration: '5 months',
      stipend: '$1400/month',
      location: 'Seattle, WA',
      color: 'from-gray-600 to-slate-700',
      logo: '⚙️',
      rating: 4.5,
      type: 'Paid',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      applicants: 156,
      deadline: '2025-07-25',
      requirements: ['Linux basics', 'Cloud experience preferred', 'Portfolio']
    },
    {
      id: 'product-management-internship',
      title: 'Product Management Internship',
      company: 'InnovateNow',
      description: 'Learn product strategy and work with cross-functional teams',
      duration: '4 months',
      stipend: '$1000/month',
      location: 'Austin, TX',
      color: 'from-teal-500 to-cyan-600',
      logo: '🎯',
      rating: 4.7,
      type: 'Paid',
      skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
      applicants: 312,
      deadline: '2025-07-10',
      requirements: ['Business background', 'Communication skills', 'Case study required']
    }
  ];

  const InternshipCard = ({ internship, isEnrolled = false }: { internship: any, isEnrolled: boolean }) => (
    <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${internship.color} flex items-center justify-center text-white text-xl shadow-lg`}>
          {internship.logo}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{internship.rating}</span>
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Company and Title */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Building className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{internship.company}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            internship.type === 'Paid' ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
          }`}>
            {internship.type}
          </span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {internship.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{internship.description}</p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{internship.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="w-3 h-3" />
          <span>{internship.stipend}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span>{internship.location}</span>
        </div>
        {isEnrolled ? (
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{internship.mentor}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{internship.applicants} applicants</span>
          </div>
        )}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {internship.skills.slice(0, 3).map((skill: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium">
              {skill}
            </span>
          ))}
          {internship.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
              +{internship.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Progress (for enrolled) or Deadline (for available) */}
      {isEnrolled ? (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">Progress</span>
            <span className="font-bold text-gray-900 dark:text-white">{internship.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${internship.color} transition-all duration-500`}
              style={{ width: `${internship.progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Week {internship.weeksPassed} of {internship.totalWeeks}</span>
            <span>{internship.tasksCompleted}/{internship.totalTasks} tasks</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Next: <span className="font-medium text-gray-800 dark:text-gray-200">{internship.nextTask}</span>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Application Deadline:</span>
            <span className="font-medium text-red-600 dark:text-red-400">{new Date(internship.deadline).toLocaleDateString()}</span>
          </div>
        </div>
      )}

      {/* Status Badge (for enrolled) */}
      {isEnrolled && (
        <div className="mb-4">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
            internship.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' :
            internship.status === 'Nearly Complete' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300' :
            'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
          }`}>
            {internship.status === 'In Progress' && <AlertCircle className="w-3 h-3" />}
            {internship.status === 'Nearly Complete' && <Clock className="w-3 h-3" />}
            {internship.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
            {internship.status}
          </span>
        </div>
      )}

      {/* Action Button */}
      <Link href={isEnrolled ? `/internships/${internship.id}/weeks/1` : `/internships/${internship.id}/apply`} className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
        isEnrolled 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
          : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
      }`}>
        {isEnrolled ? (
          <>
            <Play className="w-4 h-4" />
            Continue Work
          </>
        ) : (
          <>
            <FileText className="w-4 h-4" />
            Apply Now
          </>
        )}
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Internships</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Track your professional experience journey</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalExperience}h</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Experience</div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gray-50 dark:bg-slate-700`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-8 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
          <button
            onClick={() => setSelectedTab('enrolled')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              selectedTab === 'enrolled'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            My Internships ({enrolledInternships.length})
          </button>
          <button
            onClick={() => setSelectedTab('available')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              selectedTab === 'available'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Available Programs ({availableInternships.length})
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder={selectedTab === 'enrolled' ? "Search your internships..." : "Search available programs..."} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
            />
          </div>
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* Content based on selected tab */}
        {selectedTab === 'enrolled' ? (
          <>
            {/* Active Internships */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Active Internships</h2>
                <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-1">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledInternships.length > 0 ? (
                  enrolledInternships
                    .filter((internship) =>
                      internship.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
                    )
                    .map((internship) => (
                      <InternshipCard
                        key={internship.id}
                        internship={internship}
                        isEnrolled={true}
                      />
                    ))
                ) : (
                  <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
                    No internship program enrolled.
                  </div>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h2>
                <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-1">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                    achievement.earned 
                      ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/50 dark:to-orange-900/50 dark:border-yellow-800/50 shadow-md' 
                      : 'border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800 opacity-70'
                  }`}>
                    {achievement.earned && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                    )}
                    
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                    
                    {achievement.earned ? (
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        Earned {achievement.date}
                      </div>
                    ) : achievement.progress && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center justify-between mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1">
                          <div 
                            className="h-1 bg-blue-500 rounded-full transition-all duration-300"
                            style={{ width: `${achievement.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Available Internships */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Available Internship Programs</h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{availableInternships.length} programs available</span>
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableInternships
                  .filter(internship => internship.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((internship) => (
                    <InternshipCard key={internship.id} internship={internship} isEnrolled={false} />
                  ))}
              </div>
            </div>

            {/* Application Tips */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Application Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Perfect Your Resume</h4>
                    <p className="text-blue-100 text-sm">Tailor your resume to highlight relevant skills and projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Build Your Portfolio</h4>
                    <p className="text-blue-100 text-sm">Showcase your best work and demonstrate your capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Apply Early</h4>
                    <p className="text-blue-100 text-sm">Don't wait until the deadline - early applications get more attention</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Ready to Level Up?</h3>
            <p className="text-green-100 mb-6">
              {selectedTab === 'enrolled' 
                ? "Keep up the great work on your current internships and explore new opportunities!"
                : "Found an internship that interests you? Don't wait - applications are competitive!"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {selectedTab === 'enrolled' ? (
                <>
                  <Link href="/internships" className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-200 transition-colors shadow-lg">
                    View All Opportunities
                  </Link>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all">
                    Update Profile
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-200 transition-colors shadow-lg">
                    Apply to Programs
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all">
                    Get Application Help
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInternshipsPage;
