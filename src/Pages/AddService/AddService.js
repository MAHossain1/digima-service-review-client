import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext/UserContext";

const AddService = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Add Service</h2>
    </div>
  );
};

export default AddService;
