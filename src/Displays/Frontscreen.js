import "./style.css";
import Displ from "./Displ";

import React, { useState } from "react";

export default function Frontscreen() {
  const [show, setshow] = useState(false);
  const [size, setsize] = useState(1);
  const [file, setfile] = useState("");
  function called() {
    setsize(0);
    setshow(false);
    window.location.reload();
  }
  return !show ? (
    <div className="upperdiv">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <h1>3D VISUALISATION</h1>
      <table border="1" className="table">
        <tr>
          <td>
            <div className="toprow">
              <input type="file" name="file" id="file" className="inputfile" />
              <label for="file">
                <i class="fa fa-cloud-upload" style={{ fontSize: "48px" }}></i>
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <button
                className="filebutton filebutton1"
                type="button"
                onClick={() => {
                  setshow(true);
                  setsize(1);
                  setfile("P1.glb");
                }}
              >
                P1.glb
              </button>
              <button
                className="filebutton filebutton1"
                type="button"
                onClick={() => {
                  setshow(true);
                  setsize(1);
                  setfile("P2.glb");
                }}
              >
                P2.glb
              </button>
              <button
                className="filebutton filebutton1"
                type="button"
                onClick={() => {
                  setshow(true);
                  setsize(1);
                  setfile("P3.glb");
                }}
              >
                P3.glb
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  ) : (
    <div className="backdiv">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <button className="backbutton" type="button" onClick={called}>
        <i class="fa fa-close" style={{ fontSize: "100%" }}></i>
      </button>

      <Displ file={file} size={size} />
    </div>
  );
}
