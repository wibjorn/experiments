const replace = require('replace-in-file');

const folder = process.argv[2] || '.'

const options = {

    //Glob(s) 
    files: [
        `${folder}/**/*.md`
    ],

    //Replacement to make (string or regex) 
    from: /(---\s*?#\s{1}\S*)([s|\n|\r\n]*#\s{1}\S*)/,
    to: '$1',
};

if (process.argv[2]) {
    console.log(`Searching and ${process.argv[2]} in current folder and its children.`);
} else {
    console.log(`Nothing passed in, searching and replacing in current folder and its children`)
}

replace(options)
    .then(changes => {
        console.log('Modified files:', changes.join(',\n'));
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
