var recursos = []; 
//recursos de matematica
	var recurso1 = {
		miniatura: "recursos/img/Desktop/Matematica/1/Meualbumgeometrico.png", 
		nome: "Meu Álbum Geométrico",
		ano: "1",
		id: "157"
	};
	recursos.push(recurso1);

	var recurso2 = {
		miniatura: "recursos/img/Desktop/Matematica/2/FazendaRived.png", 
		nome: "Fazenda Rived",
		ano: "2",
		id: "158"
	};
	recursos.push(recurso2);
	 
	var recurso3 = {
		miniatura: "recursos/img/Desktop/Matematica/3/CirculoMagico.png", 
		nome: "Cí­rculo Mágico",
		ano: "3",
		id: "174"
	};
	recursos.push(recurso3);

	var recurso4 = {
		miniatura: "recursos/img/Desktop/Matematica/3/Acerte.png", 
		nome: "Acerte o Resultado",
		ano: "3",
		id: "189"
	};
	recursos.push(recurso4);

	var recurso5 = {
		miniatura: "recursos/img/Desktop/Matematica/4/EhObicho.png", 
		nome: "Eh o Bicho",
		ano: "4",
		id: "201"
	};
	recursos.push(recurso5);

	var recurso6 = {
		miniatura: "recursos/img/Desktop/Matematica/2/tabuadado9.png", 
		nome: "Tabuada 9",
		ano: "5",
		id: "171"
	};
	recursos.push(recurso6);

	var recurso7 = {
		miniatura: "recursos/img/Desktop/Matematica/6/NumerosMultiplos.png", 
		nome: "Números Múltiplos",
		ano: "6",
		id: "222"
	};
	recursos.push(recurso7);

	var recurso8 = {
		miniatura: "recursos/img/Desktop/Matematica/7/FracoesEquivalentes_Jogo_Memoria.png", 
		nome: "Frações Equivalentes",
		ano: "7",
		id: "245"
	};
	recursos.push(recurso8);

	var recurso9 = {
		miniatura: "recursos/img/Desktop/Matematica/8/Equacoes_primeiro_grau.png", 
		nome: "Equação do 1º Grau",
		ano: "8",
		id: "255"
	};
	recursos.push(recurso9);

	var recurso10 = {
		miniatura: "recursos/img/Desktop/Matematica/9/Demonstracao_da_area_do_circulo.png", 
		nome: "Demonstração da área do cí­rculo",
		ano: "9",
		id: "270"
	};
	recursos.push(recurso10);


//recursos de portugues

	var recurso11 = {
		miniatura: "recursos/img/Desktop/Portugues/1/brincandocomasvogais.png", 
		nome: "Brincando com as vogais",
		ano: "1",
		id: "2"
	};
	recursos.push(recurso11);

	var recurso12 = {
		miniatura: "recursos/img/Desktop/Portugues/1/formandopalavras.png", 
		nome: "Formando Palavras",
		ano: "1",
		id: "3"
	};
	recursos.push(recurso12);
	
	var recurso13 = {
		miniatura: "recursos/img/Desktop/Portugues/2/viagemespacial.png", 
		nome: "Viagem Espacial",
		ano: "2",
		id: "12"
	};
	recursos.push(recurso13);

	var recurso14 = {
		miniatura: "recursos/img/Desktop/Portugues/3/noimensomarazul.png", 
		nome: "No imenso mar azul",
		ano: "3",
		id: "50"
	};
	recursos.push(recurso14);

	var recurso15 = {
		miniatura: "recursos/img/Desktop/Portugues/3/silaba.png", 
		nome: "Sílabas",
		ano: "3",
		id: "29"
	};
	recursos.push(recurso15);

	var recurso16 = {
		miniatura: "recursos/img/Desktop/Portugues/4/ruthrocha.png", 
		nome: "Ruth Rocha",
		ano: "4",
		id: "61"
	};
	recursos.push(recurso16);

	var recurso17 = {
		miniatura: "recursos/img/Desktop/Portugues/5/ortografiapalavrascomsc.png", 
		nome: "Ortografia: palavras com sc [Orto e grafia]",
		ano: "5",
		id: "72"
	};
	recursos.push(recurso17);

	var recurso18 = {
		miniatura: "recursos/img/Desktop/Portugues/6/vanguardas.png", 
		nome: "Vanguardas",
		ano: "6",
		id: "82"
	};
	recursos.push(recurso18);

		var recurso19 = {
		miniatura: "recursos/img/Desktop/Portugues/6/perdidoseseparados.png", 
		nome: "Perdidos e separados",
		ano: "6",
		id: "87"
	};
	recursos.push(recurso19);

	var recurso20 = {
		miniatura: "recursos/img/Desktop/Portugues/8/acidadecomotexto.png", 
		nome: "A cidade como texto",
		ano: "8",
		id: "128"
	};
	recursos.push(recurso20);


		document.getElementById('recurso1').children[0].src = recursos[0].miniatura;
		document.getElementById('recurso1').children[1].innerHTML = recursos[0].nome;
		document.getElementById('recurso1').children[2].innerHTML = recursos[0].ano+"º ano";

		document.getElementById('recurso2').children[0].src = recursos[1].miniatura;
		document.getElementById('recurso2').children[1].innerHTML = recursos[1].nome;
		document.getElementById('recurso2').children[2].innerHTML = recursos[1].ano+"º ano";

		document.getElementById('recurso3').children[0].src = recursos[2].miniatura;
		document.getElementById('recurso3').children[1].innerHTML = recursos[2].nome;
		document.getElementById('recurso3').children[2].innerHTML = recursos[2].ano+"º ano";

		document.getElementById('recurso4').children[0].src = recursos[3].miniatura;
		document.getElementById('recurso4').children[1].innerHTML = recursos[3].nome;
		document.getElementById('recurso4').children[2].innerHTML = recursos[3].ano+"º ano";

		document.getElementById('recurso5').children[0].src = recursos[4].miniatura;
		document.getElementById('recurso5').children[1].innerHTML = recursos[4].nome;
		document.getElementById('recurso5').children[2].innerHTML = recursos[4].ano+"º ano";

		document.getElementById('recurso6').children[0].src = recursos[5].miniatura;
		document.getElementById('recurso6').children[1].innerHTML = recursos[5].nome;
		document.getElementById('recurso6').children[2].innerHTML = recursos[5].ano+"º ano";

		document.getElementById('recurso7').children[0].src = recursos[6].miniatura;
		document.getElementById('recurso7').children[1].innerHTML = recursos[6].nome;
		document.getElementById('recurso7').children[2].innerHTML = recursos[6].ano+"º ano";

		document.getElementById('recurso8').children[0].src = recursos[7].miniatura;
		document.getElementById('recurso8').children[1].innerHTML = recursos[7].nome;
		document.getElementById('recurso8').children[2].innerHTML = recursos[7].ano+"º ano";		

		document.getElementById('recurso9').children[0].src = recursos[8].miniatura;
		document.getElementById('recurso9').children[1].innerHTML = recursos[8].nome;
		document.getElementById('recurso9').children[2].innerHTML = recursos[8].ano+"º ano";

		document.getElementById('recurso10').children[0].src = recursos[9].miniatura;
		document.getElementById('recurso10').children[1].innerHTML = recursos[9].nome;
		document.getElementById('recurso10').children[2].innerHTML = recursos[9].ano+"º ano";	


