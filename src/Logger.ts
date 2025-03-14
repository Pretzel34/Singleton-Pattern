class Logger {
	private static instance: Logger;

	private constructor() {
		 // Private constructor prevents direct instantiation.
	}

	public static getInstance(): Logger {
		 if (!Logger.instance) {
			  Logger.instance = new Logger();
		 }
		 return Logger.instance;
	}

	public log(message: string): void {
		 console.log(`[LOG]: ${message}`);
	}

	public error(message: string): void {
		 console.error(`[ERROR]: ${message}`);
	}
}

export default Logger;
