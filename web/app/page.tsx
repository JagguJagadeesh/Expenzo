'use client'

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Users,
  PieChart,
  Shield,
  TrendingUp,
  Sparkles,
  Heart,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const ExpenzoLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Enhanced Floating Navigation */}
      <motion.nav
        style={{ opacity: navOpacity }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${isScrolled
            ? 'backdrop-blur-2xl bg-white/80 shadow-2xl shadow-purple-500/10'
            : 'backdrop-blur-xl bg-white/70'
          } border border-purple-200/50 rounded-2xl md:rounded-full`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 md:gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Expenzo
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {['Features', 'How It Works', 'Testimonials'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-pink-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gradient-to-br from-indigo-100 to-pink-100 text-indigo-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/95 via-purple-600/95 to-pink-600/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
            {['Features', 'How It Works', 'Testimonials'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-indigo-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3 }}
              className="px-10 py-4 bg-white text-indigo-600 rounded-full text-lg font-bold shadow-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started Free
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section - Enhanced Responsive */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 px-4 md:px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-300/30 to-violet-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-purple-200 mb-6 md:mb-8 shadow-lg"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-indigo-600" />
              <span className="text-xs md:text-sm font-medium text-gray-700">Track. Share. Save. Together.</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-4"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Simplify your family's
              </span>
              <br />
              <span className="text-gray-800">finances — together.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Expenzo keeps track of shared expenses, savings, and payments — privately, securely, and beautifully.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-full text-base md:text-lg font-semibold flex items-center gap-2 justify-center shadow-lg"
              >
                Get Started <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-base md:text-lg font-semibold border-2 border-gray-200 hover:border-indigo-400 transition-colors shadow-lg"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration - Enhanced Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 md:mt-16 px-4"
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white/70 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-purple-200/50 p-4 md:p-8 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="h-24 md:h-32 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl md:rounded-2xl animate-pulse" />
                  <div className="h-24 md:h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl md:rounded-2xl animate-pulse delay-100" />
                  <div className="h-24 md:h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl md:rounded-2xl animate-pulse delay-200 col-span-2 md:col-span-1" />
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-indigo-400/30 to-pink-400/30 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-purple-400/30 to-violet-400/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Enhanced Responsive */}
      <section id="features" className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Everything your family needs
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Powerful features designed to bring financial clarity and harmony to your household
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          >
            {[
              {
                icon: Users,
                title: "Shared Expense Tracking",
                description: "Add family members and track every shared expense in one place. Everyone stays in the loop."
              },
              {
                icon: TrendingUp,
                title: "Smart Split & Settlement",
                description: "Automatically calculate who owes what. Settle up with a tap. No more awkward money talks."
              },
              {
                icon: PieChart,
                title: "Visual Reports",
                description: "Beautiful charts and insights show spending patterns, savings goals, and budget health."
              },
              {
                icon: Shield,
                title: "Private & Secure",
                description: "Bank-level encryption keeps your family's financial data safe and completely private."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
                className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-purple-100 transition-all shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Enhanced Responsive */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-indigo-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                How it works
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Four simple steps to financial harmony</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {[
              { step: "1", title: "Add Members", desc: "Invite your family to join your expense group" },
              { step: "2", title: "Record Expenses", desc: "Log purchases and bills as they happen" },
              { step: "3", title: "Settle Up", desc: "See balances and settle debts instantly" },
              { step: "4", title: "Stay in Sync", desc: "Track budgets and savings together" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6 shadow-2xl"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-pink-300 -z-10" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Family Insights Section - Enhanced Responsive */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Real-time family insights
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">See your household finances at a glance</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-purple-200/50 p-4 md:p-8 lg:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Mock Dashboard - Left */}
              <div className="space-y-4 md:space-y-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Family Members</h4>
                  <div className="space-y-2 md:space-y-3">
                    {['Sarah (+$240)', 'Mike (-$120)', 'Emma (+$80)'].map((member, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 bg-white rounded-lg md:rounded-xl p-2 md:p-3"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full" />
                        <span className="text-sm md:text-base font-medium text-gray-700">{member}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-violet-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2">Monthly Budget</h4>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                    $3,450 / $4,000
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 mt-3 md:mt-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "86%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2 md:h-3 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Mock Dashboard - Right */}
              <div className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-xl md:rounded-2xl p-4 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Spending by Category</h4>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { name: 'Groceries', amount: '$850', percent: 70 },
                    { name: 'Utilities', amount: '$420', percent: 45 },
                    { name: 'Entertainment', amount: '$320', percent: 35 },
                    { name: 'Transport', amount: '$280', percent: 30 }
                  ].map((cat, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm md:text-base font-medium text-gray-700">{cat.name}</span>
                        <span className="text-sm md:text-base text-gray-600">{cat.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cat.percent}%` }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="bg-gradient-to-r from-indigo-400 to-pink-400 h-1.5 md:h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced Responsive */}
      <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                Families love Expenzo
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {[
              {
                quote: "Finally, no more who-paid-for-what arguments! Expenzo keeps everyone honest and happy.",
                author: "The Johnson Family"
              },
              {
                quote: "We saved $500 last month just by seeing where our money actually goes. Game changer!",
                author: "The Patels"
              },
              {
                quote: "My teenage kids are learning budgeting without me nagging. That's worth every penny!",
                author: "Single Dad, 2 Kids"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-purple-100 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-3xl md:text-4xl text-indigo-400 mb-3 md:mb-4">😄</div>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-sm md:text-base font-semibold text-gray-800">— {testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced Responsive */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Bring financial harmony to your family
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-indigo-100">
              Start using Expenzo today and experience stress-free money management
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white text-indigo-600 rounded-full text-base md:text-lg font-bold inline-flex items-center justify-center gap-2 shadow-xl"
            >
              Sign Up Free <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
            <p className="text-xs md:text-sm text-indigo-200 mt-3 md:mt-4">No credit card required • Free forever</p>
          </div>
        </motion.div>
      </section>

      {/* Footer - Enhanced Responsive */}
      <footer className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg md:rounded-xl flex items-center justify-center">
                <Heart className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold">Expenzo</span>
            </div>

            <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>

            <div className="flex gap-3 md:gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-sm md:text-base"
              >
                𝕏
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-sm md:text-base"
              >
                IG
              </motion.a>
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 text-center">
            <p className="text-indigo-300 text-sm md:text-base">
              © 2025 Expenzo. Made with ❤️ for families.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExpenzoLanding;