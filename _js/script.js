//Validação do formulário de cadastro
(function(){

	'use strict';
	var $form = document.querySelector('#formCadastro');
	var $txtNome = document.querySelector('#txtNome');
	var $txtSobrenome = document.querySelector('#txtSobrenome');
	var $txtEmail = document.querySelector('#txtEmail');
	var $txtSenha = document.querySelector('#txtSenha');
	var $txtConfirmarSenha = document.querySelector('#txtConfirmarSenha');
	var $btn = document.querySelector('#btn'); 

	$form.addEventListener('submit', function(e){
		//Nome
		if(!$txtNome.value){
			alert("Preencha o campo nome!");
			e.preventDefault();
			return false;
		} 
		//Sobrenome
		if(!$txtSobrenome.value){
			alert("Preencha o campo sobrenome!");
			e.preventDefault();
			return false;
		}

		//E-mail
		if(!$txtEmail.value || $txtEmail.value.indexOf("@") == -1){
			alert("Preencha o campo e-mail! Verifique se à um '@'.");
			e.preventDefault();
			return false;
		}

		//Senha
		if($txtSenha.value.length < 6){
			alert("A senha deve ter entre 6 e 15 caracteres!");
			e.preventDefault();
			return false;
		}

		//Confirmar senha
		if($txtConfirmarSenha.value != $txtSenha.value){
			alert("As senhas não estão iguais!");
			e.preventDefault();
			return false;
		}

		//Cadastrado
		else {
			alert("Seja bem-vindo, " + $txtNome.value + " " + $txtSobrenome.value + "!");
		}


	})

})()