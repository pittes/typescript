class User {
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

	constructor(id: number, uName: string, pwd: string, fName: string, lName: string,
		phone: string, email: string, admin: boolean, rvw: boolean, active: boolean) {
		this.id = id;
		this.userName = uName;
		this.password = pwd;
		this.firstName = fName;
		this.lastName = lName;
		this.phone = phone;
		this.email = email;
		this.admin = admin;
		this.reviewer = rvw;
		this.active = active;
	}
}

let users: User[] = [
		new User(0, "superman", "manofsteel", "Clark", "Kent",
			"222-222-2222", "ckent@manofsteel.com", true, false, true),
		new User(1, "batman", "darkknight", "Bruce", "Wayne",
			"THE-BAT-CALL", "bwayne@bwayneenterprises", false, true, true),
		new User(2, "wonderwoman", "wwoman", "Gal", "Gadot",
			"234-456-6789", "ww@dccomics.com", true, false, true)
];

let adm: string = "";
let rvwr: string = "";
let act: string = "";
for(let idx: number = 0; idx < users.length; idx++) {
	console.log("Id        : ", users[idx].id);
	console.log("Username  : ", users[idx].userName);
	console.log("Password  : ", users[idx].password);
	console.log("Full name : ", users[idx].firstName, users[idx].lastName);
	console.log("Phone     : ", users[idx].phone);
	console.log("Email     : ", users[idx].email);
	adm = users[idx].admin ? "Yes" : "No";
	console.log("Admin     : ", adm);
	rvwr = users[idx].reviewer ? "Yes" : "No";
	console.log("Reviewer  : ", rvwr);
	act = users[idx].active ? "Yes" : "No";
	console.log("Is Active : ", act);
	console.log("**************************************");
}