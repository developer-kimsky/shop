import React, { useEffect, useState } from "react";

const TabContent = ({ tab, product }) => {
  //   switch (tab) {
  //     case 0:
  //       return <div>내용0</div>;
  //     case 1:
  //       return <div>내용1</div>;
  //     case 2:
  //       return <div>내용2</div>;
  //     default:
  //       return <div>내용0</div>;
  //   }
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>{product.title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
};

export default TabContent;
