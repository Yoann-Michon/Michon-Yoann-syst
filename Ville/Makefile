CC = gcc
OBJS = main.o ville.o
CFLAGS   = -c -Wall -ansi -pedantic -g
LDFLAGS =
PGM = Ville

all: $(PGM)

$(PGM): $(OBJS)
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)

.c.o:
	$(CC)	$(CFLAGS)	$<

clean:
	rm -f $(PGM)
	rm -f $(OBJS)
	rm -f *~
