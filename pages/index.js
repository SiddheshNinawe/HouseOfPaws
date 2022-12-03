
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "../styles/home.module.css";
import NavBar from '../components/NavBar';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <div className={styles.body}>
      <NavBar/>
      <div className={styles.bgimage}>
        <h1>House of Paws</h1>
        <h2>Animal Wellness and welfare</h2>
      </div>

      <div className={styles.sub}>
        <p>&#9827; What do we do</p>
      </div>
      <div className={styles.middle}>
        <div>
          <h3>The Shelter</h3>
          <p>
            Due to the lack of animal shelter in the vicinity of our small town,
            we decided to find a place and turn it into a shlelter for our
            stays. It took us almost a year, but we finally have a decent place,
            where our animlas can run around, relax in the shadow or simply have
            their personal space to recover.
          </p>
        </div>
        <div>
          <h3>The Care</h3>
          <p>
            Most of
            the animals we come across are heavily injured, mistreated, underfed
            or severely ill. Therfore, our organization strives not only to cure
            them, but also to implement prevantive measurements by neutering,
            vaccinating and deworming the animals and educating the society
          </p>
        </div>
        <div>
          <h3>Finding Home</h3>
          <p>
            It is not always easy to find our strays a loving family in
            Finding a forever home for our animals is the happy ending we would
            like to bring for everyone of them.
          </p>
        </div>
      </div>

      <div className={styles.sub}>
        <p>&#128247; Photos</p>
      </div>
      <div className={styles.about}>
        <div>
          <img src="/about-us-1.jpg" />
        </div>
        <div>
          <img src="/about-us-3.jpg" />
        </div>
        <div>
          <img src="/about-us-2.jpg" />
        </div>
        <div>
          <img src="/about-us-4.jpg" />
        </div>
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
