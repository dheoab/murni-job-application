import { useState } from "react";

function App() {
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
                style={{
                  display: "flex",
                  height: "28px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "240px",
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
                type="text"
                style={{
                  display: "flex",
                  height: "28px",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "240px",
                }}
              ></input>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 0px",
                justifyContent: "flex-start",
                alignItems: "center",
                marginRight: "225px",
                marginTop: "5px",
              }}
            >
              <button
                type="submit"
                style={{
                  height: "28px",
                  width: "100px",
                }}
              >
                LOGIN
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: "10px",
              marginLeft: "490px",
            }}
          >
            <button
              style={{
                height: "28px",
                width: "100px",
                marginRight: "10px",
              }}
            >
              REGISTER
            </button>
            <button
              style={{
                height: "28px",
                width: "100px",
              }}
            >
              VIEW DATA
            </button>
          </div>
        </div>
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
                style={{
                  display: "flex",
                  height: "28px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "240px",
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
                type="text"
                style={{
                  display: "flex",
                  height: "28px",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "240px",
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
                type="text"
                style={{
                  display: "flex",
                  height: "28px",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "240px",
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
              <h1 style={{ margin: "8px 13px" }}>Age</h1>
              <input
                type="text"
                style={{
                  display: "flex",
                  height: "28px",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "240px",
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
                style={{
                  height: "28px",
                  width: "100px",
                  marginRight: "10px",
                }}
              >
                REGISTER
              </button>
              <button
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              position: "absolute",
              bottom: "260px",
              right: "145px",
            }}
          >
            {/* <button
              style={{
                height: "28px",
                width: "100px",
                marginRight: "10px",
              }}
            >
              REGISTER
            </button>
            <button
              style={{
                height: "28px",
                width: "100px",
              }}
            >
              VIEW DATA
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
