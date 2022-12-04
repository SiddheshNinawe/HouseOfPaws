import styles from './footer.module.css'

export default function Footer(){
    return (
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
    );
}