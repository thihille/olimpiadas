/* Ajustes para Howler.js*/
var audio_iniciar_howler = new Howl({urls: ['media/audio/audio_iniciar_howler.mp3'],volume: 0,onend: function() {startGame.init();}});
var audio_narracao_inicial = new Howl({urls: ['media/audio/audio_narracao_inicial.mp3'],volume: 1,onend: function() { audio_narracao_inicial.volume(0);}});
var audio_narracao_explica_barcos = new Howl({urls: ['media/audio/audio_narracao_explica_barcos.mp3'],volume: 1,onend: function() { audio_narracao_explica_barcos.volume(0);}});
var audio_narracao_pergunta_franca = new Howl({urls: ['media/audio/audio_narracao_pergunta_franca.mp3'],volume: 1,onend: function() { audio_narracao_pergunta_franca.volume(0);}});
var audio_narracao_explica_salto = new Howl({urls: ['media/audio/audio_narracao_explica_salto.mp3'],volume: 1,onend: function() { audio_narracao_explica_salto.volume(0);}});
var audio_narracao_parabens_salto = new Howl({urls: ['media/audio/audio_narracao_parabens_salto.mp3'],volume: 1,onend: function() { audio_narracao_parabens_salto.volume(0);}});
var audio_narracao_explica_natacao = new Howl({urls: ['media/audio/audio_narracao_explica_natacao.mp3'],volume: 1,onend: function() { audio_narracao_explica_natacao.volume(0);}});
/**/

