export const mockUsers = [
    {
      id: "1",
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "123-456-7890",
      vehicles: [
        { id: "v1", make: "Toyota", model: "Camry", license: "ABC123", active: true },
      ],
      subscriptionStatus: "active",
      purchaseHistory: [
        { id: "p1", item: "Single Wash", date: "2024-04-22", amount: 12.99 },
      ],
    },
    {
      id: "2",
      name: "John Smith",
      email: "john@example.com",
      phone: "987-654-3210",
      vehicles: [
        { id: "v2", make: "Honda", model: "Civic", license: "XYZ789", active: false },
      ],
      subscriptionStatus: "overdue",
      purchaseHistory: [
        { id: "p2", item: "Monthly Membership", date: "2024-03-15", amount: 29.99 },
      ],
    },
    {
        id: "3",
        name: "Alice Johnson",
        email: "alice@example.com",
        phone: "555-123-4567",
        vehicles: [
          { id: "v3", make: "Ford", model: "Focus", license: "LMN456", active: true },
        ],
        subscriptionStatus: "active",
        purchaseHistory: [
          { id: "p3", item: "Yearly Membership", date: "2024-01-10", amount: 299.99 },
        ],
    }
  ];