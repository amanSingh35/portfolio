import styles from './ProjectsStyles.module.css';
import notes from '../../assets/notes.png';
import movie from '../../assets/movie.png';
import health from '../../assets/health.png';
import event from '../../assets/event.jpg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={event}
          link="https://eventhub1.netlify.app/"
          h3="EventHub"
          p="Event Management System BMSIT"
        />
        <ProjectCard
          src={notes}
          link="https://notes-two-tawny.vercel.app/"
          h3="MindScrib"
          p="Your Notes Application"
        />
        <ProjectCard
          src={movie}
          link="https://movie-api-iota-seven.vercel.app/"
          h3="MovieInfo"
          p="Movie Information"
        />
        <ProjectCard
          src={health}
          link="https://github.com/amanSingh35/zenFitAI"
          h3="zenFitAI"
          p="Form Tracker"
        />
        <ProjectCard
          src={fitLift}
          link="https://inilax-v2.vercel.app/"
          h3="Inilax"
          p="Landing Page"
        />
      </div>
    </section>
  );
}

export default Projects;
