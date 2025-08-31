import { AlertCircle, BookOpen, Clock, FileText, Users, Shield } from 'lucide-react';

export default function RulesRegulations() {
  const ruleCategories = [
    {
      icon: FileText,
      title: 'Admission Rules',
      rules: [
        'Students must submit all required documents during admission',
        'Age criteria must be met as per state education board guidelines',
        'Transfer certificate from previous school is mandatory',
        'Medical certificate must be provided for health record'
      ]
    },
    {
      icon: Users,
      title: 'Code of Conduct',
      rules: [
        'Students must maintain discipline and respect for all community members',
        'Use of mobile phones is restricted during class hours',
        'Proper school uniform must be worn at all times',
        'Bullying or harassment of any kind will not be tolerated'
      ]
    },
    {
      icon: Clock,
      title: 'Attendance Policy',
      rules: [
        'Minimum 85% attendance is required for promotion to next class',
        'Students arriving late must report to the office first',
        'Leave applications must be submitted in advance',
        'Medical certificates required for extended absence'
      ]
    },
    {
      icon: BookOpen,
      title: 'Examination Rules',
      rules: [
        'Students must arrive 15 minutes before exam time',
        'Electronic devices are strictly prohibited in exam halls',
        'Any form of malpractice will result in disqualification',
        'Re-examination fees apply for missed exams without valid reason'
      ]
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-red-600 to-red-800 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rules & Regulations</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Guidelines and policies that ensure a safe and productive learning environment
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                All students and parents are required to read and understand these rules and regulations. 
                Violation of any rule may result in disciplinary action as deemed appropriate by the administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ruleCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Policies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Policies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Library Rules</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Maintain silence in the library premises</li>
                  <li>• Books must be returned within the specified time</li>
                  <li>• No food or drinks allowed inside the library</li>
                  <li>• Handle books and resources with care</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Transportation Rules</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Be at the bus stop 5 minutes before scheduled time</li>
                  <li>• Maintain discipline during bus travel</li>
                  <li>• No standing while the bus is in motion</li>
                  <li>• Report any issues to the bus supervisor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}