import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 880px;
  //   border: 2px solid black;
`;
const StyledDiv = styled.div`
  width: 50%;
  //   border: 2px solid aqua;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
`;
const Box = styled.div`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  min-height: 30vh;
`;
const Circle1 = styled.div`
  width: 25%;
  margin-top: 2%;
  height: 8vh;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const BubbleShot = () => {
  const [number, setNumber] = useState("");
  const [color, setColor] = useState([]);
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const arrColor = [
    { id: 0, color: "red" },
    { id: 1, color: "yellow" },
    { id: 2, color: "green" },
    { id: 3, color: "blue" },
    { id: 4, color: "brown" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (number === "") {
      alert("Enter Number");
    } else {
      //   console.log("60", color, number - 1);
      for (let i = 0; i < color.length; i++) {
        if (i === number - 1) {
          setLeft([...left, { id: color[i].id, color: color[i].color }]);
        }
      }
      //   console.log("66", color, number - 1);
      let newColor = [];
      for (let i = 0; i < color.length; i++) {
        if (i === number - 1) {
        } else {
          newColor.push(color[i]);
          // setRight([...right, { id: color[i].id, color: color[i].color }]);
        }
      }
      setColor(newColor);
    }
    setNumber("");
  }
  //   ***********************************************************
  function handleOnChange(e) {
    setNumber(Number(e.target.value));
  }
  //   ***********************************************************
  useEffect(() => {
    setColor(arrColor);
  }, []);
  //   ***********************************************************
  const onClickBox = (c) => {
    // console.log("89", c.id, color, left);
    let newColor = [];
    for (let i = 0; i < left.length; i++) {
      if (left[i].id === c.id) {
        // console.log("93", left[i]);
      } else {
        newColor.push(left[i]);
      }
    }
    console.log("98", newColor);
    setLeft(newColor);
    //   ***********************************************************
    newColor = [];
    for (let i = 0; i < color.length + 1; i++) {
      if (color[i] === undefined) {
        newColor.push({ id: c.id, color: c.color });
      } else {
        newColor.push({ id: color[i].id, color: color[i].color });
      }
    }
    newColor.sort((a, b) => a.id - b.id);
    console.log("109", newColor);
    setColor(newColor);
  };
  //   ***********************************************************

  return (
    <Container>
      <StyledDiv>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box>
          {left.map((c) => {
            return (
              <Circle1
                key={c.id}
                onClick={() => onClickBox(c)}
                style={{ backgroundColor: `${c.color}` }}
              ></Circle1>
            );
          })}
        </Box>
      </StyledDiv>
      <StyledDiv>
        <StyledForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Number"
            name="number"
            value={number}
            onChange={handleOnChange}
          />
          <br />
          <input type="submit" value="Shoot" />
          <br />
        </StyledForm>
        <Box>
          {/* {console.log("91", color)} */}
          {color.map((c) => {
            return (
              <Circle1
                key={c.id}
                onClick={() => onClickBox(c)}
                style={{ backgroundColor: `${c.color}` }}
              ></Circle1>
            );
          })}
        </Box>
      </StyledDiv>
    </Container>
  );
};
