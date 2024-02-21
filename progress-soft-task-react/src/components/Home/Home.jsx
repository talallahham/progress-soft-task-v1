import React, { useState } from "react";

import styles from "./Home.module.css";
import CurrencyCodes from "../../global/utils/CurrencyCodes";
import Modal from "../utils/Modal";
import { saveDeal } from "../../global/api";

const ResponseModal = ({ onClose, response, status }) => {
  const color = status ? `green` : `red`;
  return (
    <Modal style={{ width: "70rem" }}>
      <div className={styles.modal}>
        <h1 style={{ color: color }}>{response}</h1>
      </div>
      <button onClick={onClose} className={styles.close}>
        Close
      </button>
    </Modal>
  );
};

const validateDealInfo = (dealInfo) => {
  const currencyCodes = new CurrencyCodes();

  // ID check
  if (dealInfo.id === "") {
    throw new Error("ID must not be empty");
  }

  if (isNaN(dealInfo.id)) {
    throw new Error("ID must be a number");
  }
  // #######

  // From currencey ISO check
  if (dealInfo.fromCurrencyIsoCode === "") {
    throw new Error("From currencey must not be empty");
  }

  if (currencyCodes.getIsoCode(dealInfo.fromCurrencyIsoCode) === "false") {
    throw new Error("From currencey is not a vaild ISO code/number");
  }
  // #######

  // To currencey ISO check
  if (dealInfo.toCurrencyIsoCode === "") {
    throw new Error("To currencey must not be empty");
  }

  if (currencyCodes.getIsoCode(dealInfo.toCurrencyIsoCode) === "false") {
    throw new Error("To currencey is not a vaild ISO code/number");
  }
  // #######

  // Timestamp check
  if (dealInfo.timestamp === "") {
    throw new Error("Timestamp must not be empty");
  }

  if (isNaN(Date.parse(dealInfo.timestamp))) {
    throw new Error("Timestamp is not a vaild date");
  }
  // #######

  // Deal Amount check
  if (dealInfo.dealAmount === "") {
    throw new Error("Deal amount must not be empty");
  }

  if (isNaN(dealInfo.dealAmount)) {
    throw new Error("Deal amount must be a number");
  }
  // #######
};

const Home = () => {
  const [response, setResponse] = useState({
    show: false,
    status: false,
    msg: "",
  });

  const onSubmitSaveDealForm = (e) => {
    e.preventDefault();

    let dealInfo = {
      id: e.target[0].value,
      fromCurrencyIsoCode: e.target[1].value,
      toCurrencyIsoCode: e.target[2].value,
      timestamp: e.target[3].value,
      dealAmount: e.target[4].value,
    };

    try {
      validateDealInfo(dealInfo);

      const ISODate = new Date(e.target[3].value).toISOString();
      dealInfo = {
        ...dealInfo,
        timestamp: ISODate.substring(0, ISODate.length - 1),
      };

      saveDeal(dealInfo)
        .then(() => {
          setResponse({ show: true, status: true, msg: "Deal Saved." });
        })
        .catch((err) => {
          setResponse({ show: true, status: false, msg: err.message });
        });
    } catch (err) {
      setResponse({ show: true, status: false, msg: err.message });
    }
  };

  const onCloseResponseModal = () => {
    setResponse({ show: false, status: false, msg: "" });
  };

  return (
    <>
      {response.show && (
        <ResponseModal
          response={response.msg}
          status={response.status}
          onClose={onCloseResponseModal}
        />
      )}

      <form className={styles.form} onSubmit={onSubmitSaveDealForm}>
        <div>
          <label>Deal ID</label>
          <input type="text" />
        </div>

        <div>
          <label>From currency ISO code/number</label>
          <input type="text" />
        </div>

        <div>
          <label>To currency ISO code/number</label>
          <input type="text" />
        </div>

        <div>
          <label>Deal timestamp</label>
          <input type="date" />
        </div>

        <div>
          <label>Deal amount</label>
          <input type="text" />
        </div>

        <button>Save The Deal</button>
      </form>
    </>
  );
};

export default Home;
