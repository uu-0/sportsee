# sportsee

>Vous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif. En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

# sportsee-back : api
## prérequis
- NodeJS (version 12.18) ou plus
- Yarn

## lancer l'api
`yarn` installer les dépendances 

`yarn dev` run api

## endpoints

`http://localhost:3000/user/${userId}` - id, user informations (first name, last name et age), score actuel (todayScore) et key data (calorie, macronutrient, etc)

`http://localhost:3000/user/${userId}/activity` - user activité

`http://localhost:3000/user/${userId}/average-sessions` - moyenne durée des sessions

`http://localhost:3000/user/${userId}/performance` - performence
 

## étapes de réalisation

1. navigation horizontale
2. navigation verticale
3. taille d'écran
4. prénom
5. infos utilisateur
6. activité quotidienne
7. durée sessions
8. complétion objectif
9. type d'activité
10. chiffres clés
11. barchart activité quotidienne
12. linechart durée session
13. radarchart type d'activité 
14. radialbarchart score moyen
15. card infos clées

