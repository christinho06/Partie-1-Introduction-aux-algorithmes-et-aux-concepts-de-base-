# Saisie de l'utilisateur
sentence = input("Entrez une phrase se terminant par un point : ")

# Initialisation des compteurs
length = 0
word_count = 1
vowel_count = 0
vowels = "aeiouyAEIOUY"

# Boucle de traitement caractère par caractère
for char in sentence:
    length += 1
    
    if char in vowels:
        vowel_count += 1
        
    if char == " ":
        word_count += 1
    
    # Arrêt de la boucle si on rencontre le point
    if char == ".":
        break

# Affichage des résultats
print(f"--- Résultats ---")
print(f"Longueur : {length}")
print(f"Mots : {word_count}")
print(f"Voyelles : {vowel_count}")