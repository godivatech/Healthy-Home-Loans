import { X } from "lucide-react";

interface ViewModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
    type: 'contacts' | 'leads' | null;
}

export const ViewModal = ({ isOpen, onClose, data, type }: ViewModalProps) => {
    if (!isOpen || !data) return null;

    const formatDate = (timestamp: any) => {
        if (!timestamp) return 'Unknown';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return new Intl.DateTimeFormat('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        }).format(date);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 font-rubik_0b5097 border border-slate-200 flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 relative shrink-0">
                    <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">
                        {type === 'contacts' ? 'General Inquiry Details' : 'Loan Lead Details'}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                        title="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        <div className="col-span-1 sm:col-span-2 space-y-1">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Date Received</span>
                            <div className="text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-100">{formatDate(data.timestamp)}</div>
                        </div>

                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Client Name</span>
                            <div className="text-primary font-bold bg-primary/5 px-4 py-2.5 rounded-lg border border-primary/10">{data.name || '-'}</div>
                        </div>

                        {type === 'contacts' && (
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                                <div className="text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-100">{data.email || '-'}</div>
                            </div>
                        )}

                        <div className="space-y-1">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Phone Number</span>
                            <div className="text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-100">{data.phone || data.mobile || '-'}</div>
                        </div>

                        {type === 'leads' && (
                            <div className="space-y-1">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">City</span>
                                <div className="text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-100">{data.city || '-'}</div>
                            </div>
                        )}

                        {type === 'leads' && data.loanDetails && (
                            <>
                                <div className="space-y-1">
                                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">Loan Amount</span>
                                    <div className="text-emerald-700 font-bold bg-emerald-50 px-4 py-2.5 rounded-lg border border-emerald-100">
                                        {data.loanDetails.amount || '-'}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Est. EMI</span>
                                    <div className="text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-100">
                                        {data.loanDetails.emi ? `₹${data.loanDetails.emi}` : '-'}
                                    </div>
                                </div>
                            </>
                        )}

                        {type === 'contacts' && (
                            <div className="col-span-1 sm:col-span-2 space-y-1">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Inquiry Subject</span>
                                <div className="text-slate-800 font-medium inline-block bg-slate-100 px-3 py-1.5 rounded">{data.subject || '-'}</div>
                            </div>
                        )}

                        {type === 'contacts' && (
                            <div className="col-span-1 sm:col-span-2 space-y-1">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Message</span>
                                <div className="text-slate-600 leading-relaxed bg-slate-50 px-4 py-3.5 rounded-lg border border-slate-200 min-h-[100px] whitespace-pre-wrap">
                                    {data.message || '-'}
                                </div>
                            </div>
                        )}

                        {data.source && (
                            <div className="col-span-1 sm:col-span-2 mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                                <span>Source: <span className="uppercase font-medium">{data.source}</span></span>
                                <span>ID: <span className="font-mono">{data.id}</span></span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
