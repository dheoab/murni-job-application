import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000";

function App() {
  const [page, setPage] = useState("login");
  const [loginData, setLoginData] = useState({
    loginUsername: "",
    loginPassword: "",
  });
  const [users, setUsers] = useState([]);
  const [registerData, setRegisterData] = useState({
    registerUsername: "",
    registerPassword: "",
    confirmPassword: "",
    registerAge: "",
  });
  const [loginStatus, setLoginStatus] = useState(false);

  const toRegisterPage = (event) => {
    event.preventDefault();
    setPage("register");
  };

  const toLoginPage = (event) => {
    event.preventDefault();
    setPage("login");
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const registerHandler = async (event) => {
    event.preventDefault();

    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const submitLoginHandler = async (event) => {
    event.preventDefault();
    // console.log(loginData);
    try {
      const { data } = await axios.post(`${baseURL}/login`, {
        username: loginData.loginUsername,
        password: loginData.loginPassword,
      });
      let response = await axios.get(`${baseURL}/users`);

      const usersData = response.data.users;

      console.log(usersData, "ini users");

      setUsers(usersData);
      setLoginStatus(true);
      alert(`Login Sukses`);
      // setPage("usersData");
    } catch (error) {
      // console.log(error);
      alert(`${error.response.data.error}`);
    }
  };

  const toUsersList = (event) => {
    event.preventDefault();

    console.log(users);
    setPage("usersData");
  };

  const submitRegisterHandler = async (event) => {
    event.preventDefault();
    // console.log(registerData);

    try {
      const { data } = await axios.post(`${baseURL}/register`, {
        username: registerData.registerUsername,
        password: registerData.registerPassword,
        confirmPassword: registerData.confirmPassword,
        age: registerData.registerAge,
      });

      console.log(data);
      alert(`Register Sukses`);
    } catch (error) {
      // console.log(error);
      alert(`${error.response.data.error}`);
    }
  };

  const loginPage = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "860px",
            height: "460px",
            backgroundColor: "#f0f0f0",
            border: "6px solid black",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              marginBottom: "1px",
            }}
          >
            LOGIN PAGE
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "700px",
              height: "200px",
              backgroundColor: "#92b5d4",
              border: "2px dashed black",
              // marginBottom: "50px",
            }}
          >
            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "0px 0px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginRight: "200px",
                  // position: "absolute",
                }}
              >
                <h1 style={{ margin: "8px 10px" }}>Username</h1>
                <input
                  type="text"
                  name="loginUsername"
                  onChange={loginHandler}
                  style={{
                    display: "flex",
                    height: "28px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "240px",
                    fontSize: "16px",
                  }}
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "0px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "200px",
                  // position: "absolute",
                }}
              >
                <h1 style={{ margin: "8px 13px" }}>Password</h1>
                <input
                  type="password"
                  name="loginPassword"
                  onChange={loginHandler}
                  style={{
                    display: "flex",
                    height: "28px",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "240px",
                    fontSize: "16px",
                  }}
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "0px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "225px",
                  marginTop: "5px",
                }}
              >
                <button
                  onClick={submitLoginHandler}
                  type="submit"
                  style={{
                    height: "28px",
                    width: "100px",
                  }}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: "10px",
              marginLeft: "380px",
            }}
          >
            <button
              style={{
                height: "28px",
                width: "100px",
                marginRight: "10px",
              }}
              onClick={toRegisterPage}
            >
              REGISTER
            </button>

            <button
              style={{
                height: "28px",
                width: "100px",
                marginRight: "10px",
              }}
            >
              VIEW DATA
            </button>
            {loginStatus ? (
              <button
                onClick={toUsersList}
                style={{
                  height: "28px",
                  width: "100px",
                }}
              >
                VIEW USERS
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const registerPage = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "860px",
              height: "460px",
              backgroundColor: "#f0f0f0",
              border: "6px solid black",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1
              style={{
                marginBottom: "1px",
              }}
            >
              REGISTER PAGE
            </h1>
            <form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "700px",
                  height: "300px",
                  backgroundColor: "#92b5d4",
                  border: "2px dashed black",
                  paddingLeft: "50px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "0px 0px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "70%",
                    // marginRight: "200px",
                    // position: "absolute",
                  }}
                >
                  <h1 style={{ margin: "8px 10px" }}>Username</h1>
                  <input
                    type="text"
                    name="registerUsername"
                    onChange={registerHandler}
                    style={{
                      display: "flex",
                      height: "28px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "240px",
                      fontSize: "16px",
                    }}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "0px 0px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "70%",
                    // marginRight: "200px",
                    // position: "absolute",
                  }}
                >
                  <h1 style={{ margin: "8px 13px" }}>Password</h1>
                  <input
                    name="registerPassword"
                    type="password"
                    onChange={registerHandler}
                    style={{
                      display: "flex",
                      height: "28px",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "240px",
                      fontSize: "16px",
                    }}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "0px 0px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "70%",
                    // marginRight: "200px",
                    // position: "absolute",
                  }}
                >
                  <h1 style={{ margin: "8px 13px" }}>Confirm Password</h1>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={registerHandler}
                    style={{
                      display: "flex",
                      height: "28px",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "240px",
                      fontSize: "16px",
                    }}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "0px 0px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "70%",
                  }}
                >
                  <h1 style={{ margin: "8px 13px" }}>Age</h1>
                  <input
                    type="number"
                    name="registerAge"
                    onChange={registerHandler}
                    style={{
                      display: "flex",
                      height: "28px",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "240px",
                      fontSize: "16px",
                    }}
                  ></input>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "0px 0px",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: "100%",
                  }}
                >
                  <button
                    type="submit"
                    onClick={submitRegisterHandler}
                    style={{
                      height: "28px",
                      width: "100px",
                      marginRight: "10px",
                    }}
                  >
                    REGISTER
                  </button>
                  <button
                    onClick={toLoginPage}
                    type="submit"
                    style={{
                      height: "28px",
                      width: "100px",
                    }}
                  >
                    BACK TO LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  const readAllUser = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "860px",
            minHeight: "460px",
            backgroundColor: "#f0f0f0",
            border: "6px solid black",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              marginBottom: "1px",
            }}
          >
            Users Data
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "700px",
              height: "200px",
              backgroundColor: "#92b5d4",
              border: "2px dashed black",
            }}
          >
            <table border={1} style={{ backgroundColor: "white" }}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>username</th>
                  <th>age</th>
                  <th>createdAt</th>
                  <th>updatedAt</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.age}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setPage("login")}>Back To Login</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {page === "login" ? (
        loginPage()
      ) : page === "register" ? (
        registerPage()
      ) : page === "view" ? (
        dataPage()
      ) : page === "usersData" ? (
        readAllUser()
      ) : (
        <div>Default page</div>
      )}
    </>
  );
}

export default App;
