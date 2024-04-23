import { BASE_URL } from "../utils/Constants";

export const Recommendations = () => {
    const fetchRecommendations = async () => {
        try {
			const response = await fetch(BASE_URL + "/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
				}),
			});
			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.error("Error submitting assessment:", error);
		}
    }
}

