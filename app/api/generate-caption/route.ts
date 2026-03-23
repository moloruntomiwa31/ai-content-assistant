import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: NextRequest) {
	try {
		const { title, description, platform = "general" } = await request.json();

		if (!title) {
			return NextResponse.json({ error: "Title is required" }, { status: 400 });
		}

		if (!process.env.GEMINI_API_KEY) {
			return NextResponse.json(
				{ error: "Gemini API key not configured" },
				{ status: 500 },
			);
		}

		const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

		const platformPrompts = {
			instagram:
				"Create an Instagram caption with relevant hashtags and emojis. Keep it engaging and use trends.",
			twitter:
				"Create a Twitter/X caption (concise, under 280 characters if possible). Make it punchy.",
			whatsapp:
				"Create a WhatsApp caption that's professional yet friendly. Include relevant context.",
			facebook:
				"Create a Facebook caption that's conversational and engaging. Encourage engagement.",
			general:
				"Create a social media caption that works across all platforms. Make it versatile and engaging.",
		};

		const platformPrompt =
			platformPrompts[platform as keyof typeof platformPrompts] ||
			platformPrompts.general;

		const prompt = `You are an expert social media content creator. 
${platformPrompt}

Title: ${title}
${description ? `Description: ${description}` : ""}

Generate a compelling, engaging social media caption that would attract audience attention and encourage engagement. Include relevant emojis and hashtags naturally integrated into the caption. 

Respond with a JSON object containing:
{
  "caption": "the main caption text with emojis and hashtags",
  "hashtags": ["array", "of", "relevant", "hashtags"],
  "emojis": ["array", "of", "relevant", "emojis"]
}`;

		const result = await model.generateContent(prompt);
		const response = result.response;
		const text = response.text();

		// Parse the JSON response
		const jsonMatch = text.match(/\{[\s\S]*\}/);
		if (!jsonMatch) {
			throw new Error("Invalid response format from Gemini");
		}

		const data = JSON.parse(jsonMatch[0]);

		return NextResponse.json({
			caption: data.caption,
			hashtags: data.hashtags || [],
			emojis: data.emojis || [],
			platform,
		});
	} catch (error) {
		console.error("Error generating caption:", error);
		return NextResponse.json(
			{
				error:
					error instanceof Error ? error.message : "Failed to generate caption",
			},
			{ status: 500 },
		);
	}
}
