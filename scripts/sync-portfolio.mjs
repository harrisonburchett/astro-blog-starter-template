import {cp,mkdir} from 'node:fs/promises';
await mkdir(new URL('../public/portfolio/',import.meta.url),{recursive:true});
await cp(new URL('../portfolio/',import.meta.url),new URL('../public/portfolio/',import.meta.url),{recursive:true});
