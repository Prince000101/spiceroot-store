const Table = ({ data, columns }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-cream/50 font-dm text-sm">
        No data available
      </div>
    );
  }

  return (
    <div className="min-w-[600px]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-charcoal-light">
            {columns.map((col, idx) => (
              <th key={idx} className="border-b border-gray-200 dark:border-forest-light/30 p-3 text-left text-xs sm:text-sm font-semibold text-forest dark:text-cream/80">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-forest-light/10 transition-colors border-b border-gray-100 dark:border-forest-light/10">
              {columns.map((col, i) => (
                <td key={i} className="p-3 text-xs sm:text-sm text-gray-700 dark:text-cream/70">
                  {row[col.toLowerCase().replace(/\s+/g, '')] || row[col.toLowerCase()] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
