/**
 * The Singleton class defines an `instance` getter, that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    static #instance: Singleton;

    // hold All my scrabble letters in these array
    private scrabbleLetters: string[] = [
        "A", "A", "A", "A", "A", "A", "A", "A", "A",
        "B", "B",
        "C", "C",
        "D", "D", "D", "D",
        "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
        "F", "F",
        "G", "G", "G",
        "H", "H",
        "I", "I", "I", "I", "I", "I", "I", "I", "I",
        "J",
        "K",
        "L", "L", "L", "L",
        "M", "M",
        "N", "N", "N", "N", "N", "N",
        "O", "O", "O", "O", "O", "O", "O", "O",
        "P", "P",
        "Q",
        "R", "R", "R", "R", "R", "R",
        "S", "S", "S", "S",
        "T", "T", "T", "T", "T", "T",
        "U", "U", "U", "U",
        "V", "V",
        "W", "W",
        "X",
        "Y", "Y",
        "Z",
        "", ""
    ]

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }

    /**
     * Finally, any singleton can define some business logic, which can be
     * executed on its instance.
     */

    public getLetterList() {
        return Singleton.#instance.scrabbleLetters
    }


    public getTiles(numberOftiles: number): string[] {
        const newLists = [];

        for (let i = 0; i <= numberOftiles; i++) {
            newLists.push(...(this.getLetterList().splice(0, 1) as string[]))
        }
        return newLists;
    }
}

/**
 * The client code.
 */
export default function singleton() {
    const s1: Singleton = Singleton.instance;
    const s2: Singleton = Singleton.instance;

    // if (s1 === s2) {
    //     console.log(
    //         'Singleton works, both variables contain the same instance.'
    //     );
    // } else {
    //     console.log('Singleton failed, variables contain different instances.');
    // }

    console.log('Letters lists', s1.getLetterList())

    const playerOne = s1.getTiles(5);

    console.log('player one', playerOne)

    console.log('Letters lists', s2.getLetterList())

    const playerTwo = s2.getTiles(8);

    console.log('player Two', playerTwo)
}

