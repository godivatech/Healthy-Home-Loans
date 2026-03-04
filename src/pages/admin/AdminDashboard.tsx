import { useEffect, useState } from "react";
import { Users, FileText, Download } from "lucide-react";
import { DataTable } from "@/components/admin/DataTable";
import { getContactSubmissions, getLoanLeads } from "@/lib/firebase";

export const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState<'contacts' | 'leads'>('contacts');

    // Data States
    const [contacts, setContacts] = useState<any[]>([]);
    const [leads, setLeads] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [contactsData, leadsData] = await Promise.all([
                    getContactSubmissions(),
                    getLoanLeads()
                ]);

                setContacts(contactsData);
                setLeads(leadsData);
            } catch (error) {
                console.error("Failed to load dashboard data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (timestamp: any) => {
        if (!timestamp) return 'Unknown';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return (
            <div className="flex flex-col">
                <span className="text-slate-800 font-medium">
                    {new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(date)}
                </span>
                <span className="text-xs text-slate-500">
                    {new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit' }).format(date)}
                </span>
            </div>
        );
    };

    const contactColumns = [
        { header: "Date Received", accessor: "timestamp", render: formatDate },
        { header: "Client Name", accessor: "name", render: (val: string) => <span className="font-bold text-primary">{val}</span> },
        { header: "Email Address", accessor: "email" },
        { header: "Phone Number", accessor: "phone" },
        { header: "Inquiry Subject", accessor: "subject", render: (val: string) => <span className="text-slate-700 bg-slate-100 px-2.5 py-1 rounded truncate max-w-[200px] inline-block text-xs font-medium">{val}</span> },
        { header: "Message", accessor: "message", render: (val: string) => <div className="max-w-[250px] truncate text-slate-500" title={val}>{val}</div> }
    ];

    const leadColumns = [
        { header: "Date Received", accessor: "timestamp", render: formatDate },
        { header: "Client Name", accessor: "name", render: (val: string) => <span className="font-bold text-primary">{val}</span> },
        { header: "City", accessor: "city" },
        { header: "Mobile", accessor: "mobile" },
        { header: "Loan Amount", accessor: "loanDetails", render: (val: any) => val?.amount ? <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded font-bold text-xs border border-emerald-100">{val.amount}</span> : '-' },
        { header: "Est. EMI", accessor: "loanDetails", render: (val: any) => val?.emi ? <span className="font-medium text-slate-700">₹{val.emi}</span> : '-' }
    ];

    const exportToCsv = (data: any[], filename: string) => {
        if (!data || !data.length) return;

        const processData = data.map(item => {
            const newItem = { ...item };
            if (newItem.timestamp?.toDate) {
                newItem.timestamp = newItem.timestamp.toDate().toISOString();
            }
            if (newItem.loanDetails) {
                newItem.loanAmount = newItem.loanDetails.amount || '';
                newItem.loanEmi = newItem.loanDetails.emi || '';
                delete newItem.loanDetails;
            }
            return newItem;
        });

        const headers = Object.keys(processData[0]).join(',');
        const rows = processData.map(obj => Object.values(obj).map(val => `"${val}"`).join(',')).join('\n');
        const csv = `${headers}\n${rows}`;

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="font-rubik_0b5097 space-y-8 animate-in fade-in duration-500">

            {/* Header / Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-slate-200 pb-6">
                <div>
                    <h2 className="text-3xl font-bold text-primary tracking-tight">System Overview</h2>
                    <p className="text-slate-500 mt-2 font-medium">Monitoring all inbound client acquisitions and communications.</p>
                </div>

                <button
                    onClick={() => exportToCsv(activeTab === 'contacts' ? contacts : leads, activeTab)}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                    <Download className="w-4 h-4" />
                    Export {activeTab === 'contacts' ? 'Contacts' : 'Leads'}
                </button>
            </div>

            {/* KPI Cards / Tab Switcher */}
            <div className="flex flex-col md:flex-row gap-6">
                <div
                    onClick={() => setActiveTab('contacts')}
                    className={`flex-1 p-6 border cursor-pointer transition-all duration-300 relative overflow-hidden group rounded-xl ${activeTab === 'contacts'
                        ? 'bg-primary border-primary shadow-lg scale-[1.02]'
                        : 'bg-white border-slate-200 hover:border-primary/50 hover:bg-slate-50'
                        }`}
                >
                    <div className="absolute top-0 right-0 -mr-6 -mt-6">
                        <FileText className={`w-32 h-32 opacity-[0.05] transform -rotate-12 ${activeTab === 'contacts' ? 'text-white' : 'text-primary'}`} />
                    </div>

                    <div className="relative z-10 flex items-center gap-5">
                        <div className={`p-4 rounded-xl ${activeTab === 'contacts' ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary'}`}>
                            <FileText className="w-7 h-7" />
                        </div>
                        <div>
                            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${activeTab === 'contacts' ? 'text-primary-foreground/70' : 'text-slate-500'}`}>
                                Gen. Inquiries
                            </p>
                            <h3 className={`text-4xl font-black tracking-tighter ${activeTab === 'contacts' ? 'text-primary-foreground' : 'text-primary'}`}>
                                {contacts.length}
                            </h3>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => setActiveTab('leads')}
                    className={`flex-1 p-6 border cursor-pointer transition-all duration-300 relative overflow-hidden group rounded-xl ${activeTab === 'leads'
                        ? 'bg-primary border-primary shadow-lg scale-[1.02]'
                        : 'bg-white border-slate-200 hover:border-primary/50 hover:bg-slate-50'
                        }`}
                >
                    <div className="absolute top-0 right-0 -mr-6 -mt-6">
                        <Users className={`w-32 h-32 opacity-[0.05] transform -rotate-12 ${activeTab === 'leads' ? 'text-white' : 'text-primary'}`} />
                    </div>

                    <div className="relative z-10 flex items-center gap-5">
                        <div className={`p-4 rounded-xl ${activeTab === 'leads' ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary'}`}>
                            <Users className="w-7 h-7" />
                        </div>
                        <div>
                            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${activeTab === 'leads' ? 'text-primary-foreground/70' : 'text-slate-500'}`}>
                                Loan Check Leads
                            </p>
                            <h3 className={`text-4xl font-black tracking-tighter ${activeTab === 'leads' ? 'text-primary-foreground' : 'text-primary'}`}>
                                {leads.length}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Table Section */}
            <div className="pt-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-6 bg-primary rounded-full"></div>
                    <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
                        {activeTab === 'contacts' ? 'Contact Submissions Feed' : 'Acquired Loan Leads Feed'}
                    </h3>
                </div>

                {activeTab === 'contacts' ? (
                    <DataTable
                        data={contacts}
                        columns={contactColumns}
                        isLoading={isLoading}
                        emptyMessage="Awaiting initial submissions."
                    />
                ) : (
                    <DataTable
                        data={leads}
                        columns={leadColumns}
                        isLoading={isLoading}
                        emptyMessage="Awaiting loan capture leads."
                    />
                )}
            </div>

        </div>
    );
};
