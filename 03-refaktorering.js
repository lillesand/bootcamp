/*
    Oppgave

    Refaktorer koden slik at den får høyere lesbarhet og dermed blir lettere å vedlikeholde.
    Du kan kjøre testene for å verifisere at koden fungerer etter endring
    ved å åpne oppgaver.html i nettleseren din

*/


function thirstyIn(water, ageArray) {
    return Math.floor(water/ ageArray.map(age => age < 18 ? 1 : age <= 50 ? 2 : 1.5).reduce((x,y) => x+y, 0));
}


const coachExperience = [4,5,3,3,1,5,3,6,8,3,6,6,8];

const average = function(list) {
    let sum = 0;
    for (var i=0 ;i<list.length;i++) {
        sum = sum + list[i];
    }
    let length = list.length;
    let average = sum/length;
    return average;
}
list => list.reduce((x,y) => x+y,0)/list.length;

function median(list) {
    return list.length % 2 === 1 ?
        list.sort()[Math.floor(list.length/2)] :
        (list.sort()[Math.floor(list.length/2)], list.sort()[Math.floor(list.length/2)-1])/2;
}

test('Refactoring', function() {
    equal(thirstyIn(150, [ 5, 30, 10 ]), 37, 'The Water Problem');

    equal(average(coachExperience).toFixed(1), 4.7, 'Average coach experience')
    equal(median(coachExperience), 5, 'median coach experience')
});