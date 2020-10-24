# Instruções
- Criar um fork deste repositório ou um repositório próprio (indiferente).
- Desenvolver uma (ou mais) das seguintes atividades descritas
- Enviar o repositório criado para avaliação com detalhes no README.md que forem pertinentes

Qualquer uma das atividades pode ser feita, sem limite de tempo e sem número mínimo ou necessidade de fazer todas, apenas pedimos que quando enviar o resultado, informe quais foram feitas, o tempo que levou.

Caso tenha iniciado alguma das atividades e a abandonou, pedimos que informe também os tipos de problemas para finalizar envolvidos (limitações de bibliotecas, dificuldades, falta de clareza na definição, tarefa muito longa, etc).

**Importante:** Pode ser usado qualquer auxílio, biblioteca, código de terceiros, plugins e afins; A única restrição é o uso de React ser obrigatório para a solução.

# Atividades
1. Upload de arquivo múltiplo
Utilizar uma biblioteca de sua escolha par afazer upload de arquivos múltiplos, como se fosse para uma galeria de imagens para cadastro de produtos em uma loja, ou imagens na galeria de uma postagem.

2. Consumo de API para envio de arquivos
Na galeria do item anterior, fazer o envio das imagens para a API:
https://teste.topnode.com.br/upload

- Enviar POST para a API, como form-data, com o arquivo no campo "file_upload[file]".

Exemplo HTTP:
```
POST /upload HTTP/1.1
Host: teste.topnode.com.br
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file_upload[file]"; filename="arquivo-para-upload.png"
Content-Type: image/png

(data)
----WebKitFormBoundary7MA4YWxkTrZu0gW
```

- Exemplo da API no postman: https://www.getpostman.com/collections/018502682b8b55b53cd4




3. Implementação de Mapa amCharts
Implementar um mapa do globo utilizando amCharts em uma tela que utiliza React, conforme exemplo abaixo:
https://www.amcharts.com/docs/v4/tutorials/map-with-orthographic-globe-projection/

4. Ligar pontos no mapa amCharts:
No mapa do item 3, implementar linhas de cores diferentes ligando os seguintes países:
- Brasil e Inglaterra
- Brasil e Estados Unidos
- Brasil e Portual
- Brasil e África do Sul

(note que já existe um exemplo no tutorial que faz a ligação por linhas)

5. Colocar quantidade no mapa amCharts:
No mapa do item 3, implementar quantidades por país conforme exemplo:
https://www.amcharts.com/demos/map-image-drill-down/

6. Implementação de Gráficos:
Implementar utilizando qualquer biblioteca de sua escolha (pode ser mais de uma) os gráficos 1 a 5 na raíz deste repositório.

**Observações:**
Note que existem diversas tarefas, algumas complexas e outras mais simples, por isso não há a necessidade de fazer todas.
Note que existem tarefas que existem códigos quase prontos, precisando apenas ser feitas em um código próprio com React e com alterações para encaixar na necessidade passada ou mescla de códigos prontos para um único  resultado.
