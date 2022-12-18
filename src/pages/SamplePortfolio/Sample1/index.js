
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Contact1 from "../../../components/Porfolio1/Contact1";

const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];

const ItemsContainer = styled.div`
  color: black;
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  border: 4px solid orange;
`;

const ExampleDiv = styled.div`
  position: relative;
  background-color: darkblue;
  color: white;
  padding: 0.5em 1em;
  width: 40%;
  margin: 0.3em;
  cursor: move;
`;

export default function Sample1() {
    const [positions, setPositions] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const nodeRef = useRef(null);
  
    useEffect(() => {
      const existingDivPositions = JSON.parse(
        localStorage.getItem("positions_div")
      );
      setPositions(existingDivPositions);
      setHasLoaded(true);
      console.log(existingDivPositions);
      console.log("has loaded");
    }, []);
  
    function handleStop(e, data) {
      let dummyPositions = { ...positions };
      const itemId = e.target.id;
      dummyPositions[itemId] = {};
      dummyPositions[itemId]["x"] = data.x;
      dummyPositions[itemId]["y"] = data.y;
      setPositions(dummyPositions);
    }
  
    useEffect(() => {
      localStorage.setItem(`positions_div`, JSON.stringify(positions));
    }, [positions]);
    return (
        <Contact1/>
    );
}
