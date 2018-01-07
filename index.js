function getFirstSelector(selector) {
    return document.getElementById('app').querySelector(selector);
}

function nestedTarget() {
    return document.getElementById('app').querySelector('#nested .target');
}

function increaseRankBy(n) {
    const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

    for (let i = 0; i < lis.length; i++) {
        let rank = parseInt(lis[i].innerHTML) + n;
        lis[i].innerHTML = rank;
    };

    return;
}

function deepestChild() {

    const lis = document.getElementById('app').querySelectorAll('div#grand-node');
    const result = lis[0].querySelectorAll('div');
    return result[result.length - 1];
}
