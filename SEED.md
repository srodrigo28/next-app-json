# 🌱 Guia de Seed de Dados

Este guia explica como usar os dados de teste no projeto.

## 📦 Arquivo de Seed

O arquivo `banco-seed.json` contém **20 usuários de teste** prontos para uso.

### Usuários Incluídos

| ID | Nome | Email | Senha |
|----|------|-------|-------|
| 1 | Ana Carolina Silva | ana.silva@email.com | ana2024 |
| 2 | Bruno Henrique Costa | bruno.costa@gmail.com | bruno123 |
| 3 | Carla Fernandes Santos | carla.fernandes@hotmail.com | carla456 |
| ... | ... | ... | ... |
| 20 | Vinicius Almeida Pinto | vinicius.pinto@empresa.com | vinicius246 |

> **Total:** 20 usuários com nomes brasileiros realistas

---

## 🚀 Comandos Disponíveis

### 1. Carregar Dados de Teste

```bash
npm run seed
```

**O que faz:**
- Copia os 20 usuários de `banco-seed.json` para `banco.json`
- Substitui todos os dados existentes
- ⚠️ **ATENÇÃO:** Isso apagará os dados atuais!

**Quando usar:**
- Primeira vez que for testar o sistema
- Quando quiser resetar para os dados iniciais
- Para demonstrações e apresentações

---

### 2. Resetar Banco de Dados

```bash
npm run reset
```

**O que faz:**
- Limpa completamente o banco de dados
- Deixa apenas a estrutura vazia: `{"usuarios":[]}`
- Remove todos os usuários

**Quando usar:**
- Começar do zero
- Limpar dados de teste
- Antes de fazer novos testes

---

### 3. Iniciar API com Dados de Teste

```bash
npm run api:seed
```

**O que faz:**
- Carrega os 20 usuários automaticamente
- Inicia o JSON Server na porta 3001
- Tudo em um único comando!

**Quando usar:**
- Primeira vez iniciando o projeto
- Quando quiser começar com dados prontos
- Para demonstrações rápidas

---

## 📋 Fluxos de Trabalho

### Fluxo 1: Primeira Vez no Projeto

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar API com dados de teste (Terminal 1)
npm run api:seed

# 3. Iniciar aplicação (Terminal 2)
npm run dev

# 4. Acessar http://localhost:3000
# ✅ Você verá 20 usuários prontos!
```

### Fluxo 2: Resetar e Começar do Zero

```bash
# 1. Limpar banco
npm run reset

# 2. Iniciar API (Terminal 1)
npm run api

# 3. Iniciar aplicação (Terminal 2)
npm run dev

# 4. Acessar http://localhost:3000
# ✅ Banco vazio, pronto para adicionar usuários
```

### Fluxo 3: Voltar aos Dados Iniciais

```bash
# Se a API estiver rodando, pare com Ctrl+C

# 1. Carregar dados de teste
npm run seed

# 2. Reiniciar API (Terminal 1)
npm run api

# ✅ Os 20 usuários estão de volta!
```

### Fluxo 4: Desenvolvimento Normal

```bash
# Terminal 1: API normal (mantém dados atuais)
npm run api

# Terminal 2: Aplicação
npm run dev

# ✅ Trabalhe normalmente, dados são preservados
```

---

## 🎯 Casos de Uso

### Para Testes de Interface

```bash
npm run api:seed
npm run dev
```
✅ Interface populada, fácil testar paginação, busca, etc.

### Para Testes de CRUD

```bash
npm run reset
npm run api
npm run dev
```
✅ Banco limpo, teste criar/editar/deletar do zero

### Para Demonstrações

```bash
npm run api:seed
npm run dev
```
✅ Dados realistas, apresentação profissional

### Para Desenvolvimento de Features

```bash
npm run api
npm run dev
```
✅ Mantém seus dados de trabalho

---

## 📝 Customizar Dados de Seed

Para adicionar ou modificar usuários de teste:

1. Edite o arquivo `banco-seed.json`
2. Adicione/remova/modifique usuários
3. Execute `npm run seed` para aplicar

**Exemplo de estrutura:**

```json
{
  "usuarios": [
    {
      "id": "21",
      "nome": "Seu Nome Aqui",
      "email": "seu.email@exemplo.com",
      "senha": "senha123"
    }
  ]
}
```

---

## ⚠️ Avisos Importantes

### Backup de Dados

Antes de executar `npm run seed` ou `npm run reset`:

```bash
# Faça backup do banco atual
copy banco.json banco-backup.json
```

### Restaurar Backup

```bash
# Restaurar dados anteriores
copy banco-backup.json banco.json
```

### Dados em Produção

> **🚨 NUNCA use esses comandos em produção!**
> 
> Estes comandos são apenas para desenvolvimento e testes locais.

---

## 🔄 Resumo dos Comandos

| Comando | Ação | Dados Resultantes |
|---------|------|-------------------|
| `npm run seed` | Carrega dados de teste | 20 usuários |
| `npm run reset` | Limpa banco | 0 usuários |
| `npm run api:seed` | Carrega dados + inicia API | 20 usuários |
| `npm run api` | Inicia API | Mantém dados atuais |

---

## 💡 Dicas

1. **Use `api:seed` na primeira vez** - Mais rápido e prático
2. **Use `reset` para testes limpos** - Garante ambiente controlado
3. **Use `seed` quando precisar resetar** - Volta aos dados iniciais
4. **Faça backup antes de resetar** - Evita perda de dados importantes

---

## 🆘 Problemas Comuns

### "Comando não encontrado"

**Solução:** Certifique-se de estar na pasta do projeto:
```bash
cd c:\html-impressionador\app1
npm run seed
```

### "Arquivo não encontrado"

**Solução:** Verifique se `banco-seed.json` existe:
```bash
dir banco-seed.json
```

### Dados não aparecem na interface

**Solução:** Reinicie a API após carregar dados:
```bash
# Pare a API (Ctrl+C)
npm run api
```

---

<div align="center">

**🌱 Pronto para testar com dados realistas!**

</div>
