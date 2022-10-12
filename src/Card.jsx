function Card() {
  return (
    <CardDetail
      name="Oscar Pistorius"
      expirationDate="08/09"
      creditCardNumber="6777 7546 8907 1230"
      bankName="Bank of England"
    />
  );
}

export default Card;

function CardDetail(props) {
  const { name, expirationDate, creditCardNumber, bankName } = props;

  return (
    <div
      style={{
        padding: "20px 20px",
        display: "block",
        padding: "20px, 10px",
        width: "300px",
        height: "200px",
        borderRadius: "5%",
        backgroundColor: "#4495fd",
        color: "white",
      }}
    >
      <p
        style={{
          paddingTop: "20px",
          paddingRight: "20px",
          textAlign: "right",
          fontSize: "1.8rem",
          fontWeight: "600",
        }}
      >
        {bankName}
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          position: "relative",
          textAlign: "center",
          letterSpacing: "3px",
          top: "20px",
        }}
      >
        {creditCardNumber}
      </p>
      <p
        style={{
          fontSize: ".6rem",
          position: "relative",
          left: "38px",
        }}
      >
        1234
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          bottom: "20px",
        }}
      >
        <span
          style={{
            fontSize: ".3rem",
            // display: "block",
          }}
        >
          <p>VALID</p>THRU<p></p>
        </span>
        <p
          style={{
            // alignItems: "flex-start",
            marginLeft: "20px",
            bottom: "20px",
          }}
        >
          {expirationDate}
        </p>
      </div>
    </div>
  );
}
