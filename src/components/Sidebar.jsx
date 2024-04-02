
import Link from "next/link";
import styles from "./Sidebar.module.css"; // Assuming CSS Modules

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/add">Add Project</Link>
          </li>
          <li>
            <Link href="/list">Project List</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
