"use server";

export async function login(data: any) {
  console.log("data", data);
  const response = await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  console.log("Response from server: ", res);

  return res;
}
