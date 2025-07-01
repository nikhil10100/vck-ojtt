import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Vivekanand College</h1>
      <p>
        Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in <strong>1980</strong>. Located in the bustling heart of <strong>Chembur, Mumbai</strong>, our college has consistently strived to uphold the highest standards of academic rigor and ethical values.
      </p>
      <p>
        Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
      </p>
        <img
            src="https://vivekanandcollege.ac.in/uploads/whatsapp%20image%202025-05-15%20at%2010.31.26%20am.jpeg"
            alt="Vivekanand College Banner"
            className="mx-auto rounded-lg shadow-lg border w-full max-w-2xl"
            width="100%"
            height="200"></img>

      <h2>Our Mission</h2>
      <ul>
        <li>To provide high-quality, accessible education across various disciplines.</li>
        <li>To foster research, innovation, and creativity among students and faculty.</li>
        <li>To cultivate a diverse and inclusive learning environment.</li>
        <li>To instill strong ethical values and leadership qualities.</li>
      </ul>
      

      <h2>Our Values</h2>
      <p>
        Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.
      </p>

      <h2>Our History</h2>
      <p>
        Vivekanand College began its journey in 1980 with a vision to make quality education available to all. Over the years, the college has achieved key milestones in academic excellence, infrastructure development, and alumni success, continuing its legacy of educational empowerment.
      </p>
    </div>
  );
};

export default AboutPage;
