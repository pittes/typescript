export class User {
	id: number;
	userName: string;
	password: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	admin: boolean;
	reviewer: boolean;
	active: boolean;

	constructor(userName: string, password: string, firstName: string, lastName: string,
		phone: string, email: string, admin: boolean, reviewer: boolean, active: boolean) {
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.admin = admin;
		this.reviewer = reviewer;
		this.active = active;
	}
}