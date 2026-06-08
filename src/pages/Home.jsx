import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UploadCloud, Zap, Award, BarChart3 } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="badge"
        >
          <Zap size={16} /> Powered by Advanced Analysis
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-title"
        >
          Unlock Your <span className="text-gradient">Career Potential</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Instantly analyze your resume against thousands of job descriptions. 
          Get your ATS score, discover missing skills, and land your dream job faster.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/register">
            <button className="btn-primary">
              Analyze My Resume <UploadCloud size={20} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-header">
          <h2 className="features-title">Why Choose SmartAnalyzer?</h2>
          <p className="features-subtitle">Everything you need to perfect your resume.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="features-grid"
        >
          {[
            { icon: <BarChart3 size={32} color="var(--accent-primary)" />, title: "Instant ATS Scoring", desc: "Get an accurate percentage score of how well your resume matches industry standards." },
            { icon: <Zap size={32} color="var(--warning)" />, title: "Skill Gap Analysis", desc: "Identify exactly which keywords and skills you are missing to pass the initial screening." },
            { icon: <Award size={32} color="var(--success)" />, title: "Actionable Feedback", desc: "Receive tailored suggestions on formatting, tone, and content to improve your chances." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-panel feature-card"
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};


export default Home;
