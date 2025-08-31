import { Mail, Phone, GraduationCap, User, Users } from 'lucide-react';

export default function OfficeBearers() {
  const principal = {
    name: 'Dr. Sarah Johnson',
    position: 'Principal',
    education: 'Ph.D. in Educational Leadership',
    experience: '25+ years',
    email: 'principal@stmaryscollege.edu',
    phone: '+1 (555) 123-4567',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  };

  const management = [
    {
      name: 'Mr. Robert Wilson',
      position: 'Vice Principal',
      department: 'Administration',
      email: 'vp@stmaryscollege.edu',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Ms. Lisa Anderson',
      position: 'Academic Director',
      department: 'Academics',
      email: 'academic@stmaryscollege.edu',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Michael Brown',
      position: 'Dean of Students',
      department: 'Student Affairs',
      email: 'dean@stmaryscollege.edu',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const faculty = [
    {
      name: 'Dr. Emily Davis',
      position: 'Head of Mathematics',
      subject: 'Mathematics',
      education: 'Ph.D. in Mathematics',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Prof. James Miller',
      position: 'Head of Science',
      subject: 'Physics & Chemistry',
      education: 'M.Sc. in Physics',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Ms. Anna Garcia',
      position: 'Head of English',
      subject: 'English Literature',
      education: 'M.A. in English Literature',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Mr. David Lee',
      position: 'Head of Social Studies',
      subject: 'History & Geography',
      education: 'M.A. in History',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Maria Rodriguez',
      position: 'Head of Arts',
      subject: 'Fine Arts & Music',
      education: 'Ph.D. in Fine Arts',
      image: 'https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Mr. Kevin Thompson',
      position: 'Head of Sports',
      subject: 'Physical Education',
      education: 'M.P.Ed.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-green-600 to-green-800 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Office Bearers</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Meet our dedicated leadership team and experienced faculty members
            </p>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Principal</h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl">
                    <img
                      src={principal.image}
                      alt={principal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{principal.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{principal.position}</p>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <span>{principal.education}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-blue-600" />
                      <span>{principal.experience} in Education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>{principal.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>{principal.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Management Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced management team ensures smooth operations and academic excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {management.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.department}</p>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Faculty Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our qualified and dedicated faculty members are committed to student success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.subject}</p>
                  <p className="text-gray-500 text-xs">{member.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}