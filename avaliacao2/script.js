/* Função calculate() chamada quando o usuário clica em algum dos 4 botões das operações.
A funlção recebe como parâmetro (operador) o sinal do botão que é clicado pelo usuário */
function calculate(operator) {
	var number1 = String(document.getElementById("number1").value);// variável recebe o valor do primeiro 'input'
	var number2 = String(document.getElementById("number2").value);// variável recebe o valor do segundo 'input'
	// A conversão para String é usada apenas para verificar se o usuário não informou nenhum número
	var result = 0;//  variável utilizada para guardar o resultado da operação escolhida pelo usuário

	// Condição testa se o usuário inseriu números e não deixou em branco cada 'input'.
	if (number1 == "" || number2 == "") {
		alert("Informe dois números!")// Se o usário deixar qualquer 'ipunt' em branco uma 'alert' é disparado
	}
	else {
		// Caso nenhum 'input' seja vazio as váriaveis são convertidas para 'Number' para a realização do cálculo
		number1 = Number(number1)
		number2 = Number(number2)
		// Switch verefica que sinal está sendo passado pelo parâmetro (operator) para realizar a operação desejada pelo usuário
		switch(operator) {
			case '-':
				result = number1 - number2;
				break;
			case '+':
				result = number1 + number2;
				break;
			case '/':
				result = number1 / number2;
				break;
			case 'x':
				result = number1 * number2;
				break;
		}
		document.getElementById("total").value = result;
	}
}
/* Função chooseCourse() é chamada quando o usuário realiza um duplo click em qualquer curso dos 2 'select'
Função recebe como parâmetro (element) um curso escolhido pelo usuário, ou seja, toda vez que o usuário realizar 
um duplo click no 'option' do curso, a função é chamada e o texto do curso clicado é passado como parâmetro */
function chooseCourse(element){
	var newCourse = element.cloneNode(true);// variável recebe/clona o valor/curso que é passado pelo parâmetro (element)

	// Condição testa se o 'element' pertence ao 'pai/select' dos cursos disponíveis ou dos cursos escolhidos
	if(element.parentElement.id=="course"){
		/* Se o curso selecionado for do 'select' de cursos disponíveis, ele adiciona a variável 'newCourse' 
		no 'select/filho' dos cursos escolhidos ("choice") */
		document.getElementById("choice").appendChild(newCourse);
	}
	else {
		/* Se o curso selecionado for do 'select' dos cursos escolhidos, ele adiciona a variável 'newCourse' 
		no 'select/filho' dos cursos disponíveis ("course") */
		document.getElementById("course").appendChild(newCourse);
	}
	element.remove();// Remove o curso escolhido do 'select'
}
// Função é chamada quando o usuário clica no botão 'exportar'
function exportTableToCSV() {
    var csv = []// Variável vetor que recebe todos os dados da tabela
    var rows = document.querySelectorAll("table tr");// Variável que recebe todas as linhas 'tr' da tabela
    
    for (var i = 0; i < rows.length; i++) {
        var row = []// Variável vetor que recebe todos os dados/textos das colunas (variável 'cols')
        var cols = rows[i].querySelectorAll("td, th");// Variável que recebe os dados das células 'td' e o cabeçalho 'th' da tabela 
        
        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);// Adiciona no vetor 'row' os dados/textos das colunas
        
        csv.push(row.join(";"));// Adiciona no vetor 'csv' o outro vetor 'row' acrescentado um ';' depois de cada 'td'
    }
    document.getElementById("text").value = csv.join("\n")/* Adicona no 'textarea' os dados armazenados no vetor 'csv' pulando uma 
    linha entre os dados (depois de cada 'tr') */
}