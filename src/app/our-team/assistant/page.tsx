import Link from "next/link";

// Placeholder data for assistants
const assistants = [
    {
        id: "assistant-1",
        name: "Assistant Name 1",
        role: "Research Assistant",
        nip: "12345678",
    },
    {
        id: "assistant-2",
        name: "Assistant Name 2",
        role: "Research Assistant",
        nip: "87654321",
    },
];

export default function AssistantListPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase text-gray-900 mb-2">Our Team</h1>
                    <p className="text-gray-600">Research Assistant</p>
                </div>

                {/* Assistants Grid */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {assistants.map((assistant) => (
                            <div key={assistant.id} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center h-full shadow-sm hover:shadow-md transition-shadow">
                                {/* Profile Image Placeholder */}
                                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-gray-500 font-medium">
                                    Photo
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 text-center">
                                    {assistant.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-2">{assistant.nip}</p>
                                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{assistant.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
