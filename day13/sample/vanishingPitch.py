args = list(map(int, input().split()))

v = args[0]
t = args[1]
s = args[2]
d = args[3]

if((v * t) > d or (v * s) < d):
	print("Yes")
else:
	print("No")
