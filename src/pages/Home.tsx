import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto flex min-h-screen max-w-5xl justify-center items-center px-6 py-16">
        <div className="max-w-5xl">
          <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            AI Interview Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Practice, Evaluate, and Improve Your Technical Interview Skills
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A modern interview platform designed to help candidates prepare for
            technical interviews through coding assessments, AI-powered code
            reviews, structured feedback, and real-time interview management.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="rounded-md border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">AI Reviews</h3>
              <p className="mt-2 text-sm text-slate-600">
                Receive detailed AI-generated feedback on coding submissions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Coding Tests
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Solve interview-style coding challenges in an integrated editor.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Real-Time Updates
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Stay informed with live notifications and interview status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
