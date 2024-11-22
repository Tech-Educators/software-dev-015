"use server";

export async function HandleSubmit(formData) {
  const message = formData.get("message");
  console.log(`The message is ${message}, and I am on the server`);
}
