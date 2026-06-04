import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBook, FaTrophy, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const courses = [
    { id: 1, title: 'Web Development', rating: 4.8, students: 1500 },
    { id: 2, title: 'Data Science', rating: 4.7, students: 1200 },
    { id: 3, title: 'Python Basics', rating: 4.9, students: 2000 },
  ];

  const features = [
    { icon: <FaBook className="text-3xl" />, title: 'Expert Courses', desc: 'Learn from industry experts' },
    { icon: <FaTrophy className="text-3xl" />, title: 'Certification', desc: 'Earn recognized certificates' },
    { icon: <FaUsers className="text-3xl" />, title: 'Community', desc: 'Join a global learning community' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container pt-20 pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="flex justify-center mb-8">
            <FaGraduationCap className="text-6xl gradient-text" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Learn Without Limits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Unlock your potential with world-class education. Learn at your own pace from expert instructors worldwide.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/courses" className="btn-primary">
              Explore Courses
            </Link>
            <Link to="/auth/register" className="btn-outline">
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Why Choose EduLearn?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card text-center"
            >
              <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div key={course.id} className="card hover:shadow-xl cursor-pointer">
              <div className="bg-gradient-to-r from-primary to-secondary h-40 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>⭐ {course.rating}</span>
                <span>👥 {course.students} students</span>
              </div>
              <button className="btn-primary w-full mt-4">Enroll Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <motion.div className="glass rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Join thousands of students already learning on EduLearn
          </p>
          <Link to="/auth/register" className="btn-primary">
            Create Free Account
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
