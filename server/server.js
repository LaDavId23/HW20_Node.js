
//1) Задача состоит в следующем! 
// - Установить node.js
// - ввести команду node в коммандной строке, после чего вы попадете в среду,
//  и это означает что все успешно установилось!
// - после чего создать папку и в ней файл server.js где вы успешно сможете написать классный код!!)
// ВОТ НИЖЕ КЛАССНЫЙ КОД КОТОРЫЙ ВАМ НУЖНО БУДЕТ РАССШИРИТЬ!!

const http = require('http'); // подключаем http модуль!
const group = require('./group');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/data') {
        res.end(JSON.stringify(group));
    } else if (req.url === '/status') {
        res.end(JSON.stringify({ status: "Active" }));
    }

}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000));

            // нужно будет положить этот код в файл server.js, сохранить и ввести команду node server.js в коммандной строке, будучи на данный момент директории где лежит файл с этим кодом!!
            // и после этого перейти по ссылке в браузере http://localhost:3000 где вы увидете HELLO WORLD!
            // поиграться с ответом! вернуть обьект { name: 'SERGEI', lastName: 'SHAKHOV' }
            // добавить условие если роут равен /data то вернуть строку success
            // ВОТ И ВСЕ ДЗ!!!! ибо и с этим может возникнуть не мало проблем!
