import { CheckSquare, Clock } from "lucide-react";

interface Column {
    header: string;
    accessor: string;
    render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
    data: any[];
    columns: Column[];
    isLoading: boolean;
    emptyMessage?: string;
}

export const DataTable = ({ data, columns, isLoading, emptyMessage = "No data found." }: DataTableProps) => {
    if (isLoading) {
        return (
            <div className="w-full h-64 flex flex-col items-center justify-center bg-white rounded-none border border-slate-100 shadow-sm">
                <div className="w-8 h-8 border-2 border-slate-100 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="text-slate-400 text-base font-medium uppercase tracking-widest">Loading Records</p>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className="w-full h-64 flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-none border-dashed">
                <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center border border-slate-200 mb-4 shadow-sm pb-1">
                    <CheckSquare className="w-5 h-5 text-slate-300" />
                </div>
                <p className="text-slate-400 text-base font-medium uppercase tracking-widest">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden font-rubik_0b5097">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            {columns.map((col, i) => (
                                <th
                                    key={i}
                                    className="px-6 py-5 text-[11px] font-bold text-primary uppercase tracking-[0.1em] whitespace-nowrap bg-gradient-to-b from-slate-50 to-white"
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((row, rowIndex) => (
                            <tr
                                key={row.id || rowIndex}
                                className="group hover:bg-slate-50 transition-colors duration-200 cursor-default"
                            >
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="px-6 py-4 text-base text-slate-600 whitespace-nowrap group-hover:text-slate-900"
                                    >
                                        {col.render ? col.render(row[col.accessor], row) : row[col.accessor] || <span className="text-slate-300">-</span>}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Total Records: <span className="text-primary ml-1">{data.length}</span>
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Live Sync Active
                </span>
            </div>
        </div>
    );
};
