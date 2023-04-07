import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate;

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connected, setConnected] = useState();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:8080/api/profile/${id}`)
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

  function connect(id) {
    profile.map((item) => {
      // console.log(profilesRequest);
      if (item.id === id && item.status === true) {
        console.log(item);
        console.log(item.status);
        item.status = false;
        setConnected(item);
      } else if (item.id === id && item.status === false) {
        item.status = true;
        setConnected(item);
      }

      return item;
    });
  }

  return (
    <div className="profile-content">
      <div>
        {" "}
        <Header></Header>
      </div>
      <div className="profile-desc">
        <h1 className="h1-profile-buddy">Profile Buddy</h1>
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
                interest,
                profilePicture,
                description,
                isConnected,
                typeOfTraveler,
                currentLocation,
                NextTraveldates,
                age,
                status,
              }) => (
                <div>
                  <div key={id}>
                    <div className="profile-cont">
                      <div className="profile-names">
                        <h3>{first_name}</h3>
                        <p1>{typeOfTraveler}</p1>
                        <h4>{age}</h4>
                      </div>

                      <img
                        src={profilePicture}
                        alt=""
                        className="profile-img"
                      />
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
                  <div>
                    {status === false ? (
                      <button onClick={() => connect(id)} className="btn">
                        Connect
                      </button>
                    ) : (
                      <button onClick={() => connect(id)} className="btn-d">
                        Disconnect
                      </button>
                    )}
                    {/* <button onClick={navigateToDashboard}>
                      Back to Dashboard
                    </button> */}
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
