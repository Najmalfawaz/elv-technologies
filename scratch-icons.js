const fs = require('fs');

let txt = fs.readFileSync('components/services/services-solutions-grid.tsx', 'utf8');

txt = txt.replace(
    '    );\r\n\r\n    return (',
    `    );\r\n\r\n    const distinctIcons = [\r\n        Shield, Key, PlusSquare, Music, MonitorPlay, Users, \r\n        Monitor, Wifi, Network, Tv, Home, Lightbulb\r\n    ];\r\n\r\n    return (`
);

txt = txt.replace(
    '    );\n\n    return (',
    `    );\n\n    const distinctIcons = [\n        Shield, Key, PlusSquare, Music, MonitorPlay, Users, \n        Monitor, Wifi, Network, Tv, Home, Lightbulb\n    ];\n\n    return (`
);

fs.writeFileSync('components/services/services-solutions-grid.tsx', txt);
console.log('Fixed distinctIcons definition');
