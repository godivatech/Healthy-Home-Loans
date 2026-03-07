import { AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    isProcessing?: boolean;
}

export const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, isProcessing = false }: ConfirmModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 font-rubik_0b5097 border border-slate-200">
                <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5 border border-red-100">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed">
                        {message}
                    </p>
                </div>

                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3">
                    <button
                        onClick={onClose}
                        disabled={isProcessing}
                        className="px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-200 transition-colors disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isProcessing}
                        className="px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
                    >
                        {isProcessing ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Deleting...
                            </>
                        ) : (
                            "Delete Record"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
