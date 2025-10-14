interface IFileManager {
    read(filename: string): void
    write(filename: string, data: string): void
    print(filename: string): void
    share(filename: string): void
}


class ImageManager implements IFileManager {
    print(filename: string): void {
        //Handle logic
    }

    read(filename: string): void {
        //Handle logic
    }

    share(filename: string): void {
        throw new Error("Not support this method.")
    }

    write(filename: string, data: string): void {
        //Handle logic
    }
}

class VideoManager implements IFileManager {
    print(filename: string): void {
        throw new Error("Not support this method")
    }

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