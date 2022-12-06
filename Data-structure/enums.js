const RoleEnum = {
  client: 0,
  supplier: 1,
  candidate: 2, // engineer: 2,
  employee: 3,
};

const DepartmentEnum = {
  engineer: 0,
  executive: 1,
  finance: 2,
  humanRessources: 3,
  supply: 4,
  customerService: 5,
  reasearchAndDevlopment: 6,
  marketing: 7,
};

const StatusEnum = {
  idle: 0,
  inProcess: 1,
  done: 2,
  failed: 3,
};

const PriorityEnum = {
  low: 0,
  medium: 1,
  high: 2,
};

const HardwareEnum = {
  smartBulb: {
    id: 0,
    name: "smart Bulb",
    price: "48$",
  },
  smartSpeaker: {
    id: 1,
    name: "smartSpeaker",
    price: "148$",
  },
  smartDisplay: {
    id: 2,
    name: "smartDisplay",
    price: "248$",
  },
  smartThermostat: {
    id: 3,
    name: "smartThermostat",
    price: "78$",
  },
  sensor: {
    id: 4,
    name: "sensor",
    price: "25$",
  },
};

const PaymentMethodEnum = {
  cash: 0,
  creditCard: 1,
  checks: 2,
  bankTransfer: 3,
};

const EmployeeDemandEnum = {
  dayOff: 0,
  payment: 1,
  resign: 2,
};
