import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    currentUser === "Is null" && { label: 'Sign Up', href: '/auth/signup' },
    currentUser === "Is null" && { label: 'Sign In', href: '/auth/signin' },
    currentUser !== "Is null" && { label: 'Sign Out', href: '/auth/signout' }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link" href={href}>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};