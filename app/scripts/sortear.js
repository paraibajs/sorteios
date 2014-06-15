var Sortear = function(){

	'use strict';

	var atual = 0;
	var total = 0;
	var timeout = 0.1;
	var target = $('#participants');
	var elemento = 'li';

	function sorteio(){		

		target.find('.superactive').remove();

		var max = target.find('li').length - 1;
		total = max;

		$('#title').find('span').html(' ('+ (max +1) +')');

		pegarRandom(max * 3, function(numero){
			rolagemEntreParticipantes(numero);
		});

	}

	function rolagemEntreParticipantes(sorteado){

		console.log(sorteado);

		atual = 0;
		setParticipanteAtivo(sorteado);

	}

	function setParticipanteAtivo(sorteado){

		var localTimeout = timeout;

		target.find(elemento).removeClass('active');

		if(atual < sorteado){
			target.find(elemento  + ':eq('+atual+')').addClass('active');
		}else if(atual === sorteado){
			target.find(elemento  + ':eq('+atual+')').addClass('superactive');
		}

		if(atual < sorteado){

			atual++;

			if(atual === total + 1){
				atual = 0;
				sorteado = sorteado - total;
			}	

			if(sorteado - atual <= 10){
				localTimeout = ((timeout * 10) - (timeout * (sorteado - atual)) + timeout);
			}		

			setTimeout(function(){
				setParticipanteAtivo(sorteado);
			}, localTimeout * 1000);
			
		}
			

	}

	function pegarRandom(max, callback){

		var url = 'http://www.random.org/integers/?num=1&min=0&max='+max+'&col=1&base=10&format=plain&rnd=new';

		$.get(url, function(data){

			var resultado = parseInt($.trim(data), 10);
			callback(resultado);
			
		});

	}

	function init(){

		$('#run').click(function(){
			sorteio();
			return false;
		});

	}

	init();

};

new Sortear();