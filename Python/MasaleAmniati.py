s=input('')
out=''

for ch in s:
    y=((s.count(ch)+(s.count(chr(ord(ch)+32) if ord(ch)<97 else chr(ord(ch)-32)))) * (ord(ch)-65 if ord(ch)<97 else ord(ch)-97)+1) % 26
    if ord(ch) < 97:
        out=out+chr(y+65)
    else:
        out=out+chr(y+97)

print(out)
