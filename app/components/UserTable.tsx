import { User } from '../types/user';

interface UserTableProps {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (user: User) => void;
    editingId?: string | number | null;
}

export default function UserTable({ users, onEdit, onDelete, editingId }: UserTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-black/20 text-gray-400 text-xs uppercase tracking-wider">
                        <th className="p-5 font-medium">ID</th>
                        <th className="p-5 font-medium">Usuário</th>
                        <th className="p-5 font-medium">Contato</th>
                        <th className="p-5 font-medium text-right">Ações</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {users.map((user) => (
                        <tr key={user.id} className={`group transition-colors ${editingId === user.id ? 'bg-amber-500/5 border-l-2 border-amber-500' : 'hover:bg-white/[0.02]'}`}>
                            <td className="p-5 text-gray-500 font-mono text-sm">#{user.id}</td>
                            <td className="p-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-xs font-bold text-gray-300 border border-white/10">
                                        {user.nome.charAt(0)}
                                    </div>
                                    <span className="text-gray-200 font-medium">{user.nome}</span>
                                </div>
                            </td>
                            <td className="p-5 text-gray-400 text-sm">{user.email}</td>
                            <td className="p-5 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <button
                                        onClick={() => onEdit(user)}
                                        className="text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 p-2 rounded-lg transition-colors"
                                        title="Editar"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => onDelete(user)}
                                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-colors"
                                        title="Excluir"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan={4} className="p-8 text-center text-gray-500">
                                Nenhum usuário encontrado ou conectando ao servidor...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
