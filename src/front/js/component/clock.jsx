import React from "react";

export default function Clock(props) {
  return (
    <div className="margin clock">
      <div className="calendar"></div>

      <i className="fa-solid fa-user-clock fa-shake"></i>
      <div>{Math.floor(props.sec / 100000000) % 10}</div>
      <div>{Math.floor(props.sec / 10000000) % 10}</div>
      <div>{Math.floor(props.sec / 1000000) % 10}</div>

      <div>{Math.floor(props.sec / 100000) % 10}</div>
      <div>:</div>
      <div>{Math.floor(props.sec / 10000) % 10}</div>
      <div>{Math.floor(props.sec / 1000) % 10}</div>
      <div>{Math.floor(props.sec / 100) % 10}</div>
      <div>{Math.floor(props.sec / 10) % 10}</div>
      <div>{Math.floor(props.sec / 1) % 10}</div>
    </div>
  );
}
