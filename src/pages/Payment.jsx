import React, { useEffect, useState } from "react";

function Payment() {
  const [visibility, setVisibility] = useState(false);
  const [currentMethod, setCurrentMethod] = useState("");

  const handleClick = (event) => {
    const paymentMethod = event.target.id;
    setCurrentMethod(paymentMethod);
    setVisibility(!visibility);
  };

  useEffect(() => {
    const checkedTimeout = setTimeout(() => {
      const loader = document.querySelector(".loader-circle-43");
      loader.classList.remove("loader-circle-43");

      const checkedImg = document.createElement("img");
      checkedImg.src = "/icons/checkmark-circle.svg";
      checkedImg.width = 140;
      checkedImg.height = 140;

      loader.appendChild(checkedImg);

      const statusMessage = document.querySelector("#status-message");
      statusMessage.textContent = "Payment successful";
    }, 10000);

    return () => clearTimeout(checkedTimeout);
  }, []);

  return (
    <>
      {visibility ? (
        <div className="view">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 50,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <img
              height={200}
              width={200}
              alt={currentMethod}
              src={`/img/${currentMethod}.png`}
              style={{ marginBottom: 50 }}
            />
            <div className="loader-circle-43"></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
            >
              <h2
                id="status-message"
                style={{
                  textAlign: "center",
                  fontWeight: 600,
                  color: "lightslategray",
                }}
              >
                Hold your phone up to the cash register
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="view" id="payments">
          <img
            onClick={handleClick}
            id="google-pay"
            height={200}
            width={200}
            src="/img/google-pay.png"
            alt="Google Pay"
          />
          <img
            onClick={handleClick}
            id="apple-pay"
            style={{ marginBottom: 50 }}
            height={200}
            width={200}
            src="/img/apple-pay.png"
            alt="Apple Pay"
          />
          <img
            onClick={handleClick}
            id="paypal"
            height={200}
            width={200}
            src="/img/paypal.png"
            alt="Paypal"
          />
        </div>
      )}
    </>
  );
}

export default Payment;
