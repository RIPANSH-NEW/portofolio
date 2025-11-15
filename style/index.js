import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Instagram, Globe, ExternalLink } from 'lucide-react';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { id: 'landing', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'project', label: 'Project' },
    { id: 'skill', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'SA-MP Scripting (PAWN)', level: 90 },
    { name: 'Web Development', level: 85 },
    { name: 'JavaScript/React', level: 80 },
    { name: 'PHP/MySQL', level: 75 },
    { name: 'UI/UX Design', level: 70 }
  ];

  const sampProjects = [
    {
      title: 'Roleplay Server Indonesia',
      description: 'Server roleplay dengan sistem ekonomi kompleks, job system, dan faction management',
      tech: 'PAWN, MySQL, Streamer Plugin'
    },
    {
      title: 'Freeroam Server',
      description: 'Server freeroam dengan custom race system, minigames, dan achievement system',
      tech: 'PAWN, SQLite, YSF Plugin'
    },
    {
      title: 'Admin System Pro',
      description: 'Advanced admin panel dengan logging system dan punishment management',
      tech: 'PAWN, MySQL, Dialogs'
    }
  ];

  const websiteProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform jual beli online dengan payment gateway dan admin dashboard',
      tech: 'React, Node.js, MongoDB'
    },
    {
      title: 'Company Profile',
      description: 'Website company profile modern dengan CMS dan portfolio showcase',
      tech: 'Next.js, Tailwind CSS'
    },
    {
      title: 'Blog Platform',
      description: 'Platform blog dengan markdown support dan comment system',
      tech: 'PHP, Laravel, MySQL'
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 hover:bg-slate-700"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Landing Page */}
      {activeSection === 'landing' && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-slate-900"></div>
          
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Selamat Datang
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Saya adalah seorang developer yang berfokus pada SA-MP scripting dan web development
            </p>
            <button
              onClick={() => scrollToSection('profile')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Lihat Profile Saya
            </button>
          </div>
        </section>
      )}

      {/* Profile */}
      {activeSection === 'profile' && (
        <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Profile
            </h2>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/50 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">John Developer</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Saya adalah seorang developer dengan pengalaman lebih dari 5 tahun dalam bidang SA-MP scripting dan web development. 
                    Fokus utama saya adalah menciptakan sistem yang efisien, scalable, dan user-friendly.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Saya memiliki passion dalam mengembangkan game server dan aplikasi web modern. 
                    Selalu bersemangat untuk belajar teknologi baru dan menghadapi tantangan programming yang kompleks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {activeSection === 'project' && (
        <section className="min-h-screen px-4 pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>

            {/* SA-MP Projects */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-purple-400">SA-MP Projects</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {sampProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105"
                  >
                    <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="text-xs text-purple-400">{project.tech}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Website Projects */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-pink-400">Website Projects</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {websiteProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105"
                  >
                    <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="text-xs text-pink-400">{project.tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {activeSection === 'skill' && (
        <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </h2>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      {activeSection === 'contact' && (
        <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all hover:scale-105 flex items-center gap-4"
              >
                <Phone className="w-8 h-8 text-green-400" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-gray-400 text-sm">+62 812-3456-7890</div>
                </div>
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 flex items-center gap-4"
              >
                <Instagram className="w-8 h-8 text-pink-400" />
                <div>
                  <div className="font-semibold">Instagram</div>
                  <div className="text-gray-400 text-sm">@yourusername</div>
                </div>
              </a>

              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all hover:scale-105 flex items-center gap-4"
              >
                <Globe className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="font-semibold">Website</div>
                  <div className="text-gray-400 text-sm">yourwebsite.com</div>
                </div>
              </a>

              <a
                href="mailto:your.email@example.com"
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 flex items-center gap-4"
              >
                <Mail className="w-8 h-8 text-purple-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400 text-sm">your.email@example.com</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PortfolioWebsite;