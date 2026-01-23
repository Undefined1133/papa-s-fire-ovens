export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:1337";

export async function fetchCategories() {
  const res = await fetch(`${API_URL}/api/categories?populate=cover`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
