import { useState } from "react";

function ColumnVisibilityDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    username: true,
    email: true,
    empresa: true,
    telefono: true,
    role: true,
    status: true,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleColumnVisibility = (columnName) => {
    setVisibleColumns((prevVisibleColumns) => ({
      ...prevVisibleColumns,
      [columnName]: !prevVisibleColumns[columnName],
    }));
  };

  return (
    <div className="dropdown relative px-4 py-2">
      <button
        onClick={toggleDropdown}
        className="bg-gray-300 text-gray-700 rounded px-4 py-2"
      >
        Visibilidad por columna
      </button>
      {isOpen && (
        <div className="dropdown-content absolute bg-white rounded shadow-md mt-2">
          {Object.entries(visibleColumns).map(([columnName, isVisible]) => (
            <label key={columnName} className="block px-4 py-2">
              <input
                type="checkbox"
                checked={isVisible}
                onChange={() => toggleColumnVisibility(columnName)}
              />{" "}
              {columnName}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColumnVisibilityDropdown;