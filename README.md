# Projet Web Guillaume Jim
[Lien vers le site](http://jimguillaume.me/Web/index.html)
Mon projet est décomposé en 4 pages distinctes
* Accueil
* Animaux
* Me
* Famille

Chaque page est composé de plusieurs éléments qui suivent le mock-up qui a été effectué en classe la seule modification apportée à celui-ci est la page famille comme concerté avec l'enseignant.

Le site est réactive selon le critère de la largeur de l'appareil, les changement s'effectuent à 1250px de large & 600px de large

## Accueil

L'accueil est la page la plus sobre/simple, elle n'est composée que d'une flexbox qui permet de gérer les 3
liens vers les pages suivantes

## Animaux 
Il y a une introduction de la navbar qui est récurrent sur les 3 pages suivantes en version tablette & téléphone celle-ci est interactive en appuyant sur l'image situé au dessus de l'écran.

Ensuite la page consiste d'un carousel d'image, le carousel est composé de 3 parties distinctes :

```
* Les images sérieuses 
* Les images marrantes
* Les anecdotes 
```
chaque partie du carousel est lié à son animal spécifique et tourne en appuyant sur les flèches centrales

## Me
Cette page est aussi composées de 3 blocks distincts qui sont les suivants 
* La ligne du temps
* Le camembert
* Les cards

### La ligne du temps :
Elle regroupe chaque partie de la scolarité et est verticale dans tout les cas,
Les changements s'effectuent uniquement sur la version téléphone où toutes les parties sont situés sur la droite de la ligne du temps

### Le camembert : 
Il utilise une bibliothèque JS pour permettre un affichage plus beau, il aurait pu être réalisé uniquement en css de cette manière 
 ```html
<div id="donut"></div>
```

 ```css
#donut {
  width: 300px; 
  height: 300px;
  border-radius: 50%;
 /*Répartition des couleurs*/
  background: conic-gradient(
    red 0deg 80deg,
    green 80deg 190deg,
    blue 190deg 360deg
  );
}

/*Cercle centrale pour faire le donut*/
#donut::before {
  content: "";
  width: 180px; height: 180px;
  border-radius: 50%;
  background: #fff;
}

/*Centrage du cercle centrale*/
#donut {
  display: flex;
  align-items: center;
  justify-content: center;
}

```

### Les cards

Une flexbox est situé et ensuite j'ai inséré dedans 3 cards qui sont des hyperlinks vers mes repos github

## Famille 
Sans succès je n'ai pas réussi à réaliser de manière adéquate l'arbre familiale qui était prévu dans le mockup, 
j'ai placé à la place une utilisation diverse et varié de l'animation JS qui a été gracieusement trouvé et modifié depuis internet.

J'ai ensuite utilisé <audio> pour faire l'utilisation du son
