// import React from "react";
import React, { useState, useEffect } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { useNavigate, useParams } from "react-router-dom";
import "./Dashboard.css";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "../services/profileService";
import Header from "./Header";
import Footer from "./Footer";

const json = {
  title: "Welcome to travel buddy finder",
  description:
    "This survey allows you to get result of your buddy finder with more precision.",
  logoPosition: "right",
  completedHtml: "<h3>Thank you for completing the survey</h3>",
  // <div style="margin: 40px 0; width:100%"><button style="margin: auto" class="v2-class---button v2-class---button--primary v2-class---button--large" onclick="reRunSurvey();"><span class="v2-class---button__text v2-class---button__text--secondary v2-class---button__text--large">Create Another Order</span></button>
  // </div>',
  pages: [
    {
      name: "overview",
      elements: [
        {
          type: "rating",
          name: "typeOfTraveler",
          title: "What type of traveler are you ?",
          isRequired: true,
          rateMax: 7,
          minRateDescription: "Seasonal traveler",
          maxRateDescription: "frequent traveler",
        },
        {
          type: "radiogroup",
          name: "interest",
          title: "What is your interest",
          isRequired: true,
          choices: [
            {
              value: "Hiking",
              text: "Hiking",
            },
            {
              value: "Beaches",
              text: "Beaches",
            },
            {
              value: "Art and history",
              text: "Art and History",
            },
            {
              value: "city tour",
              text: "City tour",
            },
            {
              value: "Country side",
              text: "Country side",
            },
            {
              value: "all-of-the-above",
              text: "All of the Above",
            },
            {
              value: "none-of-the-above",
              text: "None of the above",
            },
          ],
        },
      ],
      title: "Buddy finder",
    },
    {
      name: "property-detailsBuddy finder",
      elements: [
        // {
        //   type: "dropdown",
        //   name: "currentLocation",
        //   title: "Country of current location",
        //   isRequired: true,
        //   choicesByUrl: {
        //     url: "https://surveyjs.io/api/CountriesExample",
        //   },
        // },
        {
          type: "dropdown",
          name: "nextLocation",
          title: "Country of next location",
          isRequired: true,
          choicesByUrl: {
            url: "https://surveyjs.io/api/CountriesExample",
          },
        },
        // {
        //   type: "boolean",
        //   name: "currentLocation",
        //   title: "Do you want a travel buddy based on your current location ?",
        //   isRequired: true,
        // },
        // {
        //   type: "boolean",
        //   name: "nextLocation",
        //   startWithNewLine: false,
        //   title: "Do you want a travel buddy based on your next location ?",
        //   isRequired: true,
        // },
      ],
      title: "Buddy finder",
    },
    {
      name: "page1",
      elements: [
        {
          type: "dropdown",
          name: "religion",
          title: "Your Religion",
          choices: [
            {
              value: "christian",
              text: "Christian",
            },
            {
              value: "muslim",
              text: "Muslim",
            },
            {
              value: "juif",
              text: "Juif",
            },
            {
              value: "none-of-the-above",
              text: "None of the Above",
            },
            {
              value: "prefere-not-to-say",
              text: "prefere not to say",
            },
          ],
        },
      ],
      title: "Buddy finder",
    },
    {
      name: "page2",
    },
  ],
  showQuestionNumbers: "off",
  completeText: "Submit",
  widthMode: "static",
  width: "1200px",
};

function Dashboard() {
  // function connectProfile(id) {}

  const [profiles, setProfiles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [surveyData, setSurveyData] = useState();
  const [connection, setConnection] = useState();
  // const { id } = useParams();
  const survey = new Model(json);

  const navigate = useNavigate();

  // console.log(id);
  const navigateToProfile = (event) => {
    console.log(event);
    const id = event.target.dataset["id"];
    navigate(`/profile/${id}`);
  };

  useEffect(() => {
    survey.onComplete.add((sender, options) => {
      let surveydatas = JSON.stringify(sender.data, null, 3);
      let surveydataJson = JSON.parse(surveydatas);

      ///////
      const newData = surveydataJson.religion;
      console.log(newData);
      console.log(surveydataJson);
      setSurveyData(surveydataJson);
      console.log(surveyData);

      fetch(`http://localhost:8080/api/buddies?q=${newData}`)
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
    });
  }, []);

  function connect(id) {
    profiles.map((item) => {
      // console.log(profilesRequest);
      if (item.id === id && item.status === true) {
        console.log(item);
        console.log(item.status);
        item.status = false;
        setConnection(item);
      } else if (item.id === id && item.status === false) {
        item.status = true;
        setConnection(item);
      }

      return item;
    });
  }

  return (
    <div className="dashboard-content">
      <div className="dvSurvey">
        {" "}
        <Survey model={survey} className="surveyjs" />
      </div>

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
              status,
            }) => (
              <div>
                <div key={id} className="dash-info">
                  <img src={profilePicture} alt="" className="dash-img" />
                  <h3>{first_name}</h3>
                  <p>{description}</p>
                </div>
                <div className="btn-dash">
                  {status === false ? (
                    <button onClick={() => connect(id)} className="btn">
                      Connect
                    </button>
                  ) : (
                    <button onClick={() => connect(id)} className="btn-d">
                      Disconnect
                    </button>
                  )}

                  <button
                    onClick={navigateToProfile}
                    data-id={id}
                    className="btn-c"
                  >
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
