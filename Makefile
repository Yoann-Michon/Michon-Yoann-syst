CC = gcc
OBJS = Multiplication.o
CFLAGS   = -c -Wall -ansi -pedantic -g
LDFLAGS =
PGM = Multiplication.c

all: $(PGM)

$(PGM): $(OBJS)
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)

.c.o:
	$(CC)	$(CFLAGS)	$<

clean:
	rm -f $(PGM)
	rm -f $(OBJS)
	rm -f *~

