interface UserListHeaderProps {
    userCount: number;
    onCreate: () => void;
    onRefresh: () => void;
}

export default function UserListHeader({ userCount, onCreate, onRefresh }: UserListHeaderProps) {
    return (
        <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-semibold text-white">Base de Dados</h2>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                    onClick={onCreate}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/20 hover:scale-105 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Novo Usuário
                </button>

                <div className="h-6 w-px bg-white/10 mx-1"></div>

                <button
                    onClick={onRefresh}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    title="Atualizar lista"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
                <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/30">
                    {userCount} Registros
                </span>
            </div>
        </div>
    );
}
