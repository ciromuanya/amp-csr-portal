import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "csr_users_data";

const initialUsers = [
  {
    id: "1",
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "123-456-7890",
    vehicles: [
      {
        id: "v1",
        make: "Toyota",
        model: "Camry",
        license: "ABC123",
        active: true,
        photoUrl: "/jane-car.png",
        platePhotoUrl: "/jane-plate.png"
      },
    ],
    subscriptionStatus: "active",
    purchaseHistory: [
      {
        id: "p1",
        item: "Single Wash",
        date: "2025-04-22",
        amount: 12.99
      },
    ],
  },
  {
    id: "2",
    name: "John Smith",
    email: "john@example.com",
    phone: "987-654-3210",
    vehicles: [
      {
        id: "v2",
        make: "Honda",
        model: "Civic",
        license: "XYZ789J",
        active: false,
        photoUrl: "/john-car-1.png",
        platePhotoUrl: "/john-plate-1.png"
      },
      {
        id: "v3",
        make: "Volkswagen",
        model: "Tiguan",
        license: "XYZ789",
        active: false,
        photoUrl: "/john-car-2.png",
        platePhotoUrl: "/john-plate-2.png"
      },
    ],
    subscriptionStatus: "overdue",
    purchaseHistory: [
      {
        id: "p2",
        item: "Monthly Membership",
        date: "2025-05-23",
        amount: 29.99
      },
    ],
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-123-4567",
    vehicles: [
      {
        id: "v4",
        make: "Ford",
        model: "Focus",
        license: "LMN456",
        active: true,
        photoUrl: "/alice-car-1.png",
        platePhotoUrl: "/alice-plate-1.png"
      },
    ],
    subscriptionStatus: "active",
    purchaseHistory: [
      {
        id: "p3",
        item: "Yearly Membership",
        date: "2025-01-10",
        amount: 299.99
      },
    ],
  }
];

export default function useUserData() {
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialUsers;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return [users, setUsers];
}
