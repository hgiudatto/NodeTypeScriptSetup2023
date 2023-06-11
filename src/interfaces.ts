import {
  Point,
  Employee,
  PersonalDetails,
  ContactDetails,
} from "./model/types.d";

const printCoord = (pt: Point) => {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
};
let aPoint: Point = { x: 100, y: 200 };
printCoord(aPoint);

// many args
let cd1: ContactDetails = {
  street: "Moonrise St.",
  no: 123,
  tel_number: 1677889,
  post_code: 763,
  country: "Cuba",
};
let pd1: PersonalDetails = {
  first_name: "Bob",
  last_name: "Steltdant",
  address: cd1,
};
let emp1: Employee = { department: "sales", vertical: 1, personalData: pd1 };

const showEmployeeData = (employee: Employee) => {
  console.log(`employee data: `, employee);
};
showEmployeeData(emp1);
