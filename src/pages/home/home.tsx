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

export default function Home() {
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
              AA Every puzzle I’ve encountered—whether a tangled dataset or a
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
            <div className={styles.educationsTitleDiv}>
              <img src={education} alt="" />
              <p className={styles.educationsTitle}>Education</p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Master of Science | Sep. 2022 – Aug. 2024 | Simon Fraser
                University
              </p>
              <p className={styles.universitySubTitle}>
                Mechatronic Systems Engineering{" "}
              </p>
              <p className={styles.universityDetails}>
                {" "}
                • Nominated for the prestigious Governor General's Gold Medal,
                awarded to only two SFU graduate students with the most
                outstanding academic records during thesis completion.
              </p>
              <p className={styles.universityDetails}>
                {" "}
                • Scholarships: Research Assistant Scholarship, Special Graduate
                Entrance Scholarship, Three Graduate Fellowship Scholarships
              </p>
              <p className={styles.universityDetails}>
                {" "}
                • Related Courses: Machine Learning, Analysis of Experimental
                And Observed Data, Methods Of Research
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Bachelor of Science | Sep. 2017 – Feb. 2022 | Sharif University
                of Technology
              </p>
              <p className={styles.universitySubTitle}>
                Industrial Engineering
              </p>
              <p className={styles.universityDetails}>• GPA: 4.11/4.3</p>
              <p className={styles.universityDetails}>
                • Related Courses: Engineering Statistics, Probability,
                Artificial Intelligence, Data Mining, Python Programming
              </p>
            </div>
            <div className={styles.educationsTitleDiv}>
              <img src={exprience} alt="" />
              <p className={styles.educationsTitle}>Selected Exprince</p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Applied ML Researcher | Simon Fraser University, Burnaby, BC|
                September 2022 – August 2024
              </p>
              <p className={styles.universityDetails}>
                • Developed scalable data pipelines for preprocessing and
                analyzing 3D printing data to drive model development and
                decision-making.
              </p>
              <p className={styles.universityDetails}>
                • Integrated physics into ML models, reducing dataset dependency
                and achieving below 3% errors.
              </p>
              <p className={styles.universityDetails}>
                • Enhanced real-time data processing for adaptive 3D printing
                workflows.{" "}
                <a href="https://scholar.google.ca/citations?user=7McvDK0AAAAJ&hl=en&authuser=2">
                  (Publications link)
                </a>
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Data Science Researcher | Sharif University of Technology,
                Tehran, Iran | December 2020 – March 2021
              </p>
              <p className={styles.universityDetails}>
                • Performed EDA on urban accident and congestion data to
                identify key patterns and trends.
              </p>
              <p className={styles.universityDetails}>
                • Analyzed temporal trends to identify high-risk periods,
                supporting targeted accident interventions.
              </p>
              <p className={styles.universityDetails}>
                • Built a neural network-based solution for predicting accident
                risk with 96% precision on non-accidents and 45% recall on
                accidents.{" "}
                <a href="https://github.com/mahyaqorbani/Accident-Impact-Prediction-using-Deep-Convolutional-and-Recurrent-Neural-Networks">
                  (GitHub link)
                </a>
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Business Intelligence Developer | Sepehr Plastic Padideh,
                Tehran, Iran | October 2020 – June 2021
              </p>
              <p className={styles.universityDetails}>
                • Led real-time dashboard development, converting large-scale
                data into actionable insights.
              </p>
              <p className={styles.universityDetails}>
                • Collaborated on BI solutions, improving cross-departmental
                data use and efficiency by 25%.
              </p>
              <p className={styles.universityDetails}>
                • Contributed to the design of data models and engineered an
                integrated structure, resulting in enhanced cross-functional
                collaboration and improved data accessibility.
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Data Scientist Fixshow, Tehran, Iran | April 2019 – December
                2019
              </p>
              <p className={styles.universityDetails}>
                • Wrote SQL queries to extract data, enhancing inputs for the
                recommendation system and increasing campaign response rates by
                14%.
              </p>
              <p className={styles.universityDetails}>
                • Engineered features for marketing KPIs, improving campaign
                planning effectiveness by 12%.
              </p>
              <p className={styles.universityDetails}>
                • Assisted in A/B testing for marketing strategies and
                optimizing customer engagement.
              </p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                Junior Data Analyst Nethami, Tehran, Iran | February 2018 –
                January 2019
              </p>
              <p className={styles.universityDetails}>
                • Generated descriptive analytics reports to help small business
                clients understand key performance indicators.
              </p>
              <p className={styles.universityDetails}>
                • Assisted in creating simple visual presentations using data
                visualizations for small business clients
              </p>
            </div>
            <div className={styles.educationsTitleDiv}>
              <img src={skill} alt="" />
              <p className={styles.educationsTitle}>Skills</p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>
                • Tools & Languages: Proficient in Python (Pandas, Numpy,
                Matplotlib, Scikit-Learn, Tensorflow, Pytorch), Sql, And Git.
                Experienced With R, Power Bi, Tableau, And Aws Lambda.
              </p>
              <p className={styles.universityTitle}>
                • Data Processing & Analysis: Expertise in Data Cleaning,
                Feature Selection, Feature Engineering, Handling Missing Data,
                And Eda. Strong In Time Series Analysis and Hypothesis Testing.
              </p>
              <p className={styles.universityTitle}>
                • Machine Learning: Skilled In Building ML Models, Deep Learning
                (Tensorflow, Pytorch), And Association Rule Mining. Familiar
                With A/B Testing and Statistical Modeling.
              </p>
              <p className={styles.universityTitle}>
                • Additional Skills: Experienced In Data Visualization,
                Reporting, And Presenting Insights. Familiar With Process Mining
                and Requirements Gathering.
              </p>
            </div>
            <div className={styles.educationsTitleDiv}>
              <img src={project} alt="" />
              <p className={styles.educationsTitle}>Projects</p>
            </div>
            <div className={styles.universityTitleDiv}>
              <p className={styles.universityTitle}>Analyzing Store Sales</p>
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
