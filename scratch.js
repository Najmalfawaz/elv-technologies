const fs = require('fs');

let txt = fs.readFileSync('components/services/services-solutions-grid.tsx', 'utf8');

txt = txt.replace(/\{displayedSolutions\.map\(\(solution, idx\) => \(\r?\n\s+<motion\.div/g, 
`{displayedSolutions.map((solution, idx) => {
                        const Icon = distinctIcons[idx % distinctIcons.length];
                        return (
                        <CarouselItem key={solution.title} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <motion.div`);

txt = txt.replace(/<solution\.icon/, '<Icon');

txt = txt.replace(/<\/motion\.div>\r?\n\s+\)\)}\r?\n\s+<\/div>/g,
`</motion.div>
                        </CarouselItem>
                    );})}
                    </CarouselContent>
                    
                    <div className="hidden xl:block">
                        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-slate-800 text-white border-slate-700 hover:bg-red-500 hover:text-white" />
                        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-slate-800 text-white border-slate-700 hover:bg-red-500 hover:text-white" />
                    </div>
                </Carousel>`);

fs.writeFileSync('components/services/services-solutions-grid.tsx', txt);
console.log('Fixed');
