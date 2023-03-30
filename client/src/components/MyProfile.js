import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

import "./MyProfile.css";
import MyprofileImage from "../images/nanri.JPG";

import MyProfileHeader from "./MyProfleHeader";

function Profile() {
  const navigate = useNavigate;

  //   const navigateToDashboard = () => {
  //     navigate("/Dashboard");
  //   };
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const { id } = useParams();
  useEffect(() => {
    // console.log(id);
    fetch(`http://localhost:8080/api/profile/2119`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response.json);
        return response.json();
      })

      .then((profileD) => {
        console.log(profileD);
        let nepro = [profileD];
        console.log(nepro);
        setProfile(nepro);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setProfile(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="profile-content">
      <div>
        <MyProfileHeader />
      </div>

      <div className="profile-desc">
        <h1 className="myProfile">My Profile</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the fetching data - ${error}`}</div>
        )}
        <ul>
          {profile &&
            profile.map(
              ({
                id,
                first_name,
                description,
                currentLocation,
                NextTraveldates,
                typeOfTraveler,
                age,
              }) => (
                <div>
                  <div key={id}>
                    <div className="myProfileImgContent">
                      <div className="profile-names">
                        <h3>{first_name}</h3>
                        <p1>{typeOfTraveler}</p1>
                        <h4>{age}</h4>
                      </div>
                      <img
                        src={MyprofileImage}
                        alt=""
                        className="myprofilimg"
                      />
                    </div>
                  </div>
                  <div className="infos">
                    <h3> Description</h3>

                    <p1 className="p1-desc">{description}</p1>
                    <h3>Current Location</h3>
                    <p2>{currentLocation}</p2>
                    <h3> Next travel date</h3>
                    <p3>{NextTraveldates}</p3>
                  </div>
                </div>
              )
            )}
        </ul>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Profile;
