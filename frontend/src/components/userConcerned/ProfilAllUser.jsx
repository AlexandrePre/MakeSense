/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { useState, useEffect } from "react";
import api from "../../services/api";
import UserItem from "./UserItem";
import "./ProfilAllUser.css";

function profilAllUser({ allIds, setAllIds, idDecision }) {
  const [user, setUser] = useState([]);

  const handleClick = (id) => {
    const index = id;
    if (allIds.map((e) => e.id_user).indexOf(index) !== -1) {
      const allIdsUpdated = allIds.filter((ids) => ids.id_user !== index);
      setAllIds(allIdsUpdated);
    } else {
      setAllIds([
        ...allIds,
        {
          id_user: index,
          is_expert: false,
          id_decision: idDecision.id,
          notification: true,
        },
      ]);
    }
    // index of the user in the array of object
    const trueIndex = user.map((e) => e.id).indexOf(index);
    // if user index exists in the array of object
    if (trueIndex !== -1) {
      // set invers of clicked
      const isTrue = !user[trueIndex].clicked;
      const newUser = user.map((obj) =>
        obj.id === index ? { ...obj, clicked: isTrue, isExpert: false } : obj
      );
      setUser(newUser);
    }
  };

  const handleExpert = (id) => {
    // user index
    const index = id;
    // index of the user in the array of object
    const trueIndex = allIds.map((e) => e.id_user).indexOf(index);
    // if user index exists in the array of object
    if (trueIndex !== -1) {
      // set invers of is_expert
      const isTrue = !allIds[trueIndex].is_expert;
      const newAllIds = allIds.map((obj) =>
        obj.id_user === index ? { ...obj, is_expert: isTrue } : obj
      );
      setAllIds(newAllIds);

      // index of the user in the array of object
      const trueIndex2 = user.map((e) => e.id).indexOf(index);
      // if user index exists in the array of object
      if (trueIndex2 !== -1) {
        // set invers of isExpert
        const isTrue2 = !user[trueIndex2].isExpert;
        const newUser2 = user.map((obj) =>
          obj.id === index ? { ...obj, isExpert: isTrue2 } : obj
        );
        setUser(newUser2);
      }
    }
  };

  const getAllUser = () => {
    api.get("user").then((response) => setUser(response.data));
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const userMap = user.map((userItem) => (
    <UserItem
      key={UserItem.id}
      lastname={userItem.lastname}
      firstname={userItem.firstname}
      id={userItem.id}
      clicked={userItem.clicked}
      isExpert={userItem.isExpert}
      onclick={() => handleClick(userItem.id)}
      expert={() => handleExpert(userItem.id)}
      image={userItem.image}
    />
  ));
  return (
    <div className="concernedContainer">
      <h2 className="collegue">
        Sélectionne les collègues qui pourront commenter ta décision
      </h2>
      <div className="select">
        <div className="userCard">{userMap}</div>
      </div>
    </div>
  );
}

export default profilAllUser;
