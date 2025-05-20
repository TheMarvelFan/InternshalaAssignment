export const handler = async function(event, context) {
    try {
        const response = await fetch("https://internshala.com/hiring/search");
        const data = await response.text();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "text/html",
                "Access-Control-Allow-Origin": "*"
            },
            body: data
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data" })
        };
    }
};
