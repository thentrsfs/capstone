
export async function loadApi() {
  const res = await fetch(
    "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
  );
  const code = await res.text();

  const wrappedCode = `
    let exports = {};
    ${code}
    return { fetchAPI, submitAPI };
  `;

  // eslint-disable-next-line no-new-func
  const apiFactory = new Function(wrappedCode);

  return apiFactory();
}
