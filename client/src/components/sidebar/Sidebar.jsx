import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Sidebar() {

  return (
    <>
      
      <div className="Container">
        <div className="Head"><h3>Your Details</h3></div>
        <div className="DetailsPart">
          <ul className="List">
            <li className="ListItems">username : </li>
            <li className="ListItems">Email : </li>
            <li className="ListItems">Interests :</li>
            <li className="ListItems">Bio : </li>
          </ul>
          <button className="EditProfile">Edit Profile</button>
        </div>
      </div>
      </>
  );
}