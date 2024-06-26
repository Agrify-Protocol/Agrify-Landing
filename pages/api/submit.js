import { google } from "googleapis";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).send({ message: "Only POST requests are allowed" });
	}

	const body = req.body;

	try {
		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
				private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
			},
			scopes: ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/spreadsheets"],
		});

		const sheets = google.sheets({
			auth,
			version: "v4",
		});
		const response = await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
			range: "A1:G1",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [[body.currentDate, body.firstName, body.lastName, body.email, body.phoneNumber, body.category, body.location, body.fileURL]],
			},
		});

		return res.status(200).json({
			data: response.data,
		});
	} catch (e) {
		console.error(e);
		return res.status(500).send({ message: e.message });
	}
}
