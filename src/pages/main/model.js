import * as ef from "effector";

// Stores
export const $packages = ef.createStore([
  { id: "3", size: "large", month: "07.2020", status: "in store" },
  { id: "2", size: "small", month: "06.2020", status: "in store" },
  { id: "1", size: "middle", month: "05.2020", status: "in store" },
  {
    id: "-1",
    size: "middle",
    month: "04.2020",
    disabled: true,
    status: "in delivery",
  },
  {
    id: "-2",
    size: "middle",
    month: "03.2020",
    disabled: true,
    status: "delivered",
  },
]);
