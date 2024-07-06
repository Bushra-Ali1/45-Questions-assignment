function make_sandwich(...items:string[]){
    console.log(`Making a sandwich with: ${items. join(`,`)}.`)
    console.log(`Enjoy your sandwich!`);
}
make_sandwich("tomato", "club");
make_sandwich("chicken", "cucumber", "cheese");
make_sandwich("mayo","mustard", "herby")