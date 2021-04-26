# CONSULTAR DADOS DA NOTA FISCAL ATRAVÉS DE SEU ARQUIVO XML

Os dados que serão retornados são:
* Nome cliente
* Numero de NF (new)
* UF
* Peso Bruto
* Volume
* Valor Total

# FUNCIONAMENTO
Deixar os arquivos na mesma pasta

Acessar o index.html

Clicar em: Escolher arquivos

Selecionar os arquivos .xml que deseja obter os dados (pode selecionar pela caixa de arquivos ou arrastando os arquivos)

Logo após selecionar, as informações irão aparecer

~~O texto está separado por "|" para facilitar passar as informações para Excel, por exemplo~~
Uma tabela será criada, dinamicamente, com os dados dos arquivos xml

~~Passando para Excel é só pedir para o texto ir para colunas e escolher "|" como separador~~
Colar no Excel. Os dados serão atribuídos a cada célula separadamente.

# IMPORTANTE!

As consultas serão realizadas em xml que contenham as tags
* xNome, UF, pesoB, qVol, vNF, nNF

