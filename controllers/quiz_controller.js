// GET /quizes/question
exports .question = function( req, res ) {
	res .render( 
		'quizes/question', 
		{ 
			pregunta: '¿Cuál es la capital de Italia?' 
		} 
	);
};

// GET /quizes/answer
exports .answer = function( req, res ) {
	
	var mensaje = '';

	if( req .query .respuesta === 'Roma' ) {
		mensaje = 'Correcto';
	}
	else {
		mensaje = 'Incorrecto';
	}
	
	res .render( 
		'quizes/answer', 
		{ 
			respuesta: mensaje
		} 
	);

};