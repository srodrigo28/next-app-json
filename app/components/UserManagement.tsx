'use client';

import { useState, useEffect } from 'react';
import { User } from '../types/user';
import DeleteUserModal from './DeleteUserModal';
import UserFormModal, { UserFormData } from './UserFormModal';
import UserTable from './UserTable';
import UserListHeader from './UserListHeader';

export default function UserManagement({ initialUsers }: { initialUsers: User[] }) {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState<string | number | null>(null);

    // Estados para o Modal de Exclusão
    const [userToDelete, setUserToDelete] = useState<User | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Estado para o Modal de Formulário (Criar/Editar)
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);

    // Sincroniza com dados iniciais se mudarem (ex: revalidate do server)
    useEffect(() => {
        setUsers(initialUsers);
    }, [initialUsers]);

    const fetchUsers = async () => {
        try {
            const res = await fetch('http://localhost:3001/usuarios');
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    const openCreateModal = () => {
        setEditingId(null);
        setIsFormModalOpen(true);
    };

    const openEditModal = (user: User) => {
        setEditingId(user.id || null);
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setIsFormModalOpen(false);
        setEditingId(null);
    };

    const handleFormSubmit = async (data: UserFormData) => {
        setLoading(true);
        try {
            if (editingId) {
                // Modo Edição
                const res = await fetch(`http://localhost:3001/usuarios/${editingId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    const updatedUser = await res.json();
                    setUsers(users.map(u => u.id === editingId ? updatedUser : u));
                    closeFormModal();
                }
            } else {
                // Modo Criação
                const res = await fetch('http://localhost:3001/usuarios', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    const newUser = await res.json();
                    setUsers([...users, newUser]);
                    closeFormModal();
                }
            }
        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
        } finally {
            setLoading(false);
        }
    };

    // Abre o modal em vez de deletar direto
    const requestDelete = (user: User) => {
        setUserToDelete(user);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!userToDelete || !userToDelete.id) return;

        try {
            await fetch(`http://localhost:3001/usuarios/${userToDelete.id}`, {
                method: 'DELETE',
            });
            setUsers(users.filter(user => user.id !== userToDelete.id));
            if (editingId === userToDelete.id) {
                closeFormModal();
            }
            setIsDeleteModalOpen(false);
            setUserToDelete(null);
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
        }
    };

    // Encontrar o usuário sendo editado para passar como initialData
    const editingUser = users.find(u => u.id === editingId) || null;

    return (
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 relative">
            <DeleteUserModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                userName={userToDelete?.nome}
            />

            <UserFormModal
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                onSubmit={handleFormSubmit}
                initialData={editingUser}
                loading={loading}
            />

            <div className="mb-8 sm:mb-12 text-center space-y-2 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm px-4">
                    Painel de Usuários
                </h1>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg">Gerenciado via JSON Server</p>
            </div>

            {/* Container Principal (Tabela Full Width) */}
            <div className="w-full">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <UserListHeader
                        userCount={users.length}
                        onCreate={openCreateModal}
                        onRefresh={fetchUsers}
                    />
                    <UserTable
                        users={users}
                        onEdit={openEditModal}
                        onDelete={requestDelete}
                        editingId={editingId}
                    />
                </div>
            </div>
        </div>
    );
}
