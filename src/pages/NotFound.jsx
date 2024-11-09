import styles from "../styles/NotFound.module.css";

let NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div>
        <h3>404</h3>
        <h1>Page Not Found</h1>
        <p>
          Sorry, The page you requested does not exists.{" "}
          <a href="/">Move To Homepage</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
