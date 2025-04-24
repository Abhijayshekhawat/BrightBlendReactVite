// src/config/nav.js
export const nav = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Learning', path: '/learning', children: [
        { label: 'Early Years', path: 'early-years' },
        { label: 'What We Teach', path: 'what-we-teach' },
        { label: 'How We Teach', path: 'how-we-teach' },
        { label: 'English', path: 'english' },
        { label: 'Mathematics', path: 'mathematics' },
        { label: 'Science', path: 'science' },
        { label: 'Sustainability', path: 'sustainability' },
        { label: 'Wellness', path: 'wellness' },
        { label: 'GlobalProject', path: 'globalproject' },
        { label: 'ICT', path: 'ict' },
        { label: 'Music', path: 'music' },
        { label: 'PE', path: 'pe' },
        { label: 'Assessment', path: 'assessment' },
      ]
    },
    {
      label: 'Activities', path: '/activities', children: [
        { label: 'Afterschool Activities', path: 'afterschool' },
        { label: 'Student Leadership', path: 'student-leadership' },
        { label: 'ECA + Clubs', path: 'eca-clubs' },
        { label: 'Events', path: 'events' },
      ]
    },
    {
      label: 'Information', path: '/information', children: [
        { label: 'News', path: 'news' },
        { label: 'Calendar', path: 'calendar' },
        { label: 'Uniform', path: 'uniform' },
      ]
    },
    {
      label: 'Admission', path: '/admission', children: [
        { label: 'Policy', path: 'policy' },
        { label: 'ECA Sign-Up', path: 'eca-signup' },
        { label: 'Admission Form', path: 'form' },
        { label: 'Fees', path: 'fees' },
      ]
    },
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' },
  ]
  