## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');

// Read the file content
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Remove extra spaces
    const cleanedData = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned content back to the same file
    fs.writeFile("b.txt", cleanedData, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        
        console.log('File cleaned successfully!');
    });
});


//The fs.writeFile function is inside the callback of fs.readFile because it ensures that the file is read completely before trying to write the cleaned data back to it. This is important because file operations are asynchronous in Node.js, meaning they do not block the execution of subsequent code if writefile is written outside readfile the JS thread reaches the readfile, the file starts being read and then while the file is being read the JS thread shifts to the write file function and that might cause error in writing the data to the file because the file has not been read completely. Until the data is not read and cleaned it can not be written hence to follow the sequence both the cleaning of files and writeFile is written inside readFile.
