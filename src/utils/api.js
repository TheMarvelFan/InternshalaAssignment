export async function fetchSampleData() {
    return fetch("http://localhost:5000/api/internshala")
        .then(res => res.json());
}
