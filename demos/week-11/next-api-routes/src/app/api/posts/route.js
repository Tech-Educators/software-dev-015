export function GET() {
  const posts = [
    { id: 1, title: "Blog 1", content: "Woah there this is a blog!" },
    { id: 2, title: "My adventures in Norwich", content: "So many people!" },
    { id: 3, title: "Blog 3", content: "Yet another blog post!" },
  ];
  return new Response(JSON.stringify(posts));
}
