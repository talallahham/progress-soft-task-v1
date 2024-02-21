import React, { useState } from "react";

import styles from "./Show.module.css";
import Modal from "../utils/Modal";

const ShowDealInfo = ({ onClose, deal }) => {
  const disabled = true;

  return (
    <Modal style={{ width: "1100px" }}>
      <form className={styles.form}>
        <div>
          <label>Deal ID</label>
          <input type="text" disabled={disabled} value={deal.id} />
        </div>

        <div>
          <label>From currency ISO code/number</label>
          <input
            type="text"
            disabled={disabled}
            value={deal.fromCurrencyIsoCode}
          />
        </div>

        <div>
          <label>To currency ISO code/number</label>
          <input
            type="text"
            disabled={disabled}
            value={deal.toCurrencyIsoCode}
          />
        </div>

        <div>
          <label>Deal timestamp</label>
          <input
            type="date"
            disabled={disabled}
            value={deal.timestamp.split("T")[0]}
          />
        </div>

        <div>
          <label>Deal amount</label>
          <input
            type="text"
            disabled={disabled}
            value={`${deal.dealAmount} ${deal.fromCurrencyIsoCode}`}
          />
        </div>

        <div className={styles.btns}>
          <button disabled={disabled}>Update deal info</button>
          <button disabled={disabled}>Delete Deal</button>
        </div>
      </form>

      <button onClick={onClose} className={styles.close}>
        Close
      </button>
    </Modal>
  );
};

const Show = ({ deals }) => {
  const [selectedDeal, setSelectedDeal] = useState(-1);

  const onCloseSelectedDealModal = () => {
    setSelectedDeal(-1);
  };

  const onSelectDeal = (idx) => {
    setSelectedDeal(idx);
  };

  return (
    <>
      {selectedDeal !== -1 && (
        <ShowDealInfo
          onClose={onCloseSelectedDealModal}
          deal={deals[selectedDeal]}
        />
      )}

      <section className={styles.show}>
        {deals.map((deal, key) => {
          return (
            <div
              key={key}
              className={styles.item}
              onClick={() => {
                onSelectDeal(key);
              }}
            >
              <div>
                <h1>Deal ID</h1>
                <p>{deal.id}</p>
              </div>

              <div>
                <h1>Deal amount</h1>
                <p>{deal.dealAmount}</p>
              </div>

              <div>
                <h1>Timestamp</h1>
                <p>{deal.timestamp.split("T")[0]}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Show;
