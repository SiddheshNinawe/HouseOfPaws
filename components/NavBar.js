import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  const { user, error, isLoading } = useUser();
  return (
    <div className={styles.navbar}>
      <nav>
        <div className="logo">
          <img src="/logo.png" />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/pets">
              <a className="nav-link">Our Animals</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="nav-link">About Us</a>
            </Link>
          </li>
          <li>
            {user && (
              <Link href="/api/auth/logout">
                <a className="nav-link">Logout</a>
              </Link>
            )}
            {!user && (
              <Link href="/api/auth/login">
                <a className="nav-link">Login</a>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
