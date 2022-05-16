import React from "react";

const TxCallbackView = ({ message = "sending" }) => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-full flex justify-center items-center flex-col"
    >
      <p className="text-3xl font-bold text-center">
        {message === "loading"
          ? "Loading..."
          : message === "sending"
          ? "Sending Transaction..."
          : message === "cencel" && "Transaction Cancel..."}
      </p>
      <div>
        <p className="text-5xl">. . .</p>
      </div>
    </div>
  );
};

export default TxCallbackView;
