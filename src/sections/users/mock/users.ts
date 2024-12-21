import { Status, User } from "@/types/user";

const getRandomStatus = (): Status => {
  const statuses = ["Active", "Inactive"] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const firstNames = ["Alice", "Lucas", "Mariana", "Gabriel", "Sofia", "Pedro", "Isabela", "João", "Ana", "Thiago"];

const lastNames = [
  "Silva",
  "Santos",
  "Oliveira",
  "Souza",
  "Costa",
  "Pereira",
  "Almeida",
  "Nascimento",
  "Lima",
  "Ferreira"
];

const getRandomName = (): string => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

const getRandomDate = (start: Date, end: Date): Date => {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const randomTime = Math.floor(Math.random() * (endTime - startTime + 1)) + startTime;
  return new Date(randomTime);
};

export const usersData: User[] = Array.from({ length: 30 }, (_, index) => {
  const name = getRandomName();
  const email = `${name.toLowerCase().replace(/\s+/g, ".")}@example.com`;

  return {
    id: (index + 1).toString(),
    name,
    email,
    role: index === 0 ? "Admin" : "Regular",
    status: getRandomStatus(),
    createdAt: getRandomDate(new Date(2022, 0, 1), new Date())
  };
});
