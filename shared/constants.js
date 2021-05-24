class NoSuchElementException extends Error {
    constructor(){
        this.message = 'No Such Element.';
    }
}

module.NoSuchElementException = NoSuchElementException;