export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: (string | boolean)[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm">
      <table className="w-full min-w-[600px] text-sm">
        <thead>
          <tr className="bg-navy text-white">
            <th className="px-5 py-4 text-left font-heading font-bold" scope="col">Feature</th>
            {columns.map((col) => (
              <th key={col} className="px-5 py-4 text-center font-heading font-bold" scope="col">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.label} className={rowIndex % 2 === 0 ? "bg-white" : "bg-cool-gray"}>
              <td className="px-5 py-4 font-semibold text-charcoal">{row.label}</td>
              {row.values.map((val, colIndex) => (
                <td key={colIndex} className="px-5 py-4 text-center">
                  {typeof val === "boolean" ? (
                    val ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-success/10 text-success font-bold" aria-label="Yes">
                        ✓
                      </span>
                    ) : (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cool-gray text-text-secondary" aria-label="No">
                        &ndash;
                      </span>
                    )
                  ) : (
                    <span className="text-charcoal">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
