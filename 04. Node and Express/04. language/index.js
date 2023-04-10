import { createRequire } from "module";
const require = createRequire(import.meta.url)
import {franc, francAll} from 'franc'
const langs = require("langs")
const colors = require("colors")
let input = process.argv[2]
let langCode = franc(input)

if (langCode === "und") {
    console.log("Sorry, couldn't figure it out".red)
} else {
    let language = langs.where("3", langCode)
    console.log(language.name.green)
}