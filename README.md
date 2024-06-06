# Configuração ESLint da Infolive

Este projeto contém a configuração ESLint padrão usada nos projetos da Infolive. Ele define várias regras de estilo de código e plugins para garantir a consistência do código em todos os nossos projetos.

## Uso

Para usar esta configuração em seu projeto, adicione o seguinte ao seu arquivo `.eslintrc`:

```json
{
    "extends": ["eslint-config-infolive"]
}
```

Em seguida, instale a configuração como uma dependência de desenvolvimento:

```
npm install --save-dev eslint-config-infolive
```