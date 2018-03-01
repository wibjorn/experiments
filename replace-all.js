const replace = require('replace-in-file');

const folder = process.argv[2] || '.';
const prefix = process.argv[3] || '';

const options = {

    //Glob(s) 
    files: [
        `${folder}/**/${prefix}*.md`
    ],

    //Replacement to make (string or regex) 
    from: /(---\s*?#\s{1}[^\n]*)(\s*?#\s{1}[^\n]*)/,
    to: '$1',
};

if (process.argv[2]) {
    console.log(`Searching and ${process.argv[2]} in current folder and its children.`);
    if (process.argv[3])
        console.log(`Using prefix ${prefix} to check only files that begin with ${prefix}`);
} else {
    console.log(`Nothing passed in, searching and replacing in current folder and its children`)
}

replace(options)
    .then(changes => {
        console.log('Modified files:', changes.join(',\n'));
        console.log(changes.length + ' files modified');
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
