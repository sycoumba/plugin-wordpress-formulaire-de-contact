<?php
/**
 * Plugin Name: Exemple Form Plugin
 */

function example_form_plugin()
{
//$content = '';
//$content .= '<h2> Contactez Nous!</h2>';

$content .= '<fieldset class="fieldset" id="emp">';
$content .= '<legend class="legend">Contactez Nous!</legend>';
$content .= ' <form method="POST" action="http:/http://localhost/mes-projets/tp-plugin-wordpress/CONTACT/">';

$content .= ' <div class="itemFieldset">';
$content .= ' <div>';
$content .= '<label for ="nom"> Nom </label>';
$content .= '<input type ="text" name ="nom" class = "form-control" placeholder= "veuillez saisir votre nom">';
$content .= ' </div>';

$content .= ' <div>';
$content .= '<label for ="prenom"> Prenom </label>';
$content .= '<input type ="text" name ="prenom" class = "form-control" placeholder= "veuillez saisir votre prenom">';
$content .= ' </div>';

$content .= ' <div>';
$content .= '<label for ="adresse"> Adresse </label>';
$content .= '<input type ="text" name ="adresse" class = "form-control" placeholder= "veuillez saisir votre adresse">';
$content .= ' </div>';

$content .= ' <div>';
$content .= '<label for ="telephone"> Telephone </label>';
$content .= '<input type ="text" name ="telephone" class = "form-control" placeholder= "veuillez saisir votre telephone">';
$content .= ' </div>';

$content .= ' <div>';
$content .= '<label for ="email"> Email </label>';
$content .= '<input type ="text" name ="email" class = "form-control" placeholder= "veuillez saisir votre email">';
$content .= ' </div>';

$content .= '<div class="btnSave">';
$content .= '<input type="submit" name="btnAjouter" class="btn" value="Envoyer" />';
$content .= ' </div>';

$content .= ' </form>';
$content .= '</fieldset>';

return $content;

}
add_shortcode('example_form','example_form_plugin');


?>