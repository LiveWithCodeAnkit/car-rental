import React from "react";

function ToastMsg({ msg }: any) {
  return (
    <>
      <div className="toast toast-top toast-end">
        <div className="alert alert-success">
          <span>{msg}</span>
        </div>
      </div>
    </>
  );
}

export default ToastMsg;
