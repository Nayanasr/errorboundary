import React, { useState } from "react";

function PersonDetails() {
  const [person, setPerson] = useState({
    userName: "Nayana",
    age: 20,
  });
  return <div>{person.userName.map()}</div>; //filter(),map() are errors
}

export default PersonDetails;