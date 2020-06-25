export default class Experience {
	public readonly company: string;
	public readonly date: string;
	public readonly texts: string[];

	private constructor(company: string, date: string, texts: string[]) {
		this.company = company;
		this.date = date;
		this.texts = texts;
	}

	public static of(company: string, date: string, texts: string[]): Experience {
		return new Experience(company, date, texts);
	}
}
