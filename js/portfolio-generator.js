// Portfolio Generator JavaScript - Fixed Version
class PortfolioGenerator {
    constructor() {
        this.projectCount = 1;
        this.experienceCount = 1;
        this.generatedHTML = null;
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeEventListeners();
            });
        } else {
            this.initializeEventListeners();
        }
    }

    initializeEventListeners() {
        console.log('Initializing Portfolio Generator...');
        
        // Add project button
        const addProjectBtn = document.getElementById('addProject');
        if (addProjectBtn) {
            addProjectBtn.addEventListener('click', () => this.addProjectInput());
        }

        // Add experience button
        const addExpBtn = document.getElementById('addExperience');
        if (addExpBtn) {
            addExpBtn.addEventListener('click', () => this.addExperienceInput());
        }

        // Generate portfolio button
        const generateBtn = document.getElementById('generatePortfolio');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generatePortfolio());
        }

        // Preview button
        const previewBtn = document.getElementById('previewPortfolio');
        if (previewBtn) {
            previewBtn.addEventListener('click', () => this.previewPortfolio());
        }

        // Download HTML button
        const downloadBtn = document.getElementById('downloadHtml');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => this.downloadHtml());
        }

        // Copy code button
        const copyBtn = document.getElementById('copyCode');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyCode());
        }

        console.log('Portfolio Generator initialized successfully!');
    }

    addProjectInput() {
        if (this.projectCount >= 3) {
            alert('Maximum 3 projects allowed');
            return;
        }

        this.projectCount++;
        const container = document.getElementById('projectsContainer');
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-input';
        projectDiv.innerHTML = `
            <input type="text" placeholder="Project Title *" class="project-title form-control" style="margin-bottom: 8px;">
            <input type="text" placeholder="Technologies Used *" class="project-tech form-control" style="margin-bottom: 8px;">
            <textarea placeholder="Project Description *" class="project-desc form-control" rows="2" style="margin-bottom: 8px;"></textarea>
            <input type="url" placeholder="GitHub Link (optional)" class="project-link form-control" style="margin-bottom: 8px;">
            <button type="button" class="remove-btn" onclick="this.parentElement.remove(); portfolioGen.projectCount--;">Remove Project</button>
        `;
        container.appendChild(projectDiv);
    }

    addExperienceInput() {
        if (this.experienceCount >= 3) {
            alert('Maximum 3 experiences allowed');
            return;
        }

        this.experienceCount++;
        const container = document.getElementById('experienceContainer');
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-input';
        expDiv.innerHTML = `
            <input type="text" placeholder="Job Title" class="exp-title form-control" style="margin-bottom: 8px;">
            <input type="text" placeholder="Company Name" class="exp-company form-control" style="margin-bottom: 8px;">
            <input type="text" placeholder="Duration (e.g., Jan 2024 - Present)" class="exp-duration form-control" style="margin-bottom: 8px;">
            <textarea placeholder="Job Description" class="exp-desc form-control" rows="2" style="margin-bottom: 8px;"></textarea>
            <button type="button" class="remove-btn" onclick="this.parentElement.remove(); portfolioGen.experienceCount--;">Remove Experience</button>
        `;
        container.appendChild(expDiv);
    }

    collectFormData() {
        const data = {
            fullName: document.getElementById('fullName')?.value || '',
            profession: document.getElementById('profession')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            linkedin: document.getElementById('linkedin')?.value || '',
            github: document.getElementById('github')?.value || '',
            summary: document.getElementById('summary')?.value || '',
            programmingSkills: document.getElementById('programmingSkills')?.value || '',
            webTechSkills: document.getElementById('webTechSkills')?.value || '',
            toolsSkills: document.getElementById('toolsSkills')?.value || '',
            education: document.getElementById('education')?.value || '',
            cgpa: document.getElementById('cgpa')?.value || '',
            projects: [],
            experiences: []
        };

        // Collect projects
        const projectInputs = document.querySelectorAll('.project-input');
        projectInputs.forEach(project => {
            const title = project.querySelector('.project-title')?.value || '';
            const tech = project.querySelector('.project-tech')?.value || '';
            const desc = project.querySelector('.project-desc')?.value || '';
            const link = project.querySelector('.project-link')?.value || '';
            
            if (title.trim() && tech.trim() && desc.trim()) {
                data.projects.push({ title, tech, desc, link });
            }
        });

        // Collect experiences
        const expInputs = document.querySelectorAll('.experience-input');
        expInputs.forEach(exp => {
            const title = exp.querySelector('.exp-title')?.value || '';
            const company = exp.querySelector('.exp-company')?.value || '';
            const duration = exp.querySelector('.exp-duration')?.value || '';
            const desc = exp.querySelector('.exp-desc')?.value || '';
            
            if (title.trim() && company.trim() && duration.trim()) {
                data.experiences.push({ title, company, duration, desc });
            }
        });

        return data;
    }

    validateForm(data) {
        const required = {
            'fullName': 'Full Name',
            'profession': 'Profession/Title',
            'email': 'Email',
            'phone': 'Phone Number',
            'summary': 'Professional Summary',
            'education': 'Education'
        };
        
        for (let field in required) {
            if (!data[field] || data[field].trim() === '') {
                alert(`Please fill in the ${required[field]} field`);
                document.getElementById(field)?.focus();
                return false;
            }
        }

        if (data.projects.length === 0) {
            alert('Please add at least one project with title, technologies, and description');
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            document.getElementById('email')?.focus();
            return false;
        }

        return true;
    }

    generatePortfolioHTML(data) {
        const skillsHTML = this.generateAllSkills(data);
        
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.fullName} - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #2d3748; background: #f7fafc; }
        .container { max-width: 1000px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 40px 20px; text-align: center; margin-bottom: 30px; border-radius: 12px; }
        .header h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .header h2 { font-size: 1.3rem; margin-bottom: 20px; opacity: 0.9; }
        .contact-info { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; font-size: 0.95rem; }
        .section { background: white; padding: 25px; margin-bottom: 25px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
        .section h3 { color: #667eea; font-size: 1.4rem; margin-bottom: 15px; border-bottom: 2px solid #667eea; padding-bottom: 8px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
        .skill-tag { background: #667eea; color: white; padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; }
        .project, .experience { border-left: 3px solid #667eea; padding-left: 15px; margin-bottom: 20px; }
        .project h4, .experience h4 { color: #2d3748; margin-bottom: 5px; }
        .project-tech { color: #764ba2; font-size: 0.9rem; font-weight: 500; margin-bottom: 8px; }
        .project p, .experience p { color: #4a5568; margin-bottom: 8px; }
        .project-link { color: #667eea; text-decoration: none; font-weight: 500; }
        .project-link:hover { text-decoration: underline; }
        .company { color: #764ba2; font-weight: 500; }
        .duration { color: #718096; font-size: 0.9rem; font-style: italic; }
        @media (max-width: 768px) {
            .header h1 { font-size: 2rem; }
            .contact-info { flex-direction: column; align-items: center; gap: 10px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${data.fullName}</h1>
            <h2>${data.profession}</h2>
            <div class="contact-info">
                <span>📧 ${data.email}</span>
                <span>📱 ${data.phone}</span>
                ${data.linkedin ? `<span>💼 <a href="${data.linkedin}" style="color: white;">LinkedIn</a></span>` : ''}
                ${data.github ? `<span>💻 <a href="${data.github}" style="color: white;">GitHub</a></span>` : ''}
            </div>
        </div>
        
        <div class="section">
            <h3>Summary</h3>
            <p>${data.summary}</p>
        </div>
        
        <div class="section">
            <h3>Education</h3>
            <p><strong>${data.education}</strong></p>
            ${data.cgpa ? `<p>CGPA/Percentage: <strong>${data.cgpa}</strong></p>` : ''}
        </div>
        
        ${skillsHTML ? `<div class="section"><h3>Technical Skills</h3><div class="skills">${skillsHTML}</div></div>` : ''}
        
        <div class="section">
            <h3>Projects</h3>
            ${data.projects.map(project => `
                <div class="project">
                    <h4>${project.title}</h4>
                    <div class="project-tech">${project.tech}</div>
                    <p>${project.desc}</p>
                    ${project.link ? `<a href="${project.link}" class="project-link" target="_blank">View Project →</a>` : ''}
                </div>
            `).join('')}
        </div>
        
        ${data.experiences.length > 0 ? `
        <div class="section">
            <h3>Experience</h3>
            ${data.experiences.map(exp => `
                <div class="experience">
                    <h4>${exp.title}</h4>
                    <div class="company">${exp.company}</div>
                    <div class="duration">${exp.duration}</div>
                    <p>${exp.desc}</p>
                </div>
            `).join('')}
        </div>
        ` : ''}
    </div>
</body>
</html>`;
    }

    generateAllSkills(data) {
        let allSkills = [];
        
        if (data.programmingSkills) {
            allSkills = allSkills.concat(this.parseSkills(data.programmingSkills));
        }
        if (data.webTechSkills) {
            allSkills = allSkills.concat(this.parseSkills(data.webTechSkills));
        }
        if (data.toolsSkills) {
            allSkills = allSkills.concat(this.parseSkills(data.toolsSkills));
        }
        
        return allSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
    }

    parseSkills(skillsText) {
        if (!skillsText) return [];
        
        // Remove category prefix if exists (e.g., "Programming: Python, Java" -> "Python, Java")
        const skills = skillsText.includes(':') ? skillsText.split(':')[1] : skillsText;
        
        return skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
    }

    previewPortfolio() {
        const data = this.collectFormData();
        console.log('Form data collected:', data);
        
        if (!this.validateForm(data)) return;
        
        const html = this.generatePortfolioHTML(data);
        const preview = document.getElementById('portfolioPreview');
        
        if (preview) {
            preview.innerHTML = `<iframe srcdoc="${html.replace(/"/g, '&quot;')}" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>`;
            
            // Show download actions
            const downloadActions = document.querySelector('.download-actions');
            if (downloadActions) {
                downloadActions.style.display = 'flex';
            }
            
            // Store generated HTML for download
            this.generatedHTML = html;
            
            // Scroll to preview
            preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    generatePortfolio() {
        this.previewPortfolio();
        
        if (this.generatedHTML) {
            setTimeout(() => {
                alert('Portfolio generated successfully! You can now preview and download it.');
            }, 500);
        }
    }

    downloadHtml() {
        if (!this.generatedHTML) {
            alert('Please generate a portfolio first!');
            return;
        }
        
        const data = this.collectFormData();
        const blob = new Blob([this.generatedHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${data.fullName.replace(/\s+/g, '_')}_Portfolio.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('Portfolio downloaded successfully!');
    }

    copyCode() {
        if (!this.generatedHTML) {
            alert('Please generate a portfolio first!');
            return;
        }
        
        navigator.clipboard.writeText(this.generatedHTML).then(() => {
            alert('Portfolio HTML code copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy code. Please try downloading instead.');
        });
    }
}

// Initialize the portfolio generator
let portfolioGen;
document.addEventListener('DOMContentLoaded', () => {
    portfolioGen = new PortfolioGenerator();
});

// Also initialize if DOM is already ready
if (document.readyState !== 'loading') {
    portfolioGen = new PortfolioGenerator();
}
