import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import "./PopUp.css";

function PopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const [profilesRequest, setProfilesRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connect, setConnect] = useState();
  const [dconnect, setdConnect] = useState();
  const [reject, setReject] = useState([]);

  function disconConnection(id) {
    profilesRequest.map((item) => {
      // console.log(profilesRequest);
      if (item.id === id && item.status === true) {
        console.log(item);
        console.log(item.status);
        item.status = false;
        setConnect(item);
      } else if (item.id === id && item.status === false) {
        item.status = true;
        setConnect(item);
      }

      return item;
    });
  }

  // function connection(id) {
  //   profilesRequest.map((items) => {
  //     // console.log(profilesRequest);
  //     if (items.id === id) {
  //       console.log(items);
  //       console.log(items.status);
  //       items.status = true;

  //       setdConnect(items);
  //     }

  //     return items;
  //   });
  // }

  function rejectConnection(id) {
    const newRemov = [];
    profilesRequest.filter((item) => {
      if (item.id === id) {
        // console.log(id);
        // console.log(item.id);
        profilesRequest.shift(item);
      }
      return item;
    });

    setReject(newRemov);
  }

  useEffect(() => {
    fetch(`http://localhost:8080/api/profileRequest`)
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

        setProfilesRequest(actualData);

        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setProfilesRequest(null);
      })
      .finally(() => {
        setLoading(false);
      });
    //});
  }, []);

  return (
    <div className="popup">
      <button onClick={() => setIsOpen(true)} className="btn">
        Notifications{" "}
      </button>
      <div className="popup-content">
        {" "}
        <ReactModal
          isOpen={isOpen}
          contentLabel="Example Modal"
          onRequestClose={() => setIsOpen(false)}
        >
          <div>
            <h1>Travel Buddy Request</h1>
            {loading && <div>A moment please...</div>}
            {error && (
              <div>{`There is a problem fetching the fetching data - ${error}`}</div>
            )}
            <ul>
              {profilesRequest &&
                profilesRequest.map(
                  ({ id, first_name, status, profilepicture }) => (
                    <div>
                      <div key={id}>
                        <div className="profileRequest">
                          <img
                            src={profilepicture}
                            alt=""
                            className="myprofileimg"
                          />
                          <h3 className="first_Name_pop">{first_name}</h3>
                        </div>
                        <div className="div-rej">
                          {status === false ? (
                            <button
                              onClick={() => disconConnection(id)}
                              className="btn-d"
                            >
                              {" "}
                              Disconnect
                            </button>
                          ) : (
                            <button
                              onClick={() => disconConnection(id)}
                              className="btn"
                            >
                              {" "}
                              Connect{" "}
                            </button>
                          )}

                          <button
                            onClick={() => rejectConnection(id)}
                            className="btn-r"
                          >
                            {" "}
                            Reject{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </ul>
          </div>
        </ReactModal>
      </div>
    </div>
  );
}

export default PopUp;