var opcao_escolha_franca;
opcao_escolha_franca="nao";
var verificar_inicio_cnd;
var startGame = {
	juiz: $(".juiz"),
	textoJuiz: function(texto){
		$(".textoJuiz").html(texto);
		$(".textoJuiz").show(100);
	},
	feed:function(descricao, troca){
		if(descricao != null){
			$(".ovFeed").fadeIn(200);
			$("#feedEscolha").fadeIn(200);
			$("#feedEscolha p").html(descricao);
		}else{
			$(".ovFeed").fadeOut(200);
			$("#feedEscolha").fadeOut(200,function(){
				$("#feedEscolha p").html("");
			});
		}
	},

	intro: {
		init:function(){
			setTimeout(function(){
				$(".btnInstrucoes").hide();
				$(".instrutor").show().addClass("anInst");
				$(".anInst").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					$(".balao1").fadeIn("300");
					//textos.stop().play("text1");
					audio_narracao_inicial.play();
					console.log("AUDIO1");
				});
				setTimeout(function(){
					$(".balao1").fadeOut("300",function(){$(this).remove();});
					$(".instrutor").removeClass("anInst");
					$(".instrutor").addClass("anInstOut");
				},12000);  // TEMPO DA NARRAÇÃO DO INSTRUTOR DA INTRODUÇÃO
				setTimeout(function(){
					$(".instrutor").hide();
					$("#titleStage1").fadeIn(1000);
					textos.stop();
					textos.play("text2");
					console.log("AUDIO2");
				},14000);  // TEMPO DA NARRAÇÃO DO INSTRUTOR DA INTRODUÇÃO
				setTimeout(function(){
					$(".instrutor").removeClass("anInstOut");
					$("#titleStage1").fadeOut(500,function(){
						$(this).remove();
					});
					startGame.stage1.init();
				},24000);  // TEMPO DA NARRAÇÃO DO INSTRUTOR DA INTRODUÇÃO
			},500);
		}
	},
	stage1: {
		steps: 0,
		acerto: "acerto",
		erro:"erro",
		alternativa: $("#stage1 .menu ul li"),
		
		init: function(){
			
			$(".btnInstrucoes").show();
			$("#stage1").fadeIn(500,function(){
				//textos3.stop().play("loading");
				console.log("AUDIO3");
				$(".instrutor").show().addClass("anInst");
				$(".ovInst").fadeIn(500);
				$(".anInst").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					$(".balao2").fadeIn("300");
					//textos.stop().play("text3");
					audio_narracao_explica_barcos.play();
					console.log("AUDIO4");
				});
				setTimeout(function(){
					$(".instrutor").removeClass("anInst");
					$(".instrutor").addClass("anInstOut");
					$(".balao2").fadeOut("300",function(){$(this).remove();});
					$(".ovInst").fadeOut(500);
					setTimeout(function(){
						//textos.stop().play("text5");
						audio_narracao_pergunta_franca.play();
						console.log("AUDIO4");
					},1500);
					//textos3.stop().play("loading");
					console.log("AUDIO5");
				},11000); // TEMPO DA NARRAÇÃO DO INSTRUTOR DO STAGE1
			});
			
			startGame.stage1.alternativa.on("click",function(){
				if($(this).hasClass("acerto")){
					$("#feedEscolha").css({"border":"6px solid #469f2e","height":"80px"});
					$("#feedEscolha .btnFechar").css({"background-color":"#469f2e"});
					
					startGame.stage1.steps++
					if(startGame.stage1.steps == 0){
						textos.stop();
						textos3.stop();
						textos3.stop().play("acerto");
						audio_narracao_pergunta_franca.stop();
						console.log("AUDIO6");
						setTimeout(function(){
							textos3.stop().play("text1");
							console.log("AUDIO7");
							startGame.feed("Muito bem, você acertou! Vamos para a próxima pergunta.");
							$("#stage1 .menu").addClass("animated bounceOutDown");	
							$("#stage1 .menu").hide();
						},500);
					}else if(startGame.stage1.steps == 1){
						textos.stop();
						textos3.stop();
						textos3.stop().play("acerto");
						audio_narracao_pergunta_franca.stop();
						console.log("AUDIO8");
						setTimeout(function(){
							textos3.stop().play("text1");
							console.log("AUDIO8");
							startGame.feed("Muito bem, você acertou! Vamos para a próxima pergunta.");
							$("#stage1 .menu").addClass("animated bounceOutDown");	
							$("#stage1 .menu").hide();
						},500);
					}else if(startGame.stage1.steps == 2){
						textos.stop();
						textos3.stop();
						textos3.stop().play("acerto");
						console.log("AUDIO9");
						setTimeout(function(){
							textos3.stop().play("text1");
							console.log("AUDIO10");
							startGame.feed("Muito bem, você acertou! Vamos para a próxima pergunta.");
							$("#stage1 .menu").addClass("animated bounceOutDown");	
							$("#stage1 .menu").hide();
						},500);
					}else if(startGame.stage1.steps == 3){
						textos.stop();
						textos3.stop();
						textos3.stop().play("acerto");
						audio_narracao_pergunta_franca.stop();
						console.log("AUDIO11");
						setTimeout(function(){
							textos3.stop().play("text1");
							console.log("AUDIO12");
							startGame.feed("Muito bem, você acertou! Vamos para a próxima pergunta.");
							$("#stage1 .menu").addClass("animated bounceOutDown");	
							$("#stage1 .menu").hide();
						},500);
					}else if(startGame.stage1.steps == 4){
						textos.stop();
						textos3.stop();
						textos3.stop().play("acerto");
						console.log("AUDIO13");
						setTimeout(function(){
							textos3.stop().play("text3");
							console.log("AUDIO14");
							startGame.feed("Muito bem, você acertou todas as respostas!");
							$("#stage1 .menu").addClass("animated bounceOutDown");
							$("#stage1 .menu").hide();
						},500);
					}
				}else {
					textos.stop();textos3.stop();
					textos3.stop().play("erro");
					console.log("AUDIO15");
					audio_narracao_pergunta_franca.stop();
					setTimeout(function(){
						textos3.stop().play("text2");
						console.log("AUDIO16");
						$("#feedEscolha").css({"border":"6px solid #ff0000","height":"140px"});
						$("#feedEscolha .btnFechar").css({"background-color":"#ff0000"});
						startGame.feed("Resposta incorreta!<br>Observe atentamente cada uma das embarcações<br>e tente outra vez.");
					},500);
				}
			});
			$(".btnFechar").on("click",function(){
				if(opcao_escolha_franca=="nao"){
					setTimeout(function(){
						audio_narracao_pergunta_franca.volume(1);
						audio_narracao_pergunta_franca.play();
					}, 500);

				}
				startGame.feed();
				textos.stop();textos3.stop();
				if(startGame.stage1.steps == 1){
					opcao_escolha_franca="sim";
					audio_narracao_pergunta_franca.volume(0);
					audio_narracao_pergunta_franca.stop();
					$("#stage1 .menu").removeClass("animated bounceOutDown");
					$("#stage1 .menu p").html("Contando da esquerda para a direita, qual das embarcações está representando a Argentina?");
					$("#stage1 .menu ul li:first-child").text("A quarta.");
					$("#stage1 .menu ul li:nth-child(2)").text("A segunda.");
					$("#stage1 .menu ul li:nth-child(3)").text("A terceira.");
					$("#stage1 .menu ul li:nth-child(4)").text("A primeira.");
					$("#stage1 .menu ul li:nth-child(5)").text("A quinta.");
					$("#stage1 .menu ul li").removeClass("acerto");
					$("#stage1 .menu ul li:nth-child(5)").addClass("acerto");
					
					setTimeout(function(){
						textos.stop().play("text5");
						console.log("AUDIO17");
						opcao_escolha_franca="sim";
						audio_narracao_pergunta_franca.volume(0);
						audio_narracao_pergunta_franca.stop();
						$("#stage1 .menu").show().addClass("animated bounceInUp");
					},500);
				}else if(startGame.stage1.steps == 2){
					$("#stage1 .menu").removeClass("animated bounceOutDown");
					$("#stage1 .menu p").html("Contando da esquerda para a direita, qual das embarcações está representando o México?");
					$("#stage1 .menu ul li:first-child").text("A segunda.");
					$("#stage1 .menu ul li:nth-child(2)").text("A primeira.");
					$("#stage1 .menu ul li:nth-child(3)").text("A terceira.");
					$("#stage1 .menu ul li:nth-child(4)").text("A quinta.");
					$("#stage1 .menu ul li:nth-child(5)").text("A quarta.");
					$("#stage1 .menu ul li").removeClass("acerto");
					$("#stage1 .menu ul li:nth-child(3)").addClass("acerto");
					setTimeout(function(){
						textos.stop().play("text6");
						console.log("AUDIO18");
						$("#stage1 .menu").show().addClass("animated bounceInUp");
					},500);
				}else if(startGame.stage1.steps == 3){
					
					$("#stage1 .menu").removeClass("animated bounceOutDown");
					$("#stage1 .menu p").html("Contando da esquerda para a direita, qual das embarcações representa a Holanda?");
					$("#stage1 .menu ul li:first-child").text("A terceira.");
					$("#stage1 .menu ul li:nth-child(2)").text("A quarta.");
					$("#stage1 .menu ul li:nth-child(3)").text("A primeira.");
					$("#stage1 .menu ul li:nth-child(4)").text("A quinta.");
					$("#stage1 .menu ul li:nth-child(5)").text("A segunda.");
					$("#stage1 .menu ul li").removeClass("acerto");
					$("#stage1 .menu ul li:nth-child(2)").addClass("acerto");
					setTimeout(function(){
						textos.stop().play("text7");
						console.log("AUDIO19");
						$("#stage1 .menu").show().addClass("animated bounceInUp");
					},500);
				}else if(startGame.stage1.steps == 4){
					$("#stage1").fadeOut(1000,function(){
						textos2.stop().play("loading");
						console.log("AUDIO20");
						setTimeout(function(){
							textos2.stop().play("text1");
							console.log("AUDIO21");
							$("#titleStage2").fadeIn(1000);
							setTimeout(function(){
								$("#titleStage2").fadeOut(500);
								startGame.stage2.init();
							},10200);
						},1500);
					});
					
				}
			});
		}
	},
	stage2: {
		character: $(".corredor"),
		model: ["corredor1","corredor2","corredor3"],
		animation: {
			corredorFinal1: function(){
				$(".corre1").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					startGame.stage2.character.css({"background":"url(img/"+startGame.stage2.model[0]+"-ok.png) no-repeat right center"});
					$(".placar1Corredor1").show().addClass("animated flash");
				});
			},
			corredorFinal2: function(){
				$(".corre2").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					startGame.stage2.character.css({"background":"url(img/"+startGame.stage2.model[1]+"-ok.png) no-repeat right center"});
					$(".placar1Corredor2").show().addClass("animated flash");
				});
			},
			corredorFinal3: function(){
				$(".corre3").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					startGame.stage2.character.css({"background":"url(img/"+startGame.stage2.model[2]+"-ok.png) no-repeat right center"});
					setTimeout(function(){
						$(".placar1Corredor3").show().addClass("animated flash");
					},300);
				});
			},
			podium: function(){
				$(".effect").addClass("smoke");
				$(".areaPodium div").addClass("podium");
				$(".podium").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					$(".smoke").remove();
					setTimeout(function(){
						startGame.juiz.fadeIn(400);
					},1000);
				});
			}
		},
		init:function(){
			$("#stage2").fadeIn(500,function(){
				$("#stage1").remove();
			});
			$("#drop .ganhador1").droppable({
				drop: function(event,ui) {
					var id = ui.draggable.attr("name");
					if(id == "corredor3"){
						$(this).css({background:"url(img/corredor3-podium.png) no-repeat 0px 58px"}).addClass("animated bounce corredorOK");
						$(".placar2Corredor3").hide();
						ui.draggable.hide();
						startGame.stage2.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO22");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO23");
					}
				}
			});
			$("#drop .ganhador2").droppable({
				drop: function(event,ui) {
					var id = ui.draggable.attr("name");
					if(id == "corredor1"){
						$(this).css({background:"url(img/corredor1-podium.png) no-repeat 21px 85px"}).addClass("animated bounce corredorOK");
						$(".placar2Corredor1").hide();
						ui.draggable.hide();
						startGame.stage2.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO24");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO25");
					}
				}
			});
			$("#drop .ganhador3").droppable({
				drop: function(event,ui) {
					var id = ui.draggable.attr("name");
					if(id == "corredor2"){
						$(this).css({background:"url(img/corredor2-podium.png) no-repeat 15px 66px"}).addClass("animated bounce corredorOK");
						$(".placar2Corredor2").hide();
						ui.draggable.hide();
						startGame.stage2.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO26");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO27");
					}
				}
			});
			startGame.stage2.character.css({
				"background":"url(img/"+startGame.stage2.model[0]+"-corre.png) no-repeat right center",
				"height":"250px"
			}).show().addClass("corre1");
			startGame.stage2.animation.corredorFinal1();

			setTimeout(function(){
				startGame.stage2.character.fadeOut(700);
				$(".placar1Corredor1").remove();
				$(".placar2Corredor1").show().addClass("animated bounceInDown");
				$("."+startGame.stage2.model[0]).fadeIn(700);
			},4000);
			setTimeout(function(){
				startGame.stage2.character.css({
					"background":"url(img/"+startGame.stage2.model[1]+"-corre.png) no-repeat right center",
					"width":"285px",
					"height":"250px"
				}).show().addClass("corre2");
				startGame.stage2.animation.corredorFinal2();
			},5000);
			
			setTimeout(function(){
				startGame.stage2.character.fadeOut(700);
				$(".placar1Corredor2").remove();
				$(".placar2Corredor2").show().addClass("animated bounceInDown");
				$("."+startGame.stage2.model[1]).fadeIn(700);
			},9000);
			setTimeout(function(){
				startGame.stage2.character.css({
					"background":"url(img/"+startGame.stage2.model[2]+"-corre.png) no-repeat right center",
					"width":"345px",
					"height":"250px"
				}).show().addClass("corre3");
				startGame.stage2.animation.corredorFinal3();
			},10000);
			
			setTimeout(function(){
				startGame.stage2.character.fadeOut(700);
				$(".placar1Corredor3").remove();
				$(".placar2Corredor3").show().addClass("animated bounceInDown");
				$("."+startGame.stage2.model[2]).fadeIn(700);
				setTimeout(function(){
					startGame.stage2.animation.podium();
					setTimeout(function(){
						$(".instrutor").removeClass("anInstOut");
						$(".instrutor").show().addClass("anInst");
						$(".anInst").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
							$(".balao3").fadeIn("300");
							//textos2.stop().play("text2");
							console.log("AUDIO28");
							audio_narracao_explica_salto.play();
						});
						setTimeout(function(){
							
							var areaClique = { x: 0, y: 0 };
							$(".menu .corredor1").draggable({
								start: function(ui , event){
									areaClique.x = ui.clientX;
							        areaClique.y = ui.clientY;
								},				
					            drag: function(event,ui){
							        ui.position = {
							            left: (event.clientX - areaClique.x + ui.originalPosition.left) / escalaElemento,
							            top: (event.clientY - areaClique.y + ui.originalPosition.top) / escalaElemento
							        };
							    },
							    revert : function(event, ui) {
						            $(this).data("uiDraggable").originalPosition = {
						                top : '370px',
						                left : '30px'
						            };
						            return !ui;
						        },
						        revertDuration: 500
							});
							$(".menu .corredor2").draggable({
								start: function(ui , event){
									areaClique.x = ui.clientX;
							        areaClique.y = ui.clientY;
								},				
					            drag: function(event,ui){
							        ui.position = {
							            left: (event.clientX - areaClique.x + ui.originalPosition.left) / escalaElemento,
							            top: (event.clientY - areaClique.y + ui.originalPosition.top) / escalaElemento
							        };
							    },
							     revert : function(event, ui) {
						            $(this).data("uiDraggable").originalPosition = {
						                top : '370px',
						                left : '200px'
						            };
						            return !ui;
						        },
						        revertDuration: 500
							});
							$(".menu .corredor3").draggable({
								start: function(ui , event){
									areaClique.x = ui.clientX;
							        areaClique.y = ui.clientY;
								},				
					            drag: function(event,ui){
							        ui.position = {
							            left: (event.clientX - areaClique.x + ui.originalPosition.left) / escalaElemento,
							            top: (event.clientY - areaClique.y + ui.originalPosition.top) / escalaElemento
							        };
							    },
							     revert : function(event, ui) {
						            $(this).data("uiDraggable").originalPosition = {
						                top : '370px',
						                left : '375px'
						            };
						            return !ui;
						        },
						        revertDuration: 500
							});
					
							$(".instrutor").removeClass("anInst");
							$(".instrutor").addClass("anInstOut");
							$(".balao3").fadeOut("300",function(){$(this).remove();});
						},18000);
					},1500);
				},1000);
			},14000);
		},
		verificaResp: function(){
			if($(".corredorOK").length == 3){
				$(".instrutor").removeClass("anInstOut");
				$(".instrutor").addClass("anInstInLeft");
				$(".anInstInLeft").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					$(".balao5").fadeIn(500);
					//textos3.stop().play("text4");
					audio_narracao_parabens_salto.play();
					console.log("AUDIO29");
				});
				setTimeout(function(){
					$(".balao5").fadeOut(500,function(){$(this).remove();});
					$(".instrutor").removeClass("anInstInLeft");
					$(".instrutor").addClass("anInstOutLeft");
					setTimeout(function(){
						$("#stage2").fadeOut(1000,function(){
							$("#titleStage3").fadeIn(1000);
							textos2.stop().play("text3");
							console.log("AUDIO30");
							setTimeout(function(){
								$("#titleStage3").fadeOut(500);
								startGame.stage3.init();
							},11000);
						});
					},1500);
				},6000);
			}
		}
	},
	stage3: {
		relogios: 1,
		init:function(){
			$("#stage3").fadeIn(300,function(){
				$("#stage2").remove();
			});
			$(".nadador1").addClass("anNad1");
			$(".nadador2").addClass("anNad2");
			$(".nadador3").addClass("anNad3");
			$(".nadador4").addClass("anNad4");
			$(".nadador5").addClass("anNad5");
			var areaClique = { x: 0, y: 0 };
			$(".premiar").draggable({
				start: function(ui , event){
					areaClique.x = ui.clientX;
			        areaClique.y = ui.clientY;
				},				
	            drag: function(event,ui){
			        ui.position = {
			            left: (event.clientX - areaClique.x + ui.originalPosition.left) / escalaElemento,
			            top: (event.clientY - areaClique.y + ui.originalPosition.top) / escalaElemento
			        };
			    },
			    revert: true
			    // revert : function(event, ui) {
		     //        $(this).data("uiDraggable").originalPosition = {
		     //            top : '370px',
		     //            left : '30px'
		     //        };
		     //        return !ui;
		     //    },
		     //    revertDuration: 500
			});
			// $(".premiar").draggable({revert:true});
			$(".nada1").droppable({
				drop:function(event,ui){
					var get = ui.draggable.attr("name");
					if(get == "medalha4"){
						ui.draggable.css("opacity",0);
						$(this).css({background:"url(img/nadador1-okPremiado.png) no-repeat  0 172px"});
						$(this).removeClass("flash");
						$(this).addClass("bounce nadadorOK");
						startGame.stage3.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO31");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO32");
					}
				}
			});
			$(".nada2").droppable({
				drop:function(event,ui){
					var get = ui.draggable.attr("name");
					if(get == "medalha5"){
						ui.draggable.css("opacity",0);
						$(this).css({background:"url(img/nadador2-okPremiado.png) no-repeat 0 213px"});
						$(this).removeClass("flash");
						$(this).addClass("bounce nadadorOK");
						startGame.stage3.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO33");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO34");
					}
				}
			});
			$(".nada3").droppable({
				drop:function(event,ui){
					var get = ui.draggable.attr("name");
					if(get == "medalha1"){
						ui.draggable.css("opacity",0);
						$(this).css({background:"url(img/nadador3-okPremiado.png) no-repeat 34px 141px"});
						$(this).removeClass("flash");
						$(this).addClass("bounce nadadorOK");
						startGame.stage3.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO35");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO36");
					}
				}
			});
			$(".nada4").droppable({
				drop:function(event,ui){
					var get = ui.draggable.attr("name");
					if(get == "medalha3"){
						ui.draggable.css("opacity",0);
						$(this).css({background:"url(img/nadador4-okPremiado.png) no-repeat 0 177px"})
						$(this).removeClass("flash");
						$(this).addClass("bounce nadadorOK");
						startGame.stage3.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO37");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO38");
					}
				}
			});
			$(".nada5").droppable({
				drop:function(event,ui){
					var get = ui.draggable.attr("name");
					if(get == "medalha2"){
						ui.draggable.css("opacity",0);
						$(this).css({background:"url(img/nadador5-okPremiado.png) no-repeat 0 168px"});
						$(this).removeClass("flash");
						$(this).addClass("bounce nadadorOK");
						startGame.stage3.verificaResp();
						textos3.stop().play("acerto");
						console.log("AUDIO39");
					}else{
						textos3.stop().play("erro");
						console.log("AUDIO40");
					}
				}
			});
			setTimeout(function(){
				$(".instrutor").removeClass("anInstOutLeft");
				$(".instrutor").show().addClass("anInst");
				$(".anInst").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					$(".balao4").fadeIn(500);
					//textos2.stop().play("text4");
					audio_narracao_explica_natacao.play();
					console.log("AUDIO41");
				});
			},2000);
			setTimeout(function(){
				$("#stage3").hide(0);
				$("#stage32").show(0);
				setTimeout(function(){
					$(".nadador").addClass("animated flash");
				},500);
				
				posicaoRel = setInterval(function(){
					$(".relogio"+startGame.stage3.relogios++).show().addClass("animated slideInDown");
				},400);
				
				setTimeout(function(){
					clearInterval(posicaoRel);
				},2400);
				setTimeout(function(){
					$(".instrutor").removeClass("anInst");
					$(".instrutor").addClass("anInstOut");
					$(".balao4").fadeOut(500,function(){
						$(this).remove();
						$("#quadromedalhas").show().addClass("animated slideInRight");
					});
				},6000);
			},9000);
		},
		verificaResp: function(){
			if($(".nadadorOK").length == 5){
				$(".instrutor").removeClass("anInstOut");
				$(".instrutor").addClass("anInstInLeft");
				$(".anInstInLeft").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					$(".balao6").fadeIn(500);
					textos3.stop().play("text5");
					console.log("AUDIO42");
				});
				setTimeout(function(){
					$("#stage32").fadeOut(500);
					$(".balao6").fadeOut(500,function(){
						$(this).remove();
						$(".balao7").fadeIn(500);
						textos3.stop().play("text6");
						console.log("AUDIO43");
						setTimeout(function(){
							//location.href = "index.html"
							sessionStorage.setItem('reiniciar_oed', 'sim');
						},12000);
					});
				},8000);
			}
		}
	},	
	
	init: function(){
		startGame.intro.init();
	}
}

	function iniciar_com_tap(){
	audio_iniciar_howler.play();
	clearInterval(verificar_inicio_cnd);
	}

	verificar_inicio();
	function verificar_inicio(){
	  verificar_inicio_cnd = setInterval(function(){
	  if(window.sessionStorage.getItem('iniciar_oed')=='sim'){
	      //startGame.init();
		  audio_iniciar_howler.play();
	      clearInterval(verificar_inicio_cnd);
	    }
	  }, 1000);
	}