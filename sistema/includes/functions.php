<?php

//por medio de este arreglo, funciona para auditorias porque en el lugar que este siempre va a aparecer mi ubicación
date_default_timezone_set ('America/Bogota');
function fechaC(){
$mes=array("","Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre");

return date('d')." de ".$mes[date('n')]." de ".date('Y');

}

?>