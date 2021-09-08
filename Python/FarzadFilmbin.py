
n = int(input(''))

listFilm=[]

for i in range(n):
    listFilm.append(input(''))

listFilmOut = []
for film in listFilm:
    sFilm = ''
    for filmWords in film.split(' '):
        sFilm = sFilm + filmWords[0].upper()+filmWords[1:].lower()+" "
    listFilmOut.append(sFilm)

for film in listFilmOut:
    print(film)    