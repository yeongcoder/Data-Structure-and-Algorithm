class NoSuchElementException extends Error {
    constructor(){
        super();
        this.message = 'No Such Element.';
    }
}

class FullStackExcetion extends Error {
    constructor(){
        super();
        this.message = 'Full Stack.';
    }
}

class EmptyStackException extends Error {
    constructor(){
        super();
        this.message = 'Empty Stack.';
    }
}

class IndexOutOfBoundsException extends Error {
    constructor(){
        super();
        this.message = 'Index out of bounds';
    }
}

module.NoSuchElementException = NoSuchElementException;
module.FullStackExcetion = FullStackExcetion;
module.EmptyStackException = EmptyStackException;
module.IndexOutOfBoundsException = IndexOutOfBoundsException;