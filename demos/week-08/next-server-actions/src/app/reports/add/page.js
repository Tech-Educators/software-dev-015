import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function AddReportPage() {
  async function handleAddReport(formData) {
    "use server";

    const location = formData.get("location");
    const weather = formData.get("weather");
    const date = formData.get("date");

    await db.query(
      `INSERT INTO reports (location, weather, date) VALUES ($1, $2, $3)`,
      [location, weather, date]
    );

    redirect("/reports");
  }

  return (
    <div>
      <h2>Add New Report</h2>
      <form action={handleAddReport}>
        <label>Location</label>
        <input name="location" placeholder="Location" />

        <label>Weather</label>
        <input name="weather" placeholder="Weather" />

        <label>Date</label>
        <input name="date" type="date" />

        <button>Add report</button>
      </form>
    </div>
  );
}
