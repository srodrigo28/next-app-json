interface DeleteUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    userName?: string;
}

export default function DeleteUserModal({ isOpen, onClose, onConfirm, userName }: DeleteUserModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
            <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">Excluir Usuário?</h3>
                    <p className="text-gray-400 mb-6 py-5">
                        Você está prestes a remover <span className="text-white font-semibold">"{userName}"</span>.
                        <br />Essa ação não pode ser desfeita.
                    </p>

                    <div className="flex gap-3 w-full">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-medium transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={onConfirm}
                            className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium shadow-lg shadow-red-500/20 transition-colors"
                        >
                            Sim, Excluir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
