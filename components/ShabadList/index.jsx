import React from "react";
import styles from "./index.module.css";

const ListItem = ({ shabad }) => {
  return (
    <div className={styles.card}>
      <div>{shabad?.gurmukhi?.unicode}</div>
      <div>{shabad?.transliteration.english.text}</div>
      <div
        className={styles.subTitleText}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <span>{`${shabad?.raag.english}, ${shabad?.writer.english}`}</span>
        <span>{`Page: ${shabad?.pageno}`}</span>
      </div>
    </div>
  );
};

const EmptyMessage = () => {
  return <div className={styles.card}>No Results!</div>;
};

const renderShabads = (shabads) => {
  return shabads.map((item) => {
    return <ListItem key={item.shabad.id} shabad={item.shabad} />;
  });
};

function ShabadList({ shabads = [] }) {
  return (
    <div className={styles.listContainer}>
      {shabads?.length > 1 ? renderShabads(shabads) : <EmptyMessage />}
    </div>
  );
}

export default ShabadList;
