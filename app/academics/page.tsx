import { BookOpen, Download, Users, GraduationCap, Clock, FileText, User } from 'lucide-react';

export default function Academics() {
  const programs = [
    {
      title: 'Elementary Education',
      grades: 'Grades 1-5',
      description: 'Foundation building with focus on basic literacy, numeracy, and social skills',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Arts', 'Physical Education']
    },
    {
      title: 'Middle School',
      grades: 'Grades 6-8',
      description: 'Comprehensive curriculum preparing students for higher secondary education',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Arts']
    },
    {
      title: 'High School',
      grades: 'Grades 9-10',
      description: 'Board examination preparation with career guidance and counseling',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Optional Subjects']
    },
    {
      title: 'Senior Secondary',
      grades: 'Grades 11-12',
      description: 'Specialized streams for college preparation and career readiness',
      subjects: ['Science Stream', 'Commerce Stream', 'Arts Stream', 'Vocational Courses']
    }
  ];

  const downloads = [
    { title: 'Academic Calendar 2024-25', size: '2.1 MB', type: 'PDF' },
    { title: 'Syllabus - Grade 10', size: '1.8 MB', type: 'PDF' },
    { title: 'Syllabus - Grade 12', size: '2.3 MB', type: 'PDF' },
    { title: 'Examination Guidelines', size: '1.5 MB', type: 'PDF' }
  ];

  const facultyHighlights = [
    {
      department: 'Science Department',
      head: 'Dr. James Miller',
      faculty: 12,
      specialties: ['Advanced Physics Lab', 'Chemistry Research', 'Biology Projects']
    },
    {
      department: 'Mathematics Department',
      head: 'Dr. Emily Davis',
      faculty: 8,
      specialties: ['Applied Mathematics', 'Statistics', 'Mathematical Modeling']
    },
    {
      department: 'Humanities Department',
      head: 'Ms. Anna Garcia',
      faculty: 10,
      specialties: ['Literature Studies', 'Creative Writing', 'Public Speaking']
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive curriculum designed to foster critical thinking and academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured curriculum is designed to meet international standards while maintaining local relevance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                    <p className="text-indigo-600 font-medium">{program.grades}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Faculty Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced faculty members bring expertise and passion to their respective fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {facultyHighlights.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dept.department}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Head: {dept.head}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{dept.faculty} Faculty Members</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <ul className="space-y-1">
                    {dept.specialties.map((specialty, specIndex) => (
                      <li key={specIndex} className="text-gray-600 text-sm">
                        • {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download important academic documents and syllabi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {downloads.map((download, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{download.title}</h3>
                      <p className="text-sm text-gray-500">{download.type} • {download.size}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}