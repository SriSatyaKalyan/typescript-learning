const nums: Array<number> = [];
const colors: Array<string> = [];

function identity<T>(item: T): T{
    return item;
}

function getRandomElement<T>(list: T[]): T {
    const randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}

// console.log(getRandomElement<string>(["a", "b", "c"]));
// console.log(getRandomElement<number>([3, 56, 343, 2323, 565, 76]));

//default type generics
function makeEmptyArray<T = number>(): T[] {
    return [];
}

const numsArr = makeEmptyArray();
const boolsArr = makeEmptyArray<boolean>();

//writing Generic classes
interface Song{ title: string, artist: string; }
interface Video {title: string, creator: string, resolution: string; }

class Playlist<T> {
    public queue: T[] = [];
    add(el: T){ this.queue.push(el) }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();