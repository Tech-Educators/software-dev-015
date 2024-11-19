import { db } from "@/utils/db";

export default async function ReportsPage() {
  const result = await db.query(
    `SELECT id, location, weather, TO_CHAR(date, 'YYYY-MM-DD') AS date FROM reports`
  );
  const reports = result.rows;

  return (
    <div>
      <h2>Reports</h2>
      {reports.map((report) => {
        return (
          <div key={report.id}>
            <h3>{report.location}</h3>
            <h4>
              {report.weather} - {report.date}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
