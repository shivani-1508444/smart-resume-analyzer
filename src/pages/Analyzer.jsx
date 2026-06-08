import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, File, CheckCircle, AlertTriangle, ChevronRight, BarChart, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Analyzer = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);
  const reportRef = useRef(null);

  const downloadReport = async () => {
    const element = reportRef.current;
    if (!element) return;
    
    element.style.background = 'var(--bg-primary)';
    
    try {
      const canvas = await html2canvas(element, { 
        scale: 2, 
        backgroundColor: '#0a0a0f',
        useCORS: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('SmartAnalyzer_Resume_Report.pdf');
    } catch (err) {
      console.error('Failed to generate PDF', err);
      alert('Failed to generate PDF report.');
    } finally {
      element.style.background = 'transparent';
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      processFile(droppedFile);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      processFile(selectedFile);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const processFile = (file) => {
    setFile(file);
    setIsAnalyzing(true);
    setResults(null);

    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 40) + 45;
      setResults({
        score: mockScore,
        currentSkills: ['JavaScript', 'React', 'HTML', 'CSS', 'Problem Solving'],
        missingSkills: ['TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL'],
        suggestions: [
          'Quantify your achievements with metrics (e.g., "Increased sales by 20%").',
          'Include more action verbs at the beginning of bullet points.',
          'Add a professional summary highlighting your career goals.',
          'Ensure formatting is consistent and easy for ATS parsers to read.'
        ],
        fileUrl: URL.createObjectURL(file)
      });
      setIsAnalyzing(false);
    }, 3500);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Analyzer</h1>
        <p className="dashboard-subtitle">Upload your resume to get instant feedback and ATS scoring.</p>
      </div>

      <AnimatePresence mode="wait">
        {!file && !isAnalyzing && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`glass-panel upload-zone ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept=".pdf" 
              style={{ display: 'none' }} 
            />
            <div className="upload-icon-wrapper">
              <UploadCloud size={40} color="var(--accent-primary)" />
            </div>
            <h3 className="upload-title">Upload your Resume (PDF)</h3>
            <p className="upload-subtitle">Drag and drop your file here or click to browse</p>
          </motion.div>
        )}

        {isAnalyzing && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="glass-panel analyzing-zone"
          >
            <div className="spinner-wrapper">
              <div className="spinner-ring" />
              <File size={40} color="var(--accent-primary)" className="spinner-icon" />
            </div>
            <h2 className="analyzing-title">Analyzing your Resume...</h2>
            <p className="dashboard-subtitle">Our AI is scanning for keywords, formatting, and industry standards.</p>
          </motion.div>
        )}

        {results && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="results-grid"
          >
            {/* Left Column: Results */}
            <div className="results-column">
              <div ref={reportRef} className="results-column">
                
                {/* Score Card */}
                <div className="glass-panel score-card">
                  <div className="score-circle-wrapper">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                      <motion.circle 
                        cx="60" cy="60" r="50" fill="none" 
                        stroke={results.score > 70 ? 'var(--success)' : results.score > 50 ? 'var(--warning)' : 'var(--danger)'} 
                        strokeWidth="10" 
                        strokeDasharray="314" 
                        initial={{ strokeDashoffset: 314 }}
                        animate={{ strokeDashoffset: 314 - (314 * results.score) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        transform="rotate(-90 60 60)"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="score-text-wrapper">
                      <span className="score-value">{results.score}%</span>
                      <span className="score-label">ATS Score</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="score-title">
                      {results.score > 70 ? 'Great Job!' : results.score > 50 ? 'Needs Improvement' : 'Requires Rewrite'}
                    </h3>
                    <p className="score-desc">
                      Your resume scored {results.score}%. Focus on adding missing keywords and quantifying your achievements.
                    </p>
                  </div>
                </div>

                {/* Skills Analysis */}
                <div className="glass-panel skills-card">
                  <h3 className="skills-title">
                    <CheckCircle size={20} color="var(--success)" /> Detected Skills
                  </h3>
                  <div className="skills-list">
                    {results.currentSkills.map((skill, i) => (
                      <span key={i} className="skill-badge-success">{skill}</span>
                    ))}
                  </div>

                  <h3 className="skills-title">
                    <AlertTriangle size={20} color="var(--warning)" /> Missing Keywords
                  </h3>
                  <div className="skills-list">
                    {results.missingSkills.map((skill, i) => (
                      <span key={i} className="skill-badge-warning">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                <div className="glass-panel suggestions-card">
                  <h3 className="skills-title">
                    <BarChart size={20} color="var(--accent-primary)" /> Improvement Suggestions
                  </h3>
                  <ul className="suggestions-list">
                    {results.suggestions.map((sugg, i) => (
                      <li key={i} className="suggestion-item">
                        <ChevronRight size={18} color="var(--accent-primary)" className="suggestion-icon" />
                        <span className="suggestion-text">{sugg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="action-buttons">
                <button onClick={downloadReport} className="btn-primary" style={{flex: 1, justifyContent: 'center'}}>
                  <Download size={20} /> Download Report
                </button>
                <button onClick={() => { setFile(null); setResults(null); }} className="btn-secondary">
                  Upload Another
                </button>
              </div>
            </div>

            {/* Right Column: PDF Preview */}
            <div className="glass-panel preview-card">
              <h3 className="preview-title">Resume Preview</h3>
              <div className="preview-container">
                <embed 
                  src={`${results.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
                  type="application/pdf" 
                  width="100%" 
                  height="100%" 
                  className="preview-embed"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Analyzer;
