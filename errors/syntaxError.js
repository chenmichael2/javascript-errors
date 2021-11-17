try {
    throw new SyntaxError('Hello', 'someFile.js', 10);
} catch (e) {
    console.error(e instanceof SyntaxError);
    console.error(e.message);
    console.error(e.name);
    console.error(e.fileName);
    console.error(e.lineNumber);
    console.error(e.columnNumber);
    console.error(e.stack);
}