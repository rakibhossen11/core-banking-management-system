import React, { useState } from "react";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    </div>
  );
};

export default Table;
