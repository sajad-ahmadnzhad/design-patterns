interface Readable { read(filename: string): void }
interface Writable { write(filename: string , data: string): void }
interface Printable { print(filename: string): void }
interface Shareable { share(filename: string): void }

class ImageManager implements Printable, Readable, Writable {
    print(filename: string): void {
        //Handle logic
    }

    read(filename: string): void {
        //Handle logic
    }

    write(filename: string, data: string): void {
        //Handle logic
    }
}

class VideoManager implements Readable , Shareable , Writable {
    read(filename: string): void {
        //Handle logic
    }

    share(filename: string): void {
        //Handle logic
    }

    write(filename: string, data: string): void {
        //Handle logic
    }
}

const videoManager = new VideoManager()
const imageManager = new ImageManager()
