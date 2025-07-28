import { object, string, minLength, pipe } from "valibot";

export const UserSchema = object({
	email: pipe(string(), minLength(1, "Please enter your email.")),
	password: pipe(
		string(),
		minLength(8, "Password must be at least 8 characters."),
	),
});
