#!/usr/bin/env node

'use strict';


var lib=require('./lib');
var argv=process.argv.slice(2);
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

//TODO:: properly handler argumetns, its bit danger..
var dir=argv[0];
if(!dir){
    console.log('Specify path to delete.');
} else {
    dir = path.resolve(process.cwd(), dir);

    rl.question("Are you sure to delete this path? yes/[no]: ", function(answer) {
        if(answer === "yes") {

            lib.shortRenameEverything(dir,function(){
                console.log('removing directory:'+dir);
                lib.deleteFolderRecursive(dir);
            });
            
        } else {
            process.exit();
        }
    });
    
    
    
}