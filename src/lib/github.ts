export interface GitHubProject {
  id: number;
  name: string;
  formattedName: string;
  description: string;
  stacks: string[];
  repoUrl: string;
  demoUrl: string | null;
  imageUrl: string;
}

interface GitHubRepoResponse {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  fork: boolean;
  updated_at: string;
  pushed_at: string;
}

function formatRepoName(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function getGitHubProjects(
  username = "esthervbac",
): Promise<GitHubProject[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      console.error("Erro ao buscar repositórios do GitHub:", response.status);
      return [];
    }

    const repos: GitHubRepoResponse[] = await response.json();

    return repos
      .filter(
        (repo) =>
          !repo.fork && repo.name.toLowerCase() !== username.toLowerCase(),
      )
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      )
      .map((repo) => {
        const rawStacks = [
          ...(repo.topics || []),
          ...(repo.language ? [repo.language] : []),
        ];

        const uniqueStacks = Array.from(
          new Set(rawStacks.map((item) => item.trim()).filter(Boolean)),
        );

        const cleanHomepage = repo.homepage?.trim() || null;
        const demoUrl =
          cleanHomepage && !cleanHomepage.startsWith("http")
            ? `https://${cleanHomepage}`
            : cleanHomepage;

        return {
          id: repo.id,
          name: repo.name,
          formattedName: formatRepoName(repo.name),
          description:
            repo.description ||
            "Projeto desenvolvido e versionado no GitHub. Acesse o repositório para ver os detalhes técnicos.",
          stacks:
            uniqueStacks.length > 0 ? uniqueStacks : ["Desenvolvimento Web"],
          repoUrl: repo.html_url,
          demoUrl,
          imageUrl: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
        };
      });
  } catch (error) {
    console.error("Falha na requisição para a API do GitHub:", error);
    return [];
  }
}
