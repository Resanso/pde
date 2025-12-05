import { assistants, Assistant } from "@/data/assistants";

export default function AssistantPage() {
    // Filter by role
    const coordinator = assistants.find(a => a.role === "Assistant Coordinator");
    const admins = assistants.filter(a => a.role === "Admin");
    const divisionA = assistants.filter(a => a.role === "Division A");
    const divisionB = assistants.filter(a => a.role === "Division B");
    const divisionC = assistants.filter(a => a.role === "Division C");

    const AssistantCard = ({ assistant }: { assistant: Assistant }) => (
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow min-w-[200px] aspect-square">
            {/* User Icon Placeholder */}
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-black">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
            </div>

            <h3 className="text-lg font-bold text-black text-center uppercase">
                {assistant.name}
            </h3>
        </div>
    );

    const SectionTitle = ({ title }: { title: string }) => (
        <h2 className="text-sm font-bold text-center mb-6 uppercase tracking-wider text-black">
            {title}
        </h2>
    );

    return (
        <main className="min-h-screen bg-white pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Assistant Coordinator */}
                {coordinator && (
                    <div className="flex flex-col items-center">
                        <SectionTitle title="Assistant Coordinator" />
                        <div className="w-64">
                            <AssistantCard assistant={coordinator} />
                        </div>
                    </div>
                )}

                {/* Admin */}
                {admins.length > 0 && (
                    <div className="flex flex-col items-center">
                        <SectionTitle title="Admin" />
                        <div className="flex flex-wrap justify-center gap-8">
                            {admins.map(a => (
                                <div key={a.id} className="w-64">
                                    <AssistantCard assistant={a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Division A */}
                {divisionA.length > 0 && (
                    <div className="flex flex-col items-center">
                        <SectionTitle title="Division A" />
                        <div className="flex flex-wrap justify-center gap-8">
                            {divisionA.map(a => (
                                <div key={a.id} className="w-64">
                                    <AssistantCard assistant={a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Division B */}
                {divisionB.length > 0 && (
                    <div className="flex flex-col items-center">
                        <SectionTitle title="Division B" />
                        <div className="flex flex-wrap justify-center gap-8">
                            {divisionB.map(a => (
                                <div key={a.id} className="w-64">
                                    <AssistantCard assistant={a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Division C */}
                {divisionC.length > 0 && (
                    <div className="flex flex-col items-center">
                        <SectionTitle title="Division C" />
                        <div className="flex flex-wrap justify-center gap-8">
                            {divisionC.map(a => (
                                <div key={a.id} className="w-64">
                                    <AssistantCard assistant={a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}
