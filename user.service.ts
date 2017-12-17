import { User } from './user';

export class UserService {
	
	nextId: number = 1;
	users: User[] = [
		// new User("tiger", "golfgoat", "Tiger", "Woods", "234-456-8888", "twoods@nike.com", false, true, true)
	];

	list(): User[] {
		return this.users;
	}

	get(id: number): User[] {
		let usrs: User[] = [];
		for(let user of this.users) {
			if(id == user.id) {
				usrs.push(user);
				break;
			}
		}
		return usrs;
	}

	add(user: User): string {
		user.id = this.nextId++;
		this.users.push(user);
		return "Added.";
	}

	change(user: User): string {
		let dbusr: User = this.get(user.id)[0];
		dbusr.userName = user.userName;
		dbusr.password = user.password;
		dbusr.firstName = user.firstName;
		dbusr.lastName = user.lastName;
		dbusr.phone = user.phone;
		dbusr.email = user.email;
		dbusr.admin = user.admin;
		dbusr.reviewer = user.reviewer;
		dbusr.active = user.active;
		return "Updated."
	}

	remove(user: User): string {
		let index: number = -1;
		for(let idx: number = 0; idx < this.users.length; idx++) {
			if(user.id == this.users[idx].id) {
				index = idx;
			}
		}
		this.users.splice(index, 1);
		return "Removed.";
	}

	authenticate(username: string, password: string): User[] {
		let usrs: User[] = [];
		for(let user of this.users) {
			if(user.userName.toLowerCase() == username.toLowerCase() 
				&& user.password == password) {
				usrs.push(user);
				break;
			}
		}
		return usrs;
	}
}