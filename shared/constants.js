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

module.NoSuchElementException = NoSuchElementException;
module.FullStackExcetion = FullStackExcetion;
module.EmptyStackException = EmptyStackException;