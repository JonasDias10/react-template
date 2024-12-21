import { Order } from "@/types/order";

type Props<T> = {
  a: T;
  b: T;
  order: Order;
  orderBy: keyof T;
};

export const compareFn = <T extends Record<string, unknown>>({ a, b, order, orderBy }: Props<T>) => {
  const valueA = a[orderBy];
  const valueB = b[orderBy];

  if (valueA instanceof Date && valueB instanceof Date) {
    const comparison = valueA.getTime() - valueB.getTime();
    return order === "asc" ? comparison : -comparison;
  }

  if (typeof valueA === "number" && typeof valueB === "number") {
    return order === "asc" ? valueA - valueB : valueB - valueA;
  }

  if (typeof valueA === "string" && typeof valueB === "string") {
    return order === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  }

  return 0;
};

export const sort = <T extends Record<string, unknown>>(items: T[], order: Order, orderBy: keyof T) => {
  const sorted = [...items];
  sorted.sort((a, b) => compareFn({ a, b, order, orderBy }));
  return sorted;
};
