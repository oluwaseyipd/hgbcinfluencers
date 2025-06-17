import { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, Star, Shield, Users, Award, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { coreValues, pastors, testimonials } from '../constants/data'

const About = () => {
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'facebook': return Facebook;
      case 'twitter': return Twitter;
      case 'linkedin': return Linkedin;
      case 'instagram': return Instagram;
      default: return ExternalLink;
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the heart and history of Higher Ground Baptist Church - where lives are transformed and destinies are fulfilled.
          </p>
        </div>
      </section>

      {/* Church Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Higher Ground Baptist Church
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Higher Ground Baptist Church (HGBC), also known as the City of Refuge, was established by prophecy and prayer to prepare and equip individuals for their God-given purposes. Founded on January 21, 2007, by the University Baptist Church under the leadership of Rev'd Dr. Jide Abimbola and others, HGBC emphasizes discipleship, sound biblical teaching, and spiritual growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The church has positively impacted lives through programs like Photizo, Business and Investment Summit (BISUM), and the Influencers Investment Club (IIC), enabling members to thrive spiritually and professionally.
              </p>
              <button
                onClick={() => setShowFullHistory(true)}
                className="inline-flex items-center px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                Read Full History
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">700+</h3>
                      <p className="text-gray-600">Graduates Serving Christ</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">17+</h3>
                      <p className="text-gray-600">Years of Ministry</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1</h3>
                      <p className="text-gray-600">Church Planted (Tehillah Baptist)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values form the foundation of everything we do, shaping our ministry and guiding our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={value.letter}
                className="relative h-80 group"
                style={{ perspective: '1000px' }}
              >
                <div className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
                    <div className={`w-full h-full bg-gradient-to-br ${value.color} rounded-2xl shadow-lg flex flex-col items-center justify-center text-white group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-6xl font-bold mb-4">{value.letter}</div>
                      <div className="text-2xl font-semibold">{value.title}</div>
                      <div className="mt-4 w-8 h-1 bg-white/50 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                        <span className='text-white font-bold text-3xl'>{value.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h3>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
              Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Pastors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Convinced of this, I know that I will remain and continue with you all, for your progress and joy in the faith"
            </p>
          </div>

          {/* Lead Pastors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {pastors.slice(0, 2).map((pastor, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-w-4 aspect-h-5 bg-gray-200">
                  <img 
                    src={pastor.image} 
                    alt={pastor.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pastor.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{pastor.role}</p>
                  <div className="flex space-x-3">
                    {Object.entries(pastor.social).map(([platform, url]) => {
                      const Icon = getSocialIcon(platform);
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Associate Pastors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pastors.slice(2).map((pastor, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-4 aspect-h-5 bg-gray-200">
                  <img 
                    src={pastor.image} 
                    alt={pastor.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{pastor.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{pastor.role}</p>
                  <div className="flex space-x-2">
                    {Object.entries(pastor.social).map(([platform, url]) => {
                      const Icon = getSocialIcon(platform);
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My HGBC Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our community members about their transformative journey with Higher Ground Baptist Church.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                {/* <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div> */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-300">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full History Modal */}
      {showFullHistory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">History of Higher Ground Baptist Church</h2>
              <button
                onClick={() => setShowFullHistory(false)}
                className="w-10 h-10 text-black text-2xl cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Higher Ground Baptist Church (HGBC), City of Refuge is a product of prophecy and prayer by the will of God to be a church that will serve as a preparation and training ground for people as they navigate their lives and set course for their future endeavours. It has a mandate to help people birth their God-given purpose and shape men for destiny fulfilment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission and Growth</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Higher Ground Baptist Church has been consistently built with great emphasis on discipleship and sound biblical teaching leading to the transformation of lives. It has spent the vast majority of its resources building lives, creating strategies for achieving the vision and mission of the church, and investing in the spiritual growth of members alongside building the church facility.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Programs such as Photizo, Business and Investment Summit (BISUM), and Influencers Investment Club (IIC) were started in the church, which has helped a number of members to establish personal businesses and expand already established ones. The Lord has blessed the ministries of the church with several salvation decisions, rededication of lives, baptisms of members, and sending forth over 700 graduates into the larger society to represent Christ after their graduation from the university.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Founding</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Lord spoke through His servant, Rev'd Dr. Jide Abimbola, who planted University Baptist Church (UBC) alongside his wife (Rev'd Dr. Mrs. Doyin Abimbola), that a church will be planted. The name was given through divine inspiration to be Higher Ground Baptist Church. This set the pace for his successor, Rev'd Taiwo Opajobi, to look out for where God is working and join Him in bringing the prophecy to pass.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pastor Remi Badru, being inspired and ready to labor in seeing this vision come to pass, worked assiduously with Rev'd Taiwo Opajobi, the church Pastor, in the planning to start the new church. To the glory of God, the Higher Ground Baptist Church was planted by the University Baptist Church on the 21st of January, 2007.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                By the grace of God, the church has enjoyed the ministry of several pastors and the leadership of four pastors, all of whom were seminary students until 2013. On the 1st of June 2013, Pastor Adesina Ayodele Abegunde (now Revd. Dr.) was called by the mother church to immediately resume as the pastor of Higher Ground Baptist Church and was inducted on Sunday 8th June, 2014.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                He was, by God's grace, the church pastor until the 28th of March 2023, after he was led by the Holy Spirit to be the pastor of another church. Under the leadership of the Holy Spirit and Revd. Dr. Adesina Abegunde, Pastor Samson Ayangoke was called to be the substantial pastor. He resumed on the 1st of April 2023, led the church until his graduation on June 1st, 2024, and became the full-time Pastor from July 1st, 2024, till date.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Relocation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The church, which began in Amazing Delicacies building, moved to Shalom Executive Hostel Chapel. When the hall became too small, the church moved to 5 Star Hostel for Sunday services. Later on, as God increased His church, the church moved to an open field where they worshipped God with exuberant joy both under the sun and sometimes in heavy rainfall.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Eventually, by God's grace, the church moved into the property owned by Mafowurosere CICS. The church acquired a two-plot property which currently accommodates the church facility now under construction, thanks to God, the alumni, and the members of Higher Ground Baptist Church.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Membership and Ministries</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The membership is almost one hundred percent students, with other arms such as WMU, MMU, R.A, Lydia, G.A, Youth, and the Sunbeam all flourishing for the glory of God. By the grace of God, the church was organized on the 23rd of November 2020 by the mother church.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                By the leading of the Holy Spirit, HGBC planted a baby church, Tehillah Baptist Church, on the 11th of July, 2021, at Pastor Bode Area, a connecting community in-between Under G. Area and Stadium Area of Ogbomoso. Higher Ground Baptist Church is making progress, and we look forward to greater days ahead in the name of Jesus.
              </p>
            </div>
          </div>
        </div>
      )}
 </div>
      <Footer />
   
        </>
  );
};

export default About;