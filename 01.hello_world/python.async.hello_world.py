import sys
from threading import Timer

t1 = Timer(0, lambda : sys.stdout.write("hello\n"))
t2 = Timer(1, lambda : sys.stdout.write("world\n"))
t3 = Timer(2, lambda : sys.stdout.write("HELLO\n"))
t4 = Timer(3, lambda : sys.stdout.write("WORLD\n"))
t1.start()
t2.start()
t3.start()
t4.start()
print("The End")