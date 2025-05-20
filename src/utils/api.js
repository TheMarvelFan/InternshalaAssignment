export async function fetchDataFromApi() {
    const isDev = import.meta.env.VITE_DEV;
    let apiUrl;
    if (isDev) {
        apiUrl = "http://localhost:5000/api/internshala";
    } else {
        apiUrl = "/.netlify/functions/internshala";
    }

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            // Handle non-2xx HTTP responses
            throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
        }

        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            return await res.json();
        } else {
            const text = await res.text();
            try {
                return JSON.parse(text);
            } catch {
                return { html: text };
            }
        }
    } catch (error) {
        console.error("Fetch failed:", error);
        return { error: error.message || "Unknown error" };
    }
}
