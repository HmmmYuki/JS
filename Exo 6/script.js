function factoriel(n) {
let resultat = 1;

if (n < 0) {
return 0;
}

for (let i = 1; i <= n; i++) {
resultat = resultat * i;
}

return resultat;
}