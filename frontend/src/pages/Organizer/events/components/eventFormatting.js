export function formatDate(date) {
    if (!date) return "Not specified";

    return new Date(date).toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );
}

export function formatCategory(category) {
    if (!category) return "EVENT";

    return category
        .replaceAll("_", " ")
        .toLowerCase()
        .replace(/\b\w/g, (letter) =>
            letter.toUpperCase()
        );
}