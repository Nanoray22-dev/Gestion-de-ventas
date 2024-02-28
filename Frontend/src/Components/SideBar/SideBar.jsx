// Sidebar.js
import React from "react";
import DashboardLink from "./DashboardLink";
import InventoryLink from "./InventoryLink";
import SalesLink from "./SalesLink";
import PurchasesLink from "./PurchasesLink";
import UsersLink from "./UsersLink";

const Sidebar = () => {
  return (
    <div>
      <DashboardLink />
      <InventoryLink />
      <SalesLink />
      <PurchasesLink />
      <UsersLink />
    </div>
  );
};

// DashboardLink.js


const DashboardLink = () => {
  return (
    <div>
      <a href="/dashboard">Dashboard</a>
    </div>
  );
};

// InventoryLink.js
import React from "react";

const InventoryLink = () => {
  return (
    <div>
      <a href="/inventory">Inventario</a>
    </div>
  );
};

// SalesLink.js
import React from "react";

const SalesLink = () => {
  return (
    <div>
      <a href="/sales">Ventas</a>
    </div>
  );
};

// PurchasesLink.js
import React from "react";

const PurchasesLink = () => {
  return (
    <div>
      <a href="/purchases">Compras</a>
    </div>
  );
};

// UsersLink.js
import React from "react";

const UsersLink = () => {
  return (
    <div>
      <a href="/users">Usuarios</a>
    </div>
  );
};

export default Sidebar;