import styles from "./home.module.css";
import profilePic from "../../assets/image.png";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import education from "../../assets/education.png";
import exprience from "../../assets/experience.png";
import skill from "../../assets/skill.png";
import project from "../../assets/projects.png";
import link from "../../assets/link.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.navbar}>
          <p className={styles.navTitle}>Pouyan sajadi</p>
          <p>About</p>
          <p>Portfolio</p>
        </nav>
        <div className={styles.about}>
          <div className={styles.identity}>
            <img
              className={styles.profilePic}
              src={profilePic}
              alt="Profile Pic"
            />
            <p className={styles.identityTitle}>Pouyan sajadi</p>
            <p className={styles.identityMajor}>Data Scientist</p>
            <div className={styles.icon}>
              <div className={styles.mailDiv}>
                <a href="mailto:pouyan.sajadi@gmail.com">
                  <img src={mail} alt="" />
                </a>
              </div>
              <div className={styles.googleDiv}>
                <a href="https://scholar.google.com/citations?user=7McvDK0AAAAJ&hl=en">
                  <img src={google} alt="" />
                </a>
              </div>
              <div className={styles.githubDiv}>
                <a href="https://github.com/pouyan-sajadi">
                  <img src={github} alt="" />
                </a>
              </div>
              <div className={styles.linkDiv}>
                <a href="https://www.linkedin.com/in/pouyan-sajadi/">
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.aboutTextDiv}>
            <p className={styles.aboutText}>
              Every puzzle I’ve encountered—whether a tangled dataset or a
              complex engineering challenge—has fueled my passion for uncovering
              solutions. Growing up, I was the one staying up late, driven by
              the thrill of solving problems others had given up on. That same
              drive shapes who I am today. With a Master’s in engineering and
              three years of experience across diverse data roles, I’ve built a
              foundation that blends technical expertise with a deep curiosity
              for uncovering insights. From leading end-to-end data projects to
              translating complex problems into actionable outcomes, my
              background demonstrates a consistent ability to deliver results.
              For me, data is more than just numbers—it’s a tool for discovery
              and impact. Whether designing machine learning models,
              streamlining decision-making processes, or finding hidden
              efficiencies, I thrive on crafting solutions that connect the dots
              between raw information and meaningful change. My approach
              combines critical thinking, a hands-on mindset, and a drive to ask
              questions that lead to the right answers.
            </p>
            
            <div className={styles.educationSection}>
              <div className={styles.educationsTitleDiv}>
                <img src={education} alt="Education Icon" className={styles.educationIcon} />
                <h2 className={styles.educationsTitle}>Education</h2>
              </div>

              {/* Education Card 1 */}
              <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <h3 className={styles.universityTitle}>
                    Master of Science | Sep. 2022 – Aug. 2024
                  </h3>
                  <p className={styles.universitySubTitle}>
                    Simon Fraser University - Mechatronic Systems Engineering
                  </p>
                </div>
                <ul className={styles.universityDetails}>
                  <li>
                    Nominated for the prestigious Governor General's Gold Medal, awarded to
                    only two SFU graduate students with the most outstanding academic
                    records during thesis completion.
                  </li>
                  <li>
                    Scholarships: Research Assistant Scholarship, Special Graduate Entrance
                    Scholarship, Three Graduate Fellowship Scholarships
                  </li>
                  <li>
                    Related Courses: Machine Learning, Analysis of Experimental And
                    Observed Data, Methods Of Research
                  </li>
                </ul>
              </div>

              {/* Education Card 2 */}
              <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <h3 className={styles.universityTitle}>
                    Bachelor of Science | Sep. 2017 – Feb. 2022
                  </h3>
                  <p className={styles.universitySubTitle}>
                    Sharif University of Technology - Industrial Engineering
                  </p>
                </div>
                <ul className={styles.universityDetails}>
                  <li>GPA: 4.11/4.3</li>
                  <li>
                    Related Courses: Engineering Statistics, Probability, Artificial
                    Intelligence, Data Mining, Python Programming
                  </li>
                </ul>
              </div>
            </div>


            <div className={styles.experienceSection}>
  <div className={styles.experienceTitleDiv}>
    <img
      src={exprience}
      alt="Experience Icon"
      className={styles.experienceIcon}
    />
    <h2 className={styles.experienceTitle}>Selected Experience</h2>
  </div>

  {/* Experience Card 1 */}
  <div className={styles.experienceCard}>
    <h3 className={styles.jobTitle}>
      Applied ML Researcher | Simon Fraser University, Burnaby, BC
      <span className={styles.jobDate}>| Sep. 2022 – Aug. 2024</span>
    </h3>
    <ul className={styles.jobDetails}>
      <li>
        Developed scalable data pipelines for preprocessing and analyzing 3D
        printing data to drive model development and decision-making.
      </li>
      <li>
        Integrated physics into ML models, reducing dataset dependency and
        achieving below 3% errors.
      </li>
      <li>
        Enhanced real-time data processing for adaptive 3D printing workflows.{" "}
        <a
          href="https://scholar.google.ca/citations?user=7McvDK0AAAAJ&hl=en&authuser=2"
          className={styles.jobLink}
        >
          (Publications link)
        </a>
      </li>
    </ul>
  </div>

              {/* Experience Card 2 */}
              <div className={styles.experienceCard}>
                <h3 className={styles.jobTitle}>
                  Data Science Researcher | Sharif University of Technology, Tehran, Iran
                  <span className={styles.jobDate}>| Dec. 2020 – Mar. 2021</span>
                </h3>
                <ul className={styles.jobDetails}>
                  <li>
                    Performed EDA on urban accident and congestion data to identify key
                    patterns and trends.
                  </li>
                  <li>
                    Analyzed temporal trends to identify high-risk periods, supporting
                    targeted accident interventions.
                  </li>
                  <li>
                    Built a neural network-based solution for predicting accident risk with
                    96% precision on non-accidents and 45% recall on accidents.{" "}
                    <a
                      href="https://github.com/mahyaqorbani/Accident-Impact-Prediction-using-Deep-Convolutional-and-Recurrent-Neural-Networks"
                      className={styles.jobLink}
                    >
                      (GitHub link)
                    </a>
                  </li>
                </ul>
              </div>
            {/* Experience Card 3 */}
            <div className={styles.experienceCard}>
              <h3 className={styles.jobTitle}>
                Business Intelligence Developer | Sepehr Plastic Padideh, Tehran, Iran
                <span className={styles.jobDate}>| Oct. 2020 – Jun. 2021</span>
              </h3>
              <ul className={styles.jobDetails}>
                <li>
                  Led real-time dashboard development, converting large-scale data into actionable insights.
                </li>
                <li>
                  Collaborated on BI solutions, improving cross-departmental data use and efficiency by 25%.
                </li>
                <li>
                  Contributed to the design of data models and engineered an integrated structure, resulting in enhanced cross-functional collaboration and improved data accessibility.
                </li>
              </ul>
            </div>

            {/* Experience Card 4 */}
            <div className={styles.experienceCard}>
              <h3 className={styles.jobTitle}>
                Data Scientist | Fixshow, Tehran, Iran
                <span className={styles.jobDate}>| Apr. 2019 – Dec. 2019</span>
              </h3>
              <ul className={styles.jobDetails}>
                <li>
                  Wrote SQL queries to extract data, enhancing inputs for the recommendation system and increasing campaign response rates by 14%.
                </li>
                <li>
                  Engineered features for marketing KPIs, improving campaign planning effectiveness by 12%.
                </li>
                <li>
                  Assisted in A/B testing for marketing strategies and optimizing customer engagement.
                </li>
              </ul>
            </div>

            {/* Experience Card 5 */}
            <div className={styles.experienceCard}>
              <h3 className={styles.jobTitle}>
                Junior Data Analyst | Nethami, Tehran, Iran
                <span className={styles.jobDate}>| Feb. 2018 – Jan. 2019</span>
              </h3>
              <ul className={styles.jobDetails}>
                <li>
                  Generated descriptive analytics reports to help small business clients understand key performance indicators.
                </li>
                <li>
                  Assisted in creating simple visual presentations using data visualizations for small business clients.
                </li>
              </ul>
            </div>

              
            <div className={styles.skillsSection}>
  <div className={styles.skillsTitleDiv}>
    <img src={skill} alt="Skills Icon" className={styles.skillsIcon} />
    <h2 className={styles.skillsTitle}>Skills</h2>
  </div>

  <div className={styles.skillsGrid}>
    {/* Column 1 */}
    <div className={styles.skillsColumn}>
      <h3 className={styles.skillsCategory}>Tools & Languages</h3>
      <ul className={styles.skillsList}>
        <li>Python (Pandas, Numpy, Matplotlib, Scikit-Learn, TensorFlow, PyTorch)</li>
        <li>SQL</li>
        <li>Git</li>
        <li>R</li>
        <li>Power BI</li>
        <li>Tableau</li>
        <li>AWS Lambda</li>
      </ul>
    </div>

    {/* Column 2 */}
    <div className={styles.skillsColumn}>
      <h3 className={styles.skillsCategory}>Data Processing & Analysis</h3>
      <ul className={styles.skillsList}>
        <li>Data Cleaning</li>
        <li>Feature Selection & Engineering</li>
        <li>Handling Missing Data</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Time Series Analysis</li>
        <li>Hypothesis Testing</li>
      </ul>
    </div>

    {/* Column 3 */}
    <div className={styles.skillsColumn}>
      <h3 className={styles.skillsCategory}>Machine Learning</h3>
      <ul className={styles.skillsList}>
        <li>Building ML Models</li>
        <li>Deep Learning (TensorFlow, PyTorch)</li>
        <li>Association Rule Mining</li>
        <li>A/B Testing</li>
        <li>Statistical Modeling</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div className={styles.skillsColumn}>
      <h3 className={styles.skillsCategory}>Additional Skills</h3>
      <ul className={styles.skillsList}>
        <li>Data Visualization & Reporting</li>
        <li>Presenting Insights</li>
        <li>Process Mining</li>
        <li>Requirements Gathering</li>
      </ul>
    </div>
  </div>
</div>

            </div>
            <div className={styles.educationsTitleDiv}>
              <img src={project} alt="" />
              <p className={styles.educationsTitle}>Projects</p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle} onClick={()=> navigate('/AnalyzingStoreSales')}>Analyzing Store Sales</p>
              <p className={styles.universityDetails}>
                • Conducted exploratory analysis to uncover sales trends and
                anomalies.
              </p>
              <p className={styles.universityDetails}>
                • Created visualizations for a comprehensive understanding of
                data patterns.
              </p>
              <p className={styles.universityDetails}>
                • Used hypothesis testing to validate assumptions and inform
                strategic decisions.
              </p>
              <p className={styles.universityDetails}>
                • Contributed to evidence-based decision-making through
                statistical analysis
              </p>
              <p className={styles.universityDetails}>
                <a href="https://github.com/pouyan-sajadi/Store-Sales-Analysis">
                  <img style={{ width: "30px" }} src={link} alt="" />
                </a>
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Stock Prediction and Algorithmic Trading
              </p>
              <p className={styles.universityDetails}>
                • Developed a predictive model for stock trading on the NYSE
                communication service sector.
              </p>
              <p className={styles.universityDetails}>
                • Implemented a Long Short-Term Memory (LSTM) neural network for
                next-day trading signal prediction.
              </p>
              <p className={styles.universityDetails}>
                • Proposed a novel trading strategy based on piecewise linear
                regression (PLR) and achieved automated profitable trading.
              </p>
              <p className={styles.universityDetails}>
                • Yielded a remarkable 92% profit, approximately three times
                higher than the sector's average return with a buy-and-hold
                strategy (31%).
              </p>
              <p className={styles.universityDetails}>
                <a href="https://github.com/pouyan-sajadi/StockPrediction-AlgorithmicTrading">
                  <img style={{ width: "30px" }} src={link} alt="" />
                </a>
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Temperature Modeling Using Physics-informed Neural Networks
              </p>
              <p className={styles.universityDetails}>
                • Developed machine learning models informed by physics,
                reducing the dependency on extensive data by leveraging
                domain-specific knowledge.
              </p>
              <p className={styles.universityDetails}>
                • Formulated and implemented a real-time modeling framework
                utilizing neural networks, integrating physics principles as
                prior knowledge for improved accuracy in additive manufacturing.
              </p>
              <p className={styles.universityDetails}>
                • Overcame the limitations of both physics-based and data-driven
                models, achieving validation errors of less than 3%.
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>Urban Accident Analysis</p>
              <p className={styles.universityDetails}>
                • Conducted in-depth Exploratory Data Analysis to identify
                patterns, correlations, and trends in urban accident and
                congestion data.
              </p>
              <p className={styles.universityDetails}>
                • Analyzed temporal trends in accident data to understand
                patterns related to specific times of day, days of the week, and
                seasons.
              </p>
              <p className={styles.universityDetails}>
                • Introduced a novel impact feature, enhancing urban planning
                and safety measures.
              </p>

              <p className={styles.universityDetails}>
                <a href="https://github.com/mahyaqorbani/Accident-Impact-Prediction-using-Deep-Convolutional-and-Recurrent-Neural-Networks">
                  <img style={{ width: "30px" }} src={link} alt="" />
                </a>
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                News Article Summarization App
              </p>
              <p className={styles.universityDetails}>
                • Designed an end-to-end pipeline using Streamlit to create an
                interactive app for real-time news summarization, leveraging
                NewsAPI for fetching articles.
              </p>
              <p className={styles.universityDetails}>
                • Implemented Hugging Face Transformers for text summarization,
                integrating state-of-the-art NLP techniques into the workflow.
              </p>
              <p className={styles.universityDetails}>
                • Enhanced text preprocessing with TextBlob for sentiment
                analysis, improving overall summarization quality.
              </p>
              <p className={styles.universityDetails}>
                • Focused on modular and scalable architecture with plans to
                deploy via FastAPI and containerization for production
                readiness.
              </p>

              <p className={styles.universityDetails}>
                <a href="https://github.com/pouyan-sajadi/News-article-summarization">
                  <img style={{ width: "30px" }} src={link} alt="" />
                </a>
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>GPT-2 Fine-Tuning</p>
              <p className={styles.universityDetails}>
                • Fine-tuned OpenAI’s GPT-2 on domain-specific datasets,
                leveraging nanoGPT for efficient customization of language
                models.
              </p>
              <p className={styles.universityDetails}>
                • Utilized multi-GPU distributed training on Compute Canada
                infrastructure to optimize performance and scalability.
              </p>
              <p className={styles.universityDetails}>
                • Focused on improving text generation by experimenting with
                model hyperparameters and transfer learning techniques.
              </p>
              <p className={styles.universityDetails}>
                • Practiced model deployment in SageMaker, showcasing skills in
                managing production-grade machine learning workflows.
              </p>

              <p className={styles.universityDetails}>
                <a href="https://github.com/pouyan-sajadi/nanoGPT">
                  <img style={{ width: "30px" }} src={link} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
