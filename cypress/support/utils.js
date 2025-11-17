export function creerUserUnique() {
  const timestamp = Date.now();
  return {
    name: "Nassim QA",
    email: `nassim_${timestamp}@test1.com`,
    password: "123456"
  };
}
