# PETBUY

Projeto bimestral da disciplina de Interfaces Web — uma loja e-commerce de pets com sistema de cadastro e exibição de produtos (animais) em cards.

Sobre o projeto
 
O PetBuy simula uma loja online de pets, permitindo:


Cadastro de novos pets através de um formulário (nome, telefone, endereço, CPF — dados do responsável pelo cadastro);
Exibição dos pets cadastrados em cards com imagem, título, descrição e preço;
Layout responsivo: o número de colunas dos cards se adapta ao tamanho da tela (de 1 coluna em dispositivos móveis até 4 colunas em telas maiores).


Tecnologias utilizadas

HTML5 — estrutura semântica das páginas;
CSS3 — estilização, layout responsivo com CSS Grid;
JavaScript (Vanilla) — manipulação do DOM, captura de eventos e validação do formulário de cadastro.


Funcionalidades

Cadastro
Formulário com campos: Nome completo, Telefone, Endereço e CPF;
Validação para impedir o envio com campos vazios;
Armazenamento dos cadastros em um array em memória (lista de objetos JavaScript).


Cards de produtos
Grid responsivo construído com grid-template-columns: repeat(auto-fit, minmax(...));
Cada card exibe: imagem, título (nome + tipo/raça do pet), descrição e preço;
Layout adaptado para diferentes resoluções de tela (desktop, tablet e mobile).


Autor

Projeto desenvolvido por Matheus Alves Kutchukian como atividade bimestral da disciplina de Interfaces Web.
