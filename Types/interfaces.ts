// interface
interface Point{
    x: number;
    y: number;
}

const pt: Point = { x: 33, y: 45 }

interface Person {
    id: number
    first: string
    last: string
    nickname ?: string
}

const thomas: Person = { first: "Thomas", last: "Hardy", id: 234, nickname: "Tom Hardy" }

// adding methods to interface


