// import React from "react";
import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

// SERVICES THAT CALL OUR API ENDPOINTS

import Header from "./Header";
import Footer from "./Footer";

function Dashboard() {
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/profile/id");
  };

  const [profiles, setProfiles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/profile`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response.json);
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        // console.log(newData);
        setProfiles(actualData);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setProfiles(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-content">
      {/* <Header></Header> */}

      <h1 className="list-buddies">List of Buddies</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the fetching data - ${error}`}</div>
      )}
      <ul>
        {profiles &&
          profiles.map(
            ({
              id,
              first_name,
              interest,
              profilePicture,
              description,
              isConnected,
            }) => (
              //interest[0] === "Beaches" ? (
              <div>
                <div key={id}>
                  <h3>{first_name}</h3>
                  <img src={profilePicture} type="" alt="" />
                  <p>{description}</p>
                </div>
                <div>
                  {isConnected !== true ? (
                    <button onClick={() => id}>Connect</button>
                  ) : (
                    <button>Disconnect</button>
                  )}

                  <button onClick={navigateToProfile} data-id={id}>
                    Check profile
                  </button>
                </div>
              </div>
            )
            // ) : null
          )}
      </ul>
      <Footer></Footer>
    </div>
  );
  // let surveyData = JSON.stringify(sender.data, null, 3);
  // surveyData.foreach((el) => {});

  /* fetch("http://localhost:8080/todos")
  .then((res) => res.json())
  // .then((data) => console.log(data));
  .then((data) => {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    //for (let list of data) {

    data.forEach((element) => {
      out += ` <tr>
                <td>${element.name}</td>
                <td>${element.created}</td>
                <td>${element.due}</td>
                <td>${element.completed}</td>
              </tr>`;
      placeholder.innerHTML = out;
    });
  }); */

  //   useEffect(() => {
  //     async function getProfiles() {
  //       if (!profiles) {
  //         const response = await getAllProfiles();
  //         setProfiles(response);
  //       }
  //     }
  //     getProfiles();
  //   }, [profiles]);
  //   const renderProfile = (user) => {
  //     return (
  //       <li key={user._id}>
  //         <h3>
  //           {`${user.first_name}
  //             ${user.last_name}`}
  //         </h3>
  //         <p>{user.email}</p>
  //       </li>
  //     );
  //   };

  //   return (
  //     <div>
  //       <ul>
  //         {profiles && profiles.length > 0 ? (
  //           profiles.map((profile) => renderProfile(profile))
  //         ) : (
  //           <p>No profiles found</p>
  //         )}
  //       </ul>
  //     </div>
  //   );

  //   const [profiles, setProfiles] = useState(null);
  //   useEffect(() => {
  //     async function getProfiles() {
  //       if (!profiles) {
  //         const response = await getAllProfiles();
  //         setProfiles(response);
  //       }
  //     }
  //     getProfiles();
  //   }, [profiles]);
  //   const renderProfile = (user) => {
  //     return (
  //       <li key={user._id}>
  //         <h3>
  //           {`${user.first_name}
  //             ${user.last_name}`}
  //         </h3>
  //         <p>{user.email}</p>
  //       </li>
  //     );
  //   };
  //   return (
  //     <div>
  //       <ul>
  //         {profiles && profiles.length > 0 ? (
  //           profiles.map((profile) => renderProfile(profile))
  //         ) : (
  //           <p>No profiles found</p>
  //         )}
  //       </ul>
  //     </div>
  //   );
}

export default Dashboard;
