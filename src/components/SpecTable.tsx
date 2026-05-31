export function SpecTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm">
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="bg-navy text-white">
            {headers.map((h) => (
              <th key={h} className="px-5 py-4 text-left font-heading font-bold" scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-cool-gray"}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`px-5 py-4 ${cellIndex === 0 ? "font-semibold text-charcoal" : "text-text-secondary"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
