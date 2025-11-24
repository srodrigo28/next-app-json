import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User } from '../types/user';

const userSchema = z.object({
    nome: z.string().min(1, 'O nome é obrigatório'),
    email: z.string().email('Formato de e-mail inválido'),
    senha: z.string().min(3, 'A senha deve ter no mínimo 3 caracteres'),
});

export type UserFormData = z.infer<typeof userSchema>;

interface UserFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: UserFormData) => Promise<void>;
    initialData?: User | null;
    loading: boolean;
}

export default function UserFormModal({ isOpen, onClose, onSubmit, initialData, loading }: UserFormModalProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            nome: '',
            email: '',
            senha: '',
        },
    });

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                reset({
                    nome: initialData.nome,
                    email: initialData.email,
                    senha: initialData.senha || '',
                });
            } else {
                reset({ nome: '', email: '', senha: '' });
            }
        }
    }, [isOpen, initialData, reset]);

    if (!isOpen) return null;

    const isEditing = !!initialData;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
            <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl max-w-lg w-full p-8 transform transition-all scale-100 animate-in fade-in zoom-in duration-200 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                    <span className={`w-2 h-8 rounded-full ${isEditing ? 'bg-amber-500' : 'bg-indigo-500'}`}></span>
                    {isEditing ? 'Editar Usuário' : 'Novo Usuário'}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 ml-1">Nome Completo</label>
                        <input
                            type="text"
                            {...register('nome')}
                            className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.nome ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-indigo-500/50'}`}
                            placeholder="Ex: Ana Silva"
                            disabled={loading}
                            autoFocus
                        />
                        {errors.nome && <p className="text-red-400 text-xs ml-1">{errors.nome.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 ml-1">E-mail</label>
                        <input
                            type="email"
                            {...register('email')}
                            className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-indigo-500/50'}`}
                            placeholder="Ex: ana@email.com"
                            disabled={loading}
                        />
                        {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gray-400 ml-1">Senha</label>
                        <input
                            type="password"
                            {...register('senha')}
                            className={`w-full bg-black/20 border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.senha ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-indigo-500/50'}`}
                            placeholder="••••••••"
                            disabled={loading}
                        />
                        {errors.senha && <p className="text-red-400 text-xs ml-1">{errors.senha.message}</p>}
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 font-bold py-3.5 rounded-xl transition-all"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex-1 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${isEditing
                                ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-amber-500/20'
                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/20'
                                }`}
                        >
                            {loading ? 'Salvando...' : (isEditing ? 'Salvar Alterações' : 'Criar Usuário')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
