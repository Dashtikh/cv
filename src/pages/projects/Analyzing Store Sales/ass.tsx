import styles from "./ass.module.css";
import ass from "../../../assets/ass.jpeg";
import { useNavigate } from "react-router-dom";

export default function Ass() {
  const navigate = useNavigate();
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.navbar}>
          <p className={styles.navTitle} onClick={() => navigate("/")}>
            Pouyan sajadi
          </p>
          <p>About</p>
          <p>Portfolio</p>
        </nav>
        <div className={styles.projectContainer}>
          <div className={styles.projectTitle}>Analyzing Store Sales</div>
          <div className={styles.projectLink}>
            <a href="https://github.com/pouyan-sajadi/Store-Sales-Analysis">
              Github Link
            </a>
          </div>
          <div className={styles.projectDetails}>
            <div className={styles.projectImg}>
              <img src={ass} alt="project" />
            </div>
            <div className={styles.detailsText}>
              <p>
                • Conducted exploratory analysis to uncover sales trends and
                anomalies.
              </p>
              <p>
                • Created visualizations for a comprehensive understanding of
                data patterns.
              </p>
              <p>
                • Used hypothesis testing to validate assumptions and inform
                strategic decisions.
              </p>
              <p>
                • Contributed to evidence-based decision-making through
                statistical analysis
              </p>
              <h4>Keywords: </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
