import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./Videos.css";

function Profile() {
  const navigate = useNavigate;

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const id = 2114;
    fetch(`http://localhost:8080/api/profile/6414854523914b87f22f6b88`)
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
    <div>
      <h1>Profile Buddy</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the fetching data - ${error}`}</div>
      )}
      <ul>
        {profile &&
          profile.map(
            ({ id, first_name, interest, profilePicture, description }) => (
              <div>
                <li key={id}>
                  <h3>{first_name}</h3>
                  <img src={profilePicture} />
                  <p>{description}</p>
                </li>
                <div>
                  <button>Connect</button>
                  <button onClick={navigateToDashboard}>
                    Back to Dashboard
                  </button>
                </div>
              </div>
            )
          )}
      </ul>
    </div>
  );
}

export default Profile;
