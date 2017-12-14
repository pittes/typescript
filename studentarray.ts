class Student {
	name: string;
	color: string;
	number: number;


	constructor(aName: string, aColor: string, aNum: number) {
		this.name = aName;
		this.color = aColor;
		this.number = aNum;
	}
}

let students: Student[] = [
		new Student("Emilie", "Red", 9),
		new Student("Lisa", "Green", 14),
		new Student("Denise", "Blue", 11),
		new Student("Eric", "Blue", 7),
		new Student("Luke", "Purple", 14),
		new Student("Andrew", "Black", 80),
		new Student("Bill", "Blue", 13),
		new Student("Joe", "Yellow", 62)
];

console.log(students);