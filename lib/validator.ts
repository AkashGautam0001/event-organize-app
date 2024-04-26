import * as z from "zod";

export const eventFormSchema = z.object({
	title: z.string().min(3, {
		message: "Username must be at least 3 characters.",
	}),
	description: z
		.string()
		.min(3, "Description must be at 3 character")
		.max(400, "Description must be less than 400 character"),
	location: z
		.string()
		.min(3, "Location must be at least 3 character")
		.max(400, "Location must be less than 400 charcter"),
	imageUrl: z.string(),
	startDateTime: z.date(),
	endDateTime: z.date(),
	categoryId: z.string(),
	price: z.string(),
	isFree: z.boolean(),
	url: z.string().url(),
});
