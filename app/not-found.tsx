import Link from "next/link";

export default function NotFound() {
  return (
    <main className="plain-page">
      <section className="shell plain-hero">
        <div className="plain-card">
          <p className="plain-kicker">404</p>
          <h1>This puzzle piece is missing.</h1>
          <p>
            The page you tried to reach is not available right now. Head back to the
            main Zen Jigsaw Master page and launch the game from there.
          </p>
          <Link className="primary-link" href="/">
            Return to home
          </Link>
        </div>
      </section>
    </main>
  );
}
