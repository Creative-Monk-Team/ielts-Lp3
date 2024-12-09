import styles from "../styles/NotFound.module.css";
import { Link } from "react-router-dom";

let NotFound = () => {
    return (
      <>
        <section className={styles.page_404}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className={styles.four_zero_four_bg}>
                <h1 className="text-center">404</h1>
              </div>
              <div className={styles.contant_box_404}>
                <h3 className="h2">It seems you've wandered off.</h3>
                <p>The page you're seeking can't be found.</p>
                <Link to="/" className={styles.link_404}>Head back to the Homepage.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}

export default NotFound;