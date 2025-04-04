---
title: Parser FAQ
tags:
  - FAQ
---

# Parser FAQ

## 命名规范

- Antlr
  - Lexical Rules - UPPERCASE - IDENTIFIER
  - Parser Rules - camelCase - identifier
  - Token - UPPERCASE - TOKEN
- PEG
  - Entry - PascalCase
  - rule - camelCase
  - KEYWORD
  - `_` whitespace - 例如 可选/单行
  - `__` whitespace2 - 例如 必须/多行

## Antlr vs PEG

- PEG - Parsing expression grammar
  - 是一套通用的 解析表达文法
  - 不同语言有不同实现，但能力和处理逻辑相同
- Antlr
  - 是一个 `LL(*)` 语法解析器实现
  - 核心为 Java 语言，可以生成不同目标语言

**书写语法区别**

- PEG
  - 语法结构更简单，类似于拼装复杂正则，不区分语法和词法
  - 执行逻辑自上下下一次性执行出结果
  - 接近 Regex
  - 优点
    - 简单直观的语法，易于理解和编写
    - 没有解析歧义，规则匹配顺序明确
    - 适合处理上下文相关语法
  - 缺点
    - 不能处理 LR，需要处理为 RR
    - 复杂语法需要更多的规则和优先级管理 - 每个优先级一个规则
- Antlr
  - 语法区分词法和语法 - Lexer 和 Grammar
  - 解析是有分词逻辑 - Tokenize
  - 将 Token 放入 Grammar 逻辑得到最终的 AST
  - 优点
    - 功能强大 - 支持复杂语法和词法分析
    - 支持 LR
    - 生态丰富
  - 缺点
    - 语法和词法分离 - 复杂
    - 速度可能不如 PEG

**概念理论区别**

- PEG
  - 类似 CFG 但并不是子集
    - 例如 `A{n}B{n}C{n}` 能表达上下文相关语法
  - 没有二义性
    - `A / AB` 永远不会匹配到第二个规则
  - Lookahead 可以包含递归
    - 如果 PEG 不包含递归 LA 则可以翻译为 Antlr
- Antlr
  - `LL(*)`, CFG 子集
  - `A / AB` 可能匹配第二个规则
  - Lookahead 只能是简单的模式 - DFA

**功能区别**

- PEG
  - 功能简单，每个语言一般都有实现，语法不同但相似
  - 一般按需捕获 text 内容
  - 书写复杂语法需要注意优先级 - [Operator-precedence parser](https://en.wikipedia.org/wiki/Operator-precedence_parser)
  - 不能左递归
- Antlr
  - 功能强大，支持非常多语言
  - 周边工具较多 - IDE 支持

```antlr
// PEG 优先级 - 有序，无歧义
AddExp: MultiExp ( '+' MultiExp)*
MultiExp: Primary ( '*' Primary)
Primary: [0-9]+

// Antlr 优先级 - 左递归
expression
  : expression '*' expression
  | expression '+' expression
  | Int
  ;
Int: [0-9]+ ;
```

- 参考
  - [Left Recursion in Parsing Expression Grammars](https://arxiv.org/abs/1207.0443)

## AST vs CST

- AST - Abstract Syntax Tree - 抽象语法树
  - 抽象结构 - 一般不包含语法规则
  - 保留有意义的节点，忽略细节
  - 简洁 - 便于后续的编译优化
  - 场景
    - 语义分析、优化和代码生成
- CST - Concrete Syntax Tree - 具体语法树
  - 具体结构 - 包含语法规则
  - 保留细节
  - 场景
    - 代码格式化
    - 语法错误提示

---

- 通常先生成 CST，再转换为 AST

**例子**

```
3 + 4 * 5
```

```txt title='AST'
  +
 / \
3   *
   / \
  4   5
```

```txt title='CST'
    Expr
   / | \
  3  +  Expr
        / | \
       4  *  5
```

## OctetString

- Sequence of Byte
- ASN.1 OCTET STRING - TLV
- LDAP - OID
  - 1.3.6.1.4.1.1466.115.121.1.40
  - Microsoft Active Directory 2.5.5.10
- 参考
  - https://docs.microsoft.com/en-us/windows/win32/seccertenroll/about-octet-string
  - https://ldapwiki.com/wiki/OctetString
  - https://www.iso.org/obp/ui/#iso:std:iso-iec:8825:-7:ed-2:v1:en

## Precedence

**PL/SQL**

| op                                             | for                                  |
| ---------------------------------------------- | ------------------------------------ |
| +, -                                           | identity, negation                   |
| \*, /                                          | multiplication, division             |
| +, -                                           | addition, subtraction, concatenation |
| =, <, >, <=, >=, <>, !=, IS, LIKE, BETWEEN, IN | comparion                            |
| !, NOT                                         | logical negation                     |
| AND                                            | conjunction                          |
| OR                                             | inclusion                            |
