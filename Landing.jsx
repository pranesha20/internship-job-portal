import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-navbar">
        <Link to="/" className="landing-brand">
          <span className="landing-logo">C</span>
          CareerConnect<span className="landing-dot">.</span>
        </Link>
      </header>

      <main className="landing-main">
        <section className="landing-heading">
          <span className="landing-badge">
            YOUR FUTURE STARTS HERE
          </span>

          <h1>Welcome to CareerConnect</h1>

          <p>
            Find opportunities. Build your future.
            Connect with success.
          </p>
        </section>

        <section className="landing-cards">
          <article className="landing-card user-card">
            <div className="landing-card-icon">👨‍🎓</div>
            <h2>For Students &amp; Job Seekers</h2>
            <p>
              Discover internships and job opportunities,
              apply for positions, and take the next step
              in your career.
            </p>

            <Link className="landing-button user-button" to="/login">
              User Login
            </Link>

            <Link className="landing-button user-outline" to="/register">
              Create User Account
            </Link>
          </article>

          <article className="landing-card admin-card">
            <div className="landing-card-icon">🛡️</div>
            <h2>For Administrators</h2>
            <p>
              Access the administration panel to manage
              job listings and review applications.
            </p>

            <Link
              className="landing-button admin-button"
              to="/admin/login"
            >
              Admin Login
            </Link>
          </article>
        </section>

        <section className="landing-footer">
          <h3>Your next chapter starts here.</h3>
          <p>
            © {new Date().getFullYear()} CareerConnect.
            All rights reserved.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Landing