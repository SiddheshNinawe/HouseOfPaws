import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/about.module.css";

export default function about() {
  const { user, error, isLoading } = useUser();
  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <nav>
          <div class="logo">
            <img src="/logo.png" />
          </div>
          <ul>
            <li>
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="../pets" class="nav-link">
                Our Animals
              </a>
            </li>
            <li>
              <a href="/about" class="nav-link">
                About Us
              </a>
            </li>
            <li>
              {user && (
                <a href="/api/auth/logout" class="nav-link">
                  Logout
                </a>
              )}
              {!user && (
                <a href="/api/auth/login" class="nav-link">
                  Login
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.bgimage}>
        <h1>About US</h1>
      </div>

      <div className={styles.we}>
        <h1>We are...</h1>
      </div>

      <div className={styles.aboutcard}>
        <div>
          <img src="/siddhesh.jpeg" />
          <h3>Siddhesh Ninawe</h3>
          <p>B.E. CSE 3rd year</p>
          <p>S.B. Jain institute of Technology Management and Research</p>
        </div>
        <div>
          <img src="/vaishnavi.jpeg" />
          <h3>Vaishnavi Belekar</h3>
          <p>B.E. CSE 3rd year</p>
          <p>S.B. Jain institute of Technology Management and Research</p>
        </div>
        <div>
          <img src="/shivam.jpg" />
          <h3>Shivam Singh</h3>
          <p>B.E. CSE 3rd year</p>
          <p>S.B. Jain institute of Technology Management and Research</p>
        </div>
        <div>
          <img src="/vanshaj.jpeg" />
          <h3>Vanshaj Nagdeve</h3>
          <p>B.E. CSE 3rd year</p>
          <p>S.B. Jain institute of Technology Management and Research</p>
        </div>
      </div>

      <div className={styles.strive}>
        <h1>We Strive...</h1>
        <p>At many things, which we belive we can achieve, but these few are the main:</p>
        <ul>
          <li>Rescue and treat as many dogs and cats as we can</li>
          <li>Find them loving families</li>
          <li>Neuter as many street animals as we can to reduce the their number with time</li>
          <li>Build a shelter for the ones we are not able to re-home</li>
        </ul>
      </div>

      <div className={styles.footer}>
        <h2>Contact Details</h2>
        <div>
          <h4>
            <span> &#9906; </span>
            S.B.Jain, Nagpur, Maharashtra
          </h4>
        </div>
        <div>
          <h4>
            <span> &#9743; </span> 7771976134
          </h4>
        </div>
        <div>
          <h4>
            <span>&#9993; </span> houseofpaws@gmail.com
          </h4>
        </div>
      </div>
    </div>
  );
}
