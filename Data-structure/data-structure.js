// user structure
const user = {
  userId: "integer", // if possible can we do C-458, S-789, EN-879, EM-256 add the letter indicating role
  username: "string",
  dateOfBirth: "date",
  email: "string",
  phoneNumber: "string",
  address: {
    street: "string",
    city: "string",
    governorate: "string",
    country: "string",
    postalCode: "string",
  },
  bankAccount: "string",
  paymentMethod: [PaymentMethodEnum],
  role: RoleEnum,
  department: role === RoleEnum.employee ? DepartmentEnum : null,
  company: "string if supplier",
};

const customerDemand = {
  demandId: "string",
  userId: "string",
  houseData: HouseDataSchema,
  totalBudget: "integer",
};

// contract between enterprise and user
const contract = {
  contractId: "string",
  demandId: "string",
  orderId: "string",
  userId: "string",
  contractEstablishmentDate: "date",
  installationDate: "date",
  status: StatusEnum,
  engineers: ["userId (role must be engineer)"],
  orderPriority: PriorityEnum,
};

// holds the necessary components for a contract

const order = {
  orderId: "string",
  dateOfRequest: "date",
  status: StatusEnum,
  totalPrice: "integer",
  components: [{ hardware: HardwareEnum, quantity: "integer" }],
  softwareVersion: "string",
};

// supply offer

const supplyOffer = {
  offerId: "string",
  userId: "string",
  offerDate: "date",
  status: "StatusEnum",
  totalPrice: "integer",
  components: [RawMaterialSchema],
  comment: "string",
};

// reclamation

const reclamation = {
  reclamationId: "string",
  userId: "string",
  content: "string",
  status: StatusEnum,
};

// day off demand

const employeeDemand = {
  demandId: "string",
  userId: "string", // must be an employee
  reason: EmployeeDemandEnum,
  comment: "string",
  status: StatusEnum,
};

// candidate

const candidature = {
  candidatureId: "string",
  userId:"string",
  languages: "string[]",
  softSkills: "string[]",
  technicalSkills: "string[]",
  education: "string[]",
  workExperiene: "string[]",
  rating: "number", // 0 < x < 10
  status: StatusEnum,
}
