import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: NextRequest) {
	try {
		const { title, description, targetKeywords } = await request.json();

		if (!title) {
			return NextResponse.json({ error: "Title is required" }, { status: 400 });
		}

		if (!process.env.GEMINI_API_KEY) {
			return NextResponse.json(
				{ error: "Gemini API key not configured" },
				{ status: 500 },
			);
		}

		const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

		const prompt = `You are an expert YouTube SEO specialist. Your task is to optimize video content for maximum visibility and engagement.

Video Title: ${title}
${description ? `Video Description: ${description}` : ""}
${targetKeywords ? `Target Keywords: ${targetKeywords}` : ""}

Generate highly optimized YouTube content that:
1. Improves search ranking and visibility
2. Increases click-through rates with compelling titles
3. Maximizes engagement with strategic hashtags
4. Incorporates target keywords naturally
5. Follows YouTube best practices for 2024+

Respond with a JSON object containing:
{
  "optimizedTitle": "SEO-optimized title (max 60 chars) that includes the main keyword and creates curiosity",
  "optimizedDescription": "Comprehensive, keyword-rich description (300-500 words) with timestamps, CTA, and social links placeholders",
  "tags": ["array", "of", "15-20", "relevant", "video", "tags", "in", "lowercase"],
  "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
  "thumbnailSuggestions": ["suggestion1", "suggestion2"],
  "seoScore": 85
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
			optimizedTitle: data.optimizedTitle || title,
			optimizedDescription: data.optimizedDescription || description,
			tags: data.tags || [],
			hashtags: data.hashtags || [],
			thumbnailSuggestions: data.thumbnailSuggestions || [],
			seoScore: data.seoScore || 75,
		});
	} catch (error) {
		console.error("Error generating SEO content:", error);
		return NextResponse.json(
			{
				error:
					error instanceof Error
						? error.message
						: "Failed to generate SEO content",
			},
			{ status: 500 },
		);
	}
}
