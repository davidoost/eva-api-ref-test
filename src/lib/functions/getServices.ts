interface GitHubFile {
  name: string;
  type: string;
}

export default async function getServices() {
  const url = `https://api.github.com/repos/new-black/eva-apispec/contents/spec/src/services`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    const data: GitHubFile[] = await response.json(); // Cast response to an array of GitHubFile
    // Filter the response to include only files, excluding subdirectories
    return data
      .filter((item) => item.type === "file")
      .map((file) => file.name.replace(/\.[^/.]+$/, ""));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