//lingua portuguesa
		document.getElementById('recurso11').children[0].src = recursos[10].miniatura;
		document.getElementById('recurso11').children[1].innerHTML = recursos[10].nome;
		document.getElementById('recurso11').children[2].innerHTML = recursos[10].ano+"º ano";

		document.getElementById('recurso12').children[0].src = recursos[11].miniatura;
		document.getElementById('recurso12').children[1].innerHTML = recursos[11].nome;
		document.getElementById('recurso12').children[2].innerHTML = recursos[11].ano+"º ano";

		document.getElementById('recurso13').children[0].src = recursos[12].miniatura;
		document.getElementById('recurso13').children[1].innerHTML = recursos[12].nome;
		document.getElementById('recurso13').children[2].innerHTML = recursos[12].ano+"º ano";

		document.getElementById('recurso14').children[0].src = recursos[13].miniatura;
		document.getElementById('recurso14').children[1].innerHTML = recursos[13].nome;
		document.getElementById('recurso14').children[2].innerHTML = recursos[13].ano+"º ano";

		document.getElementById('recurso15').children[0].src = recursos[14].miniatura;
		document.getElementById('recurso15').children[1].innerHTML = recursos[14].nome;
		document.getElementById('recurso15').children[2].innerHTML = recursos[14].ano+"º ano";

		document.getElementById('recurso16').children[0].src = recursos[15].miniatura;
		document.getElementById('recurso16').children[1].innerHTML = recursos[15].nome;
		document.getElementById('recurso16').children[2].innerHTML = recursos[15].ano+"º ano";

		document.getElementById('recurso17').children[0].src = recursos[16].miniatura;
		document.getElementById('recurso17').children[1].innerHTML = recursos[16].nome;
		document.getElementById('recurso17').children[2].innerHTML = recursos[16].ano+"º ano";

		document.getElementById('recurso18').children[0].src = recursos[17].miniatura;
		document.getElementById('recurso18').children[1].innerHTML = recursos[17].nome;
		document.getElementById('recurso18').children[2].innerHTML = recursos[17].ano+"º ano";		

		document.getElementById('recurso19').children[0].src = recursos[18].miniatura;
		document.getElementById('recurso19').children[1].innerHTML = recursos[18].nome;
		document.getElementById('recurso19').children[2].innerHTML = recursos[18].ano+"º ano";

		document.getElementById('recurso20').children[0].src = recursos[19].miniatura;
		document.getElementById('recurso20').children[1].innerHTML = recursos[19].nome;
		document.getElementById('recurso20').children[2].innerHTML = recursos[19].ano+"º ano";	
		
		function page(n) {
			location.href="../athena/recursocomputador.html?n=" + recursos[n].id;
		}