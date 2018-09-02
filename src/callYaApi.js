var translate = require('yandex-translate')("trnsl.1.1.20180901T194536Z.0876713001ce4726.66078fa498d24ad285869bac3dfdd3176af81615");

translate.translate('You can burn my house, steal my car, drink my liquor from an old fruitjar.', { to: 'ru' }, function(err, res) {
    console.log(res.text);
});

translate.detect('Граждане Российской Федерации имеют право собираться мирно без оружия, проводить собрания, митинги и демонстрации, шествия и пикетирование', function(err, res) {
    // res.lang -> 'ru'
});