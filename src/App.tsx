import { useState } from 'react';

type Project = {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
  summary: string;
  image: string;
  accent: string;
  tools: string[];
  features: string[];
};

const projects: Project[] = [
  {
    id: 'cinder-keep',
    title: 'Cinder Keep',
    type: 'Environment Design',
    year: '2025',
    description: 'A moody fortress scene with volcanic atmosphere and dramatic storytelling.',
    summary:
      'This environment piece was built to convey scale, tension, and heat through layered materials, fog, and strong directional light.',
    image:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
    accent: '#ff7b5c',
    tools: ['Blender', 'Cycles', 'Compositor'],
    features: ['Atmospheric fog', 'Rock sculpting', 'Warm cinematic lighting'],
  },
  {
    id: 'glass-horizon',
    title: 'Glass Horizon',
    type: 'Product Visualization',
    year: '2024',
    description: 'A clean, futuristic product render built for reflection studies and material contrast.',
    summary:
      'The goal was to make the object feel premium and tactile by combining polished surfaces, soft shadows, and controlled realism.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    accent: '#7dd3fc',
    tools: ['Blender', 'Shader Editor', 'Post FX'],
    features: ['Glass material study', 'Studio lighting', 'Minimal presentation'],
  },
  {
    id: 'night-market',
    title: 'Night Market',
    type: 'Scene Composition',
    year: '2025',
    description: 'A dense urban scene focused on color, scale, and narrative detail in motion.',
    summary:
      'This scene uses layered props, street lighting, and playful contrast to create a believable and energetic nightlife mood.',
    image:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    accent: '#a78bfa',
    tools: ['Blender', 'Texture Painting', 'Lighting'],
    features: ['Urban storytelling', 'Color grading', 'Dense scene composition'],
  },
];

const stats = [
  { label: 'Years', value: '4+' },
  { label: 'Projects', value: '42' },
  { label: 'Clients', value: '12' },
];

const services = ['3D Modeling', 'Environment Art', 'Lighting & Rendering', 'Turntable Compositing'];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div className="page-shell">
      <header className="topbar sticky-bar">
        <div className="brand-wrap">
          <div className="brand-mark">B</div>
          <div>
            <p className="eyebrow">Blender Artist</p>
            <h1>Oleg Somik</h1>
          </div>
        </div>

        <nav className="nav">
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow accent">3D visuals • environments • product scenes</p>
            <h2>Creating cinematic Blender work that feels immersive and alive.</h2>
            <p className="lead">
              I build stylized and realistic 3D scenes, product visuals, and polished renders for portfolios,
              branding, and creative storytelling.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#gallery">View portfolio</a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              Available for client work and concept-driven visuals
            </div>

            <div className="stats-row">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured 3D artwork preview">
            <div className="visual-badge">Featured Render</div>
            <div className="art-panel panel-one" />
            <div className="art-panel panel-two" />
            <div className="art-panel panel-three" />
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h3>Recent projects</h3>
          </div>

          <div className="gallery-layout">
            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className={`project-card ${selectedProject.id === project.id ? 'active' : ''}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className="project-thumb"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${project.accent}, rgba(17, 24, 39, 0.9)), url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <span>{project.type}</span>
                  </div>
                  <div className="project-copy">
                    <div className="project-meta">
                      <h4>{project.title}</h4>
                      <span>{project.year}</span>
                    </div>
                    <p>{project.description}</p>
                    <button type="button" className="mini-button">
                      View project
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="detail-panel" aria-live="polite">
              <div
                className="detail-visual"
                style={{
                  backgroundImage: `url(${selectedProject.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="detail-content">
                <p className="eyebrow accent">{selectedProject.type}</p>
                <h4>{selectedProject.title}</h4>
                <p className="detail-summary">{selectedProject.summary}</p>
                <div className="detail-tools">
                  {selectedProject.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <ul>
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="section split" id="about">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h3>Focused on mood, detail, and visual clarity.</h3>
            <p>
              My workflow blends Blender modeling, texturing, lighting, and compositing into a clean pipeline for
              portfolios, products, and brand storytelling.
            </p>
          </div>

          <div className="tag-list">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Available for commissions</p>
          <h3>Let’s build something visually striking.</h3>
        </div>
        <a href="mailto:hello@blenderportfolio.com" className="button primary">
          hello@blenderportfolio.com
        </a>
      </footer>
    </div>
  );
}
