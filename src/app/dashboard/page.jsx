"use client";
import axios from "axios";
import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((res) => setProjectsData(res.data));
  }, []);
console.log(projectsData);
  return (
    <>
      <div className={styles.dashboard_section}>
        <div className={styles.dashboard_container}>
          <div className={styles.dashboard_btn_container}>
            <button>Project List</button>
            <button>Add New Project</button>
          </div>
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Serial
                  </th>
                  <th scope="col" class="py-3 px-6">
                    title
                  </th>
                  <th scope="col" class="py-3 px-6">
                    description
                  </th>
                  <th scope="col" class="py-3 px-6">
                    image
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectsData.map((item,i) => (
                  <tr
                    key={item._id}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="py-4 px-6">{i+1}</td>
                    <td class="py-4 px-6">{item.title}</td>
                    <td class="py-4 px-6">{item.description}</td>
                    <td class="py-4 px-6">{item.image}</td>
                    <td class="py-4 px-6">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
